import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

export const CardIcon2 = () => {
  return (
    <Svg width={48} height={48} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Circle cx={24} cy={24} r={24} fill="#fff" />
      <Circle cx={24} cy={24} r={15.75} stroke="#0050B8" strokeWidth={3.5} />
      <Path
        d="M31.875 24h-7.438a.438.438 0 0 1-.437-.438v-5.687"
        stroke="#0050B8"
        strokeWidth={3.5}
        strokeLinecap="round"
      />
    </Svg>
  );
};
