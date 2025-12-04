export type NodeType = 'start' | 'task' | 'end'

export interface Point {
  x: number
  y: number
}

export interface NodeModel {
  id: string
  type: NodeType
  position: Point
  label?: string
}

export interface EdgeModel {
  id: string
  source: string // node id
  target: string // node id
  label?: string
}

export interface DiagramJSON {
  definitions: {
    $type: 'bpmn:Definitions'
    id: string
    targetNamespace: string
    rootElements: Array<{
      $type: 'bpmn:Process'
      id: string
      isExecutable: boolean
      name?: string
      flowElements: Array<any>
    }>
  }
}

export interface DiagramState {
  nodes: NodeModel[]
  edges: EdgeModel[]
}

export function mapBpmnTypeToInternal(bpmnType: string): NodeType | undefined {
  switch (bpmnType) {
    case 'bpmn:StartEvent':
      return 'start';
    case 'bpmn:UserTask':
      return 'task';
    case 'bpmn:EndEvent':
      return 'end';
    default:
      return undefined;
  }
}

export function mapInternalTypeToBpmn(nodeType: NodeType): string {
  switch (nodeType) {
    case 'start':
      return 'bpmn:StartEvent';
    case 'task':
      return 'bpmn:UserTask';
    case 'end':
      return 'bpmn:EndEvent';
  }
}

export function importFromExampleJson(json: DiagramJSON): DiagramState {
  const process = json.definitions.rootElements.find((r) => r.$type === 'bpmn:Process') as any;
  const flowElements: any[] = process?.flowElements ?? [];
  const nodes: NodeModel[] = [];
  const edges: EdgeModel[] = [];

  for (const el of flowElements) {
    if (el.$type === 'bpmn:SequenceFlow') {
      edges.push({id: el.id, source: el.sourceRef, target: el.targetRef, label: el.name});
    } else {
      const type = mapBpmnTypeToInternal(el.$type);
      if (!type) continue;
      nodes.push({
        id: el.id,
        type,
        position: {x: Number(el.x ?? 0), y: Number(el.y ?? 0)},
        label: el.name,
      });
    }
  }

  return {nodes, edges};
}

export function exportToExampleJson(state: DiagramState): DiagramJSON {
  const flowElements: any[] = [];

  for (const n of state.nodes) {
    flowElements.push({
      $type: mapInternalTypeToBpmn(n.type),
      id: n.id,
      name: n.label ?? '',
      x: n.position.x,
      y: n.position.y,
    });
  }

  for (const e of state.edges) {
    flowElements.push({
      $type: 'bpmn:SequenceFlow',
      id: e.id,
      sourceRef: e.source,
      targetRef: e.target,
      name: e.label ?? '',
    });
  }

  return {
    definitions: {
      $type: 'bpmn:Definitions',
      id: 'Definitions_1',
      targetNamespace: 'bpmn.io',
      rootElements: [
        {
          $type: 'bpmn:Process',
          id: 'Process_1',
          isExecutable: false,
          name: 'Workflow',
          flowElements,
        },
      ],
    },
  };
}

export function generateId(prefix: string): string {
  return `${prefix}_${Math.random().toString(36).slice(2, 8)}`;
}

// --- Validation helpers for example.json shape ---

export interface ValidationResult {
  valid: boolean
  errors: string[]
}

export function validateExampleJson(json: unknown): ValidationResult {
  const errors: string[] = [];
  const root = json as any;
  if (!root || typeof root !== 'object') {
    return {valid: false, errors: ['Root is not an object']};
  }
  const defs = root.definitions;
  if (!defs || defs.$type !== 'bpmn:Definitions') {
    errors.push('definitions.$type must be "bpmn:Definitions"');
  }
  const process = defs?.rootElements?.find?.((r: any) => r.$type === 'bpmn:Process');
  if (!process) {
    errors.push('definitions.rootElements must contain one bpmn:Process');
  }
  const flow = (process?.flowElements as any[]) || [];
  const idSet = new Set<string>();
  const nodeIds = new Set<string>();
  for (const el of flow) {
    if (!el || typeof el !== 'object') {
      errors.push('flowElements contains a non-object entry');
      continue;
    }
    if (typeof el.id !== 'string' || el.id.length === 0) {
      errors.push('Every flowElement must have a non-empty string id');
    } else {
      if (idSet.has(el.id)) errors.push(`Duplicate id detected: ${el.id}`);
      idSet.add(el.id);
    }
    if (el.$type === 'bpmn:SequenceFlow') {
      if (typeof el.sourceRef !== 'string') errors.push(`SequenceFlow ${el.id}: missing sourceRef`);
      if (typeof el.targetRef !== 'string') errors.push(`SequenceFlow ${el.id}: missing targetRef`);
    } else {
      const t = mapBpmnTypeToInternal(el.$type);
      if (!t) errors.push(`Unsupported element type: ${String(el.$type)}`);
      if (typeof el.x !== 'number' || typeof el.y !== 'number') {
        errors.push(`Element ${el.id} (${el.$type}) must have numeric x and y`);
      }
      if (typeof el.id === 'string') nodeIds.add(el.id);
    }
  }
  for (const el of flow) {
    if (el.$type === 'bpmn:SequenceFlow') {
      if (typeof el.sourceRef === 'string' && !nodeIds.has(el.sourceRef)) {
        errors.push(`SequenceFlow ${el.id}: sourceRef does not reference an existing node (${el.sourceRef})`);
      }
      if (typeof el.targetRef === 'string' && !nodeIds.has(el.targetRef)) {
        errors.push(`SequenceFlow ${el.id}: targetRef does not reference an existing node (${el.targetRef})`);
      }
      if (el.sourceRef === el.targetRef) {
        errors.push(`SequenceFlow ${el.id}: sourceRef and targetRef must differ`);
      }
    }
  }
  return {valid: errors.length === 0, errors};
}

export function safeImportFromExampleJson(json: unknown): DiagramState {
  const result = validateExampleJson(json);
  if (!result.valid) {
    const message = `Invalid diagram JSON:\n- ${result.errors.join('\n- ')}`;
    throw new Error(message);
  }
  return importFromExampleJson(json as DiagramJSON);
}
