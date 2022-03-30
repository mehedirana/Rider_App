import React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect, Circle} from 'react-native-svg';
const CartIcon = ({color}) => (
  <Svg width={29} height={28} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M10.083 9.333V8.167A4.667 4.667 0 0 1 14.75 3.5v0a4.667 4.667 0 0 1 4.666 4.667v1.166"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.836 8.753c-.586.585-.586 1.528-.586 3.414v5.5c0 3.771 0 5.657 1.172 6.828 1.171 1.172 3.057 1.172 6.828 1.172h5c3.771 0 5.657 0 6.828-1.172 1.172-1.171 1.172-3.057 1.172-6.828v-5.5c0-1.886 0-2.829-.586-3.414-.586-.586-1.528-.586-3.414-.586h-13c-1.886 0-2.828 0-3.414.586ZM12.25 14a1 1 0 1 0-2 0v2.333a1 1 0 1 0 2 0V14Zm7 0a1 1 0 1 0-2 0v2.333a1 1 0 1 0 2 0V14Z"
      fill={color}
    />
  </Svg>
);

export default CartIcon;
