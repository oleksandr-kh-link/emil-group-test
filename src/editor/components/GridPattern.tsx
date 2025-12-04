import React, {memo} from 'react';

function GridPatternImpl() {
  const size = 20;
  const color = 'rgba(255,255,255,0.06)';
  return (
    <pattern id="grid" width={size} height={size} patternUnits="userSpaceOnUse">
      <path d={`M ${size} 0 L 0 0 0 ${size}`} fill="none" stroke={color} strokeWidth="1" />
    </pattern>
  ) as unknown as JSX.Element;
}

const GridPattern = memo(GridPatternImpl);
export default GridPattern;
