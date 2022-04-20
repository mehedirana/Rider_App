import React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

export const EditButton = () => {
  return (
    <Svg width={36} height={36} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Rect opacity={0.6} width={36} height={36} rx={18} fill="#ECECEC" />
      <Path
        d="M16.715 24.73h-3.857a.643.643 0 0 1-.643-.643v-3.59a.643.643 0 0 1 .188-.455l9.642-9.642a.643.643 0 0 1 .91 0l3.59 3.59a.643.643 0 0 1 0 .91l-9.83 9.83ZM19.928 12.517l4.5 4.5"
        stroke="#242823"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
