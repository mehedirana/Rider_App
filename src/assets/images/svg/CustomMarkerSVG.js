import * as React from "react"
import Svg, { G, Circle, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const CustomMarkerSVG = (props) => (
    <Svg
        width={141}
        height={167}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <G filter="url(#a)" fill="#00D24A">
            <Circle cx={70.501} cy={70.345} r={17.345} />
            <Circle cx={70.501} cy={70.345} r={14.261} />
            <Path d="M64.719 86.533c1.799 1.156 5.002 5.944 5.396 15.803.385 9.636.77 11.563.77 11.178l.772-11.178c-.257-3.469.308-11.486 4.625-15.803H64.719Z" />
        </G>
        <Defs></Defs>
    </Svg>
)

export default CustomMarkerSVG
