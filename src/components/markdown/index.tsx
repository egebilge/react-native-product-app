import Markdown from 'react-native-markdown-display'
import { CommonTheme } from 'themes'
import { CustomMarkdownProps } from './types'

export const CustomMarkdown = ({ text }: CustomMarkdownProps) => {
  return (
    <Markdown
      style={{
        body: {
          paddingVertical: 30,
          maxHeight: '90%',
          fontFamily: 'Helvetica',
        },
        heading1: CommonTheme.typography.h2,
        heading2: CommonTheme.typography.h3,
        heading3: CommonTheme.typography.bodyLG,
        heading4: CommonTheme.typography.bodyMD,
        heading5: CommonTheme.typography.bodySM,
        heading6: CommonTheme.typography.bodyXS,
        strong: {
          fontFamily: 'Helvetica-Bold',
        },
      }}
    >
      {text}
    </Markdown>
  )
}
