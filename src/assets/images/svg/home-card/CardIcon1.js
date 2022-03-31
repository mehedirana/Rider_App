import React from 'react'
import Svg, { Circle, Path } from "react-native-svg"

export const CardIcon1 =()=> {
  return (
    <Svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"

  >
    <Circle cx={24} cy={24} r={24} fill="#fff" />
    <Path
      d="m35.5 25 1.237 1.237L37.975 25l-1.238-1.237L35.5 25Zm-9.263 11.737 10.5-10.5-2.474-2.474-10.5 10.5 2.474 2.474Zm10.5-12.974-10.5-10.5-2.474 2.474 10.5 10.5 2.474-2.474ZM25 25l1.237 1.237L27.475 25l-1.238-1.237L25 25Zm-9.263 11.737 10.5-10.5-2.474-2.474-10.5 10.5 2.474 2.474Zm10.5-12.974-10.5-10.5-2.474 2.474 10.5 10.5 2.474-2.474Z"
      fill="#009E36"
    />
  </Svg>
  )
}