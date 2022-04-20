import React from 'react';
import Svg, { Rect, Path } from "react-native-svg";

export const ActiveButton =()=> {
  return (
    <Svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect opacity={0.6} width={36} height={36} rx={18} fill="#00D248" />
    <Path
      d="m26.357 13.16-9 9-4.5-4.5"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  )
}