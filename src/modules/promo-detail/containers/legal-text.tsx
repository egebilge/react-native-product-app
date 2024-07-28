import { CustomMarkdown, ScreenWrapper } from 'components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import {
  promoDetailMarkdonwEN,
  promoDetailMarkdonwTR,
} from '../language/markdown'

const textMap = {
  promo_detail: {
    en: promoDetailMarkdonwEN,
    tr: promoDetailMarkdonwTR,
  },
}

export const LegalTextContainer = () => {
  const { i18n } = useTranslation()

  const text = useMemo(() => {
    return textMap.promo_detail[i18n.language as 'en' | 'tr']
  }, [i18n.language])

  return (
    <ScreenWrapper>
      <CustomMarkdown text={text} />
    </ScreenWrapper>
  )
}
