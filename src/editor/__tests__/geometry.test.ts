import {describe, expect, it} from 'vitest';

import {
  candidateChannels,
  clearPolyline,
  clearSegment,
  getAnchorPointOnNodeBorder,
  getNodeBounds,
  getNodeCenter,
  route,
  toPath,
  type Obstacle,
} from '../geometry';

import type {NodeModel, Point} from '../types';

function task(id: string, x: number, y: number, label?: string): NodeModel {
  return {id, type: 'task', position: {x, y}, label};
}

function start(id: string, x: number, y: number, label?: string): NodeModel {
  return {id, type: 'start', position: {x, y}, label};
}

describe('geometry helpers', () => {
  it('computes centers and bounds correctly (dynamic for task, fixed for circle)', () => {
    const n1 = task('n1', 100, 200);
    const n2 = start('n2', 300, 400);
    const b1 = getNodeBounds(n1);
    const b2 = getNodeBounds(n2);
    // Task size is dynamic; ensure positive and center derived from bounds
    expect(b1.w).toBeGreaterThan(0);
    expect(b1.h).toBeGreaterThan(0);
    expect(getNodeCenter(n1)).toEqual({x: b1.x + b1.w / 2, y: b1.y + b1.h / 2});
    // Start node has fixed bounds and radius
    expect(b2).toMatchObject({x: 300, y: 400, w: 48, h: 48, r: 24});
    expect(getNodeCenter(n2)).toEqual({x: 324, y: 424});
  });

  it('anchors on node borders toward opposite center', () => {
    const src = task('a', 100, 100);
    const tgt = start('b', 300, 100);
    const sourceCenter = getNodeCenter(src);
    const targetCenter = getNodeCenter(tgt);
    const sourceAnchor = getAnchorPointOnNodeBorder(src, targetCenter);
    const targetAnchor = getAnchorPointOnNodeBorder(tgt, sourceCenter);
    // For a horizontal relation, source anchor should be on right edge of task and
    // target anchor on left side of the circle. Task width is dynamic; derive expected edge.
    const sb = getNodeBounds(src);
    expect(sourceAnchor.x).toBeCloseTo(sb.x + sb.w, 3);
    expect(targetAnchor.x).toBeLessThan(targetCenter.x); // left side of circle
  });

  it('detects segment obstruction by rectangle obstacle', () => {
    const pointA: Point = {x: 0, y: 0};
    const b: Point = {x: 100, y: 0};
    const rect: Obstacle = {kind: 'rect', x: 40, y: -10, w: 20, h: 20};
    expect(clearSegment(pointA, b, [rect])).toBe(false);
    expect(clearSegment(pointA, b, [])).toBe(true);
  });

  it('routes around a rectangular obstacle using L or dogleg', () => {
    const src: Point = {x: 0, y: 0};
    const tgt: Point = {x: 100, y: 0};
    const rect: Obstacle = {kind: 'rect', x: 40, y: -10, w: 20, h: 20};
    const path = route(src, tgt, [rect]);
    // Should not be a direct straight line (2 points) due to obstruction
    expect(path.length).toBeGreaterThan(2);
    expect(clearPolyline(path, [rect])).toBe(true);
    // Path converts to an SVG path string
    const d = toPath(path);
    expect(d.startsWith('M ')).toBe(true);
  });

  it('candidateChannels includes endpoints and around obstacles', () => {
    const sp = {x: 0, y: 0};
    const tp = {x: 100, y: 50};
    const obstacles: Obstacle[] = [{kind: 'circle', cx: 50, cy: 25, r: 10}];
    const {xs, ys} = candidateChannels(obstacles, sp, tp);
    // Must contain the endpoints coordinates
    expect(xs).toContain(0);
    expect(xs).toContain(100);
    expect(ys).toContain(0);
    expect(ys).toContain(50);
  });

  it('routes around multiple obstacles without intersecting any', () => {
    const sp: Point = {x: 0, y: 0};
    const tp: Point = {x: 200, y: 0};
    const obstacles: Obstacle[] = [
      {kind: 'rect', x: 40, y: -12, w: 24, h: 24},
      {kind: 'rect', x: 90, y: -12, w: 24, h: 24},
      {kind: 'circle', cx: 150, cy: 0, r: 16},
    ];
    const path = route(sp, tp, obstacles);
    expect(path.length).toBeGreaterThan(2);
    expect(clearPolyline(path, obstacles)).toBe(true);
  });

  it('near-border clearance: path does not skim along obstacle edges due to padding', () => {
    const sp: Point = {x: 0, y: 0};
    const tp: Point = {x: 100, y: 0};
    // Obstacle very close to the straight segment, forcing a slight detour
    const ob: Obstacle = {kind: 'rect', x: 48, y: -6, w: 4, h: 12};
    const path = route(sp, tp, [ob]);
    // It might still be a dogleg if the straight line touches padding area
    expect(clearPolyline(path, [ob])).toBe(true);
  });
});
