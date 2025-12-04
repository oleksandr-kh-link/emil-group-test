import {useCallback} from 'react';

import type {Point} from '../types';

export function useSvgClientPoint(svgRef: React.RefObject<SVGSVGElement>) {
  return useCallback(
      (clientX: number, clientY: number): Point => {
        const svg = svgRef.current;
        if (!svg) return {x: clientX, y: clientY};
        const pt = svg.createSVGPoint();
        pt.x = clientX;
        pt.y = clientY;
        const sp = pt.matrixTransform(svg.getScreenCTM()?.inverse());
        return {x: sp.x, y: sp.y};
      },
      [svgRef],
  );
}
