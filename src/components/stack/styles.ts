import { StyleSheet } from 'react-native'

import { StackProps } from './types'

export const createStackStyles = ({
  direction,
  spacing,
  align,
  justify,
  wrap,
}: Pick<StackProps, 'direction' | 'spacing' | 'align' | 'justify' | 'wrap'>) =>
  StyleSheet.create({
    stack: {
      width: '100%',
      flexDirection: direction === 'horizontal' ? 'row' : 'column',
      alignItems: align,
      justifyContent: justify,
      flexWrap: wrap ? 'wrap' : 'nowrap',
      gap: spacing,
    },
  })
