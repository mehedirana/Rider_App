import * as React from "react"
import Svg, { Path } from "react-native-svg"

const VerticalLine = (props) => (
    <Svg
        width={2}
        height={64}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path stroke="#EAEAEA" d="M.75 0v64" />
    </Svg>
)

export default VerticalLine
