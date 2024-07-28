export interface RadioItem {
  key: string
  label: string
}

export interface RadioItemProps {
  item: RadioItem
  checked: boolean
  onChange: (key: string) => void
}

export interface RadioGroupProps {
  items: RadioItem[]
  value: string | string[]
  onChange: (key: string) => void
}
