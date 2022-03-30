import React from 'react';
import {View} from 'react-native';
import Svg, {G, Path, Defs, ClipPath, Rect, Circle} from 'react-native-svg';
const AccountIcon = ({color}) => (
  <Svg width={29} height={28} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M23.406 23.785c.59-.123.94-.74.655-1.27-.703-1.308-1.835-2.457-3.294-3.327-1.834-1.095-4.08-1.688-6.392-1.688-2.311 0-4.558.593-6.392 1.688-1.459.87-2.591 2.02-3.295 3.327-.285.53.066 1.147.656 1.27l.87.18a40 40 0 0 0 16.322 0l.87-.18Z"
      fill={color}
    />
    <Circle cx={14.375} cy={9.333} fill={color} r={5.833} />
  </Svg>
);

export default AccountIcon;
