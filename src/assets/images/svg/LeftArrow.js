import React from 'react';
import Svg, { Path } from 'react-native-svg';
const LeftArrow = ({ color }) => {
  return (
    <Svg width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M22 6 12 16l10 10"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default LeftArrow;
