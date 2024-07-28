import { useStyles } from 'hooks/use-styles'
import { Text, TextProps } from 'react-native'

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'bodyLG'
  | 'bodyMD'
  | 'bodySM'
  | 'bodyXS'
  | 'bodyXXS'

type FontWeight = 'regular' | 'bold'

type TypographyColor = 'primary' | 'secondary'

interface TypographyProps extends TextProps {
  variant?: TypographyVariant
  center?: boolean
  fontWeight?: FontWeight
  color?: TypographyColor
}

const fontWeightFontFamilyMap = {
  regular: 'Helvetica',
  bold: 'Helvetica-Bold',
}

export const Typography = ({
  children,
  variant = 'bodyMD',
  color = 'primary',
  style,
  center = false,
  fontWeight = 'regular',
  ...props
}: TypographyProps) => {
  const { theme } = useStyles()

  const typographyStyles = theme.typography[variant]
  const fontFamily = fontWeightFontFamilyMap[fontWeight]

  return (
    <Text
      {...props}
      style={[
        typographyStyles,
        {
          fontFamily,
          textAlign: center ? 'center' : 'left',
          color:
            color === 'primary'
              ? theme.colors.primaryText
              : theme.colors.secondaryText,
        },
        style,
      ]}
    >
      {children}
    </Text>
  )
}
