import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

export const CardIcon4 = () => {
  return (
    <Svg width={48} height={48} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Circle cx={24} cy={24} r={24} fill="#fff" />
      <Circle cx={24} cy={24} r={15.75} stroke="#CC1B16" strokeWidth={3.5} />
      <Path d="m34.5 34.5-21-21" stroke="#CC1B16" strokeWidth={3.5} />
    </Svg>
  );
};
