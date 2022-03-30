import React from 'react';
import {View} from 'react-native';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
const FABIcon = ({color}) => (
  <Svg width={28} height={28} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M8.094 11.813a3.719 3.719 0 1 0 0-7.438 3.719 3.719 0 0 0 0 7.438ZM19.906 11.813a3.719 3.719 0 1 0 0-7.438 3.719 3.719 0 0 0 0 7.438ZM8.094 23.625a3.719 3.719 0 1 0 0-7.437 3.719 3.719 0 0 0 0 7.437ZM19.906 23.625a3.719 3.719 0 1 0 0-7.437 3.719 3.719 0 0 0 0 7.437Z"
      fill={color}
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default FABIcon;
