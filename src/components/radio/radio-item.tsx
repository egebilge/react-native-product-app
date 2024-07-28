import { Typography } from 'components'
import { useStyles } from 'hooks/use-styles'
import { TouchableOpacity, View } from 'react-native'

import { makeRadioItemStyles } from './styles'
import { RadioItemProps } from './types'

export const RadioItem = ({ item, checked, onChange }: RadioItemProps) => {
  const { styles } = useStyles(makeRadioItemStyles)

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onChange(item.key)}
    >
      <Typography style={[checked && styles.textSelected]} variant="bodySM">
        {item.label}
      </Typography>

      <View style={[styles.circle, checked && styles.circleSelected]}>
        <View
          style={[styles.innerCircle, checked && styles.innerCircleSelected]}
        />
      </View>
    </TouchableOpacity>
  )
}
