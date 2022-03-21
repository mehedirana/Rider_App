import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

const Clock = (props) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle cx={12} cy={12} r={9} stroke="#696969" strokeWidth={2} />
        <Path
            d="M16.5 12h-4.25a.25.25 0 0 1-.25-.25V8.5"
            stroke="#696969"
            strokeWidth={2}
            strokeLinecap="round"
        />
    </Svg>
)

export default Clock
