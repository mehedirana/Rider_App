import * as React from "react"
import Svg, { Path } from "react-native-svg"

const HorizontalLine = (props) => (
    <Svg
        width={335}
        height={1}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path stroke="#EAEAEA" d="M0 .5h335" />
    </Svg>
)

export default HorizontalLine

