import * as React from 'react'
import { memo } from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { Path } from 'react-native-svg'
const Explore = (props: SvgProps) => (
  <Svg
    width={props.width || 26}
    height={props.height || 26}
    viewBox="0 0 26 26"
    fill="none"
    color={props.color}
    {...props}
  >
    <Path
      fill={props.color || '#1D1E1C'}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.135437 13C0.135437 5.90446 5.90446 0.135437 13 0.135437C20.0956 0.135437 25.8646 5.90446 25.8646 13C25.8646 20.0956 20.0956 25.8646 13 25.8646C5.90446 25.8646 0.135437 20.0956 0.135437 13ZM16.5209 15.2745L19.6078 8.17892L19.608 8.17883C20.0957 7.04152 18.9584 5.90424 17.8211 6.39196L10.7256 9.47892C10.1839 9.72332 9.72262 10.156 9.4793 10.7252L6.41861 17.8473C5.90446 18.9581 7.06817 20.0954 8.17902 19.6077L15.2746 16.5207C15.8163 16.2763 16.2775 15.8437 16.5209 15.2745ZM13 14.7604C13.9723 14.7604 14.7604 13.9723 14.7604 13C14.7604 12.0278 13.9723 11.2396 13 11.2396C12.0278 11.2396 11.2396 12.0278 11.2396 13C11.2396 13.9723 12.0278 14.7604 13 14.7604Z"
    />
  </Svg>
)
const Memo = memo(Explore)
export default Memo
