import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const CartMinusIcon = ({color, height, width}) => {
  return (
    <Svg
      width={width ? width : 28}
      height={height ? height : 27}
      viewBox="0 0 28 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M4.924 13.153h18.084"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};