import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const DownArrow = ({color}) => {
  return (
    <Svg width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M26 12 16 22 6 12"
        stroke={color ? color : "#EAEAEA"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
