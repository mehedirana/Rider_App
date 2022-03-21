import * as React from "react"
import Svg, { Path } from "react-native-svg"

const DirectionArrow = (props) => (
    <Svg
        width={27}
        height={23}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M3 23V10.455h13.364" stroke="#00D248" strokeWidth={5} />
        <Path
            d="m16.25 2.454 9.955 8.046-9.955 8.046V2.454Z"
            fill="#00D248"
            stroke="#00D248"
        />
    </Svg>
)

export default DirectionArrow
