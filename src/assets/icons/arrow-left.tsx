import * as React from 'react'
import { memo } from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { Path } from 'react-native-svg'

const ArrowLeft = (props: SvgProps) => (
  <Svg
    width={props.width || 18}
    height={props.height || 14}
    fill="none"
    viewBox="0 0 18 14"
    color={props.color}
    {...props}
  >
    <Path
      fill={props.color || '#1D1E1C'}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.410653 5.90488L5.90476 0.410779C6.15764 0.157901 6.50425 0 6.85213 0C7.2 0 7.54661 0.125823 7.79949 0.410779C8.33608 0.947368 8.33608 1.79975 7.79949 2.3376L4.6416 5.49426H15.662C16.4194 5.49426 17.0202 6.09376 17.0202 6.85241C17.0202 7.6098 16.4207 8.21056 15.662 8.21056H4.6416L7.83171 11.4007C8.36829 11.9373 8.36829 12.7896 7.83171 13.3275C7.29512 13.8641 6.44274 13.8641 5.90488 13.3275L0.410779 7.79991C0.157901 7.54703 0 7.20041 0 6.85254C0 6.50466 0.157895 6.15805 0.410779 5.90517L0.410653 5.90488Z"
    />
  </Svg>
)
const Memo = memo(ArrowLeft)
export default Memo
