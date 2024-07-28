import { Stack } from 'components/stack'

import { RadioItem } from './radio-item'
import { RadioGroupProps } from './types'

export const RadioGroup = ({ items, value, onChange }: RadioGroupProps) => {
  return (
    <Stack spacing={16}>
      {items.map(item => {
        return (
          <RadioItem
            key={item.key}
            item={item}
            checked={
              Array.isArray(value)
                ? value.includes(item.key)
                : value === item.key
            }
            onChange={onChange}
          />
        )
      })}
    </Stack>
  )
}
