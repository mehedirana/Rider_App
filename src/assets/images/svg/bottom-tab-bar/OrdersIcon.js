import React from 'react';
import Svg, {Path} from 'react-native-svg';

const OrdersIcon = ({color}) => (
  <Svg width={29} height={28} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.669 5.253c-.586.585-.586 1.528-.586 3.414V20.5c0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586h8.333c1.886 0 2.829 0 3.415-.586.585-.586.585-1.528.585-3.414V8.667c0-1.886 0-2.829-.585-3.414-.586-.586-1.529-.586-3.415-.586h-8.333c-1.886 0-2.828 0-3.414.586Zm4.08 4.247a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2h-7Zm0 4.667a1 1 0 0 0 0 2h7a1 1 0 1 0 0-2h-7Zm0 4.666a1 1 0 1 0 0 2h4.667a1 1 0 1 0 0-2H10.75Z"
      fill={color}
    />
  </Svg>
);

export default OrdersIcon;
