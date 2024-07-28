import * as React from 'react'
import { memo } from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { Path } from 'react-native-svg'
const Profile = (props: SvgProps) => (
  <Svg
    width={props.width || 16}
    height={props.height || 17}
    viewBox="0 0 16 17"
    fill="none"
    color={props.color}
    {...props}
  >
    <Path
      fill={props.color || '#1D1E1C'}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.7622 4.12731C11.7622 1.75698 10.0772 0 7.99894 0C5.92101 0 4.23744 1.75698 4.23744 4.12731C4.23744 6.4979 5.92101 8.42105 7.99894 8.42105C10.0771 8.42105 11.7622 6.4979 11.7622 4.12731ZM15.9545 14.693L15.574 12.9737C15.1025 10.8431 13.1083 9.41629 10.9557 9.66927C9.97523 9.78449 8.98994 9.8421 7.9998 9.8421C7.00965 9.8421 6.02436 9.78449 5.04392 9.66927C2.89129 9.41629 0.897107 10.8431 0.42558 12.9737L0.0450643 14.693C0.0151119 14.8284 0 14.9666 0 15.1053C0 16.1517 0.842232 17 1.88118 17H14.1184C14.2561 17 14.3933 16.9848 14.5277 16.9546C15.5418 16.7269 16.1806 15.7144 15.9545 14.693Z"
    />
  </Svg>
)
const Memo = memo(Profile)
export default Memo
