import { ViewProps } from 'react-native'

export type StackDirection = 'horizontal' | 'vertical'

export interface StackProps extends ViewProps {
  direction?: StackDirection
  spacing?: number
  align?: 'flex-start' | 'center' | 'flex-end'
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
  wrap?: boolean
  children?: React.ReactNode
}
