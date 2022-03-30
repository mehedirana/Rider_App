import React from 'react';
import Svg, {Path, SvgProps, G, Defs} from 'react-native-svg';

export const TabSvg = ({color = '#FFFFFF', ...props}) => {
  return (
    <Svg
      width={139}
      height={75}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M0 .262s17.295-2.659 26.804 9.774C36.313 22.47 48.592 36.14 63.68 36.101c15.086-.037 26.954-.412 46.907-25.278 0 0 5.952-10.823 28.414-10.823v75H0V.262Z"
        fill="#fff"
      />
    </Svg>
  );
};
