import type {NodeModel, Point} from '../types';

export interface RectBounds { x: number; y: number; w: number; h: number }

export type Obstacle =
  | { kind: 'rect'; x: number; y: number; w: number; h: number }
  | { kind: 'circle'; cx: number; cy: number; r: number };

// Geometry helpers (pure)
export function getNodeCenter(node: NodeModel): Point {
  switch (node.type) {
    case 'task':
      return {x: node.position.x + 70, y: node.position.y + 28};
    case 'start':
    case 'end':
      return {x: node.position.x + 24, y: node.position.y + 24};
  }
}

export function getNodeBounds(node: NodeModel): RectBounds & { r: number } {
  switch (node.type) {
    case 'task':
      return {x: node.position.x, y: node.position.y, w: 140, h: 56, r: 0};
    case 'start':
    case 'end':
      return {x: node.position.x, y: node.position.y, w: 48, h: 48, r: 24};
  }
}

export function getNodeBoundsForHitTest(node: NodeModel): RectBounds {
  switch (node.type) {
    case 'task':
      return {x: node.position.x, y: node.position.y, w: 140, h: 56};
    case 'start':
    case 'end':
      return {x: node.position.x, y: node.position.y, w: 48, h: 48};
  }
}

export function getTopmostHitNode(point: Point, nodes: NodeModel[]): NodeModel | undefined {
  for (let i = nodes.length - 1; i >= 0; i--) {
    const node = nodes[i];
    const {x, y, w, h} = getNodeBoundsForHitTest(node);
    if (point.x >= x && point.x <= x + w && point.y >= y && point.y <= y + h) return node;
  }
  return undefined;
}

export function getAnchorPointOnNodeBorder(node: NodeModel, towards: Point): Point {
  const center = getNodeCenter(node);
  const bounds = getNodeBounds(node);
  if (node.type === 'task') {
    return intersectRectFromCenter(center, towards, {x: bounds.x, y: bounds.y, w: bounds.w, h: bounds.h});
  }
  return intersectCircleFromCenter(center, towards, bounds.r);
}

export function intersectCircleFromCenter(c: Point, p: Point, r: number): Point {
  const dx = p.x - c.x;
  const dy = p.y - c.y;
  const len = Math.hypot(dx, dy) || 1;
  return {x: c.x + (dx / len) * r, y: c.y + (dy / len) * r};
}

export function intersectRectFromCenter(c: Point, p: Point, rect: RectBounds): Point {
  const dx = p.x - c.x;
  const dy = p.y - c.y;
  const tValues: number[] = [];
  const left = rect.x;
  const right = rect.x + rect.w;
  const top = rect.y;
  const bottom = rect.y + rect.h;

  if (dx !== 0) {
    const tLeft = (left - c.x) / dx;
    const yAtLeft = c.y + tLeft * dy;
    if (tLeft > 0 && yAtLeft >= top && yAtLeft <= bottom) tValues.push(tLeft);

    const tRight = (right - c.x) / dx;
    const yAtRight = c.y + tRight * dy;
    if (tRight > 0 && yAtRight >= top && yAtRight <= bottom) tValues.push(tRight);
  }

  if (dy !== 0) {
    const tTop = (top - c.y) / dy;
    const xAtTop = c.x + tTop * dx;
    if (tTop > 0 && xAtTop >= left && xAtTop <= right) tValues.push(tTop);

    const tBottom = (bottom - c.y) / dy;
    const xAtBottom = c.x + tBottom * dx;
    if (tBottom > 0 && xAtBottom >= left && xAtBottom <= right) tValues.push(tBottom);
  }

  const t = Math.min(...tValues);
  return {x: c.x + t * dx, y: c.y + t * dy};
}

// Routing & collision helpers
export function route(sourcePoint: Point, targetPoint: Point, obstacles: Obstacle[]): Point[] {
  if (clearSegment(sourcePoint, targetPoint, obstacles)) return [sourcePoint, targetPoint];

  const tryPath = (pts: Point[]) => (clearPolyline(pts, obstacles) ? sanitizePolyline(pts) : null);

  const p1 = tryPath([sourcePoint, {x: targetPoint.x, y: sourcePoint.y}, targetPoint]);
  if (p1) return p1;
  const p2 = tryPath([sourcePoint, {x: sourcePoint.x, y: targetPoint.y}, targetPoint]);
  if (p2) return p2;

  const {xs, ys} = candidateChannels(obstacles, sourcePoint, targetPoint);
  const xsLim = xs.slice(0, 12);
  const ysLim = ys.slice(0, 12);
  for (const x of xsLim) {
    const p = tryPath([sourcePoint, {x, y: sourcePoint.y}, {x, y: targetPoint.y}, targetPoint]);
    if (p) return p;
    for (const y of ysLim) {
      const pxy = tryPath([sourcePoint, {x, y: sourcePoint.y}, {x, y}, {x: targetPoint.x, y}, targetPoint]);
      if (pxy) return pxy;
    }
  }
  for (const y of ysLim) {
    const p = tryPath([sourcePoint, {x: sourcePoint.x, y}, {x: targetPoint.x, y}, targetPoint]);
    if (p) return p;
    for (const x of xsLim) {
      const pyx = tryPath([sourcePoint, {x: sourcePoint.x, y}, {x, y}, {x, y: targetPoint.y}, targetPoint]);
      if (pyx) return pyx;
    }
  }

  return [sourcePoint, targetPoint];
}

export function toPath(points: Point[]) {
  if (points.length === 0) return '';
  const [first, ...rest] = points;
  return ['M', first.x, first.y, ...rest.flatMap((p) => ['L', p.x, p.y])].join(' ');
}

export function clearPolyline(points: Point[], obstacles: Obstacle[]) {
  for (let i = 0; i < points.length - 1; i++) {
    if (!clearSegment(points[i], points[i + 1], obstacles)) return false;
  }
  return true;
}

export function clearSegment(a: Point, b: Point, obstacles: Obstacle[]) {
  for (const ob of obstacles) {
    if (ob.kind === 'rect') {
      if (segmentIntersectsRect(a, b, ob)) return false;
    } else {
      if (segmentIntersectsCircle(a, b, ob)) return false;
    }
  }
  return true;
}

export function segmentIntersectsRect(a: Point, b: Point, r: Obstacle & { kind: 'rect' }) {
  const minX = Math.min(a.x, b.x);
  const maxX = Math.max(a.x, b.x);
  const minY = Math.min(a.y, b.y);
  const maxY = Math.max(a.y, b.y);
  // Fast AABB reject: if the segment's bounding box doesn't overlap the rect, no intersection
  if (maxX < r.x || minX > r.x + r.w || maxY < r.y || minY > r.y + r.h) {
    return false;
  }
  if (pointInRect(a, r) || pointInRect(b, r)) return true;
  const edges = [
    [{x: r.x, y: r.y}, {x: r.x + r.w, y: r.y}],
    [{x: r.x + r.w, y: r.y}, {x: r.x + r.w, y: r.y + r.h}],
    [{x: r.x + r.w, y: r.y + r.h}, {x: r.x, y: r.y + r.h}],
    [{x: r.x, y: r.y + r.h}, {x: r.x, y: r.y}],
  ];
  for (const [p1, p2] of edges as any) {
    if (segmentsIntersect(a, b, p1, p2)) return true;
  }
  return false;
}

export function pointInRect(p: Point, r: RectBounds) {
  return p.x > r.x && p.x < r.x + r.w && p.y > r.y && p.y < r.y + r.h;
}

export function segmentIntersectsCircle(a: Point, b: Point, c: Obstacle & { kind: 'circle' }) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const l2 = dx * dx + dy * dy;
  if (l2 === 0) return distance(a.x, a.y, c.cx, c.cy) <= c.r;
  let t = ((c.cx - a.x) * dx + (c.cy - a.y) * dy) / l2;
  t = Math.max(0, Math.min(1, t));
  const px = a.x + t * dx;
  const py = a.y + t * dy;
  return distance(px, py, c.cx, c.cy) <= c.r;
}

export function distance(x1: number, y1: number, x2: number, y2: number) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.hypot(dx, dy);
}

export function segmentsIntersect(a: Point, b: Point, c: Point, d: Point) {
  const o1 = orientation(a, b, c);
  const o2 = orientation(a, b, d);
  const o3 = orientation(c, d, a);
  const o4 = orientation(c, d, b);
  if (o1 !== o2 && o3 !== o4) return true;
  if (o1 === 0 && onSegment(a, c, b)) return true;
  if (o2 === 0 && onSegment(a, d, b)) return true;
  if (o3 === 0 && onSegment(c, a, d)) return true;
  if (o4 === 0 && onSegment(c, b, d)) return true;
  return false;
}

export function orientation(p: Point, q: Point, r: Point) {
  const val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
  if (Math.abs(val) < 1e-6) return 0;
  return val > 0 ? 1 : 2;
}

export function onSegment(p: Point, q: Point, r: Point) {
  return (
    q.x <= Math.max(p.x, r.x) + 1e-6 &&
    q.x + 1e-6 >= Math.min(p.x, r.x) &&
    q.y <= Math.max(p.y, r.y) + 1e-6 &&
    q.y + 1e-6 >= Math.min(p.y, r.y)
  );
}

export function candidateChannels(obstacles: Obstacle[], sp: Point, tp: Point) {
  const xs = new Set<number>([sp.x, tp.x]);
  const ys = new Set<number>([sp.y, tp.y]);
  for (const ob of obstacles) {
    if (ob.kind === 'rect') {
      xs.add(ob.x - 8);
      xs.add(ob.x + ob.w + 8);
      ys.add(ob.y - 8);
      ys.add(ob.y + ob.h + 8);
    } else {
      xs.add(ob.cx - ob.r - 8);
      xs.add(ob.cx + ob.r + 8);
      ys.add(ob.cy - ob.r - 8);
      ys.add(ob.cy + ob.r + 8);
    }
  }
  const xm = (sp.x + tp.x) / 2;
  const ym = (sp.y + tp.y) / 2;
  const xArr = Array.from(xs).sort((a, b) => Math.abs(a - xm) - Math.abs(b - xm));
  const yArr = Array.from(ys).sort((a, b) => Math.abs(a - ym) - Math.abs(b - ym));
  return {xs: xArr, ys: yArr};
}

export function sanitizePolyline(points: Point[]) {
  const out: Point[] = [];
  for (const p of points) {
    const last = out[out.length - 1];
    if (!last || last.x !== p.x || last.y !== p.y) out.push({x: p.x, y: p.y});
  }
  const merged: Point[] = [];
  for (const p of out) {
    if (merged.length < 2) {
      merged.push(p);
      continue;
    }
    const a = merged[merged.length - 2];
    const b = merged[merged.length - 1];
    const isColinear = (a.x === b.x && b.x === p.x) || (a.y === b.y && b.y === p.y);
    if (isColinear) {
      merged[merged.length - 1] = p;
    } else {
      merged.push(p);
    }
  }
  return merged;
}
