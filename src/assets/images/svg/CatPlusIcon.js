import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const CartPlusIcon = ({color, style, height, width}) => {
  return (
    <Svg
      style={style ? style : {}}
      width={width ? width : 27}
      height={height ? height : 27}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M4.805 13.153H22.89M13.847 4.11v18.085"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};