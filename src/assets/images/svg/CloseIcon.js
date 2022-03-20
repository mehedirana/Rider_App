import React from 'react';
import Svg, {Path, Rect, Circle, G, Defs} from 'react-native-svg';

export const CloseIcon = ({color}) => {
  return (
    <Svg
     
      width={40}
      height={40}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M25 7 7 25M25 25 7 7"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
