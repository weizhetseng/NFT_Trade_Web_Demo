import {
  defineConfig,
  presetIcons,
  presetWebFonts,
  presetUno,
  transformerVariantGroup,
  transformerDirectives,
  transformerCompileClass,
} from 'unocss'

export default defineConfig({
  presets: [
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetWebFonts(),
    presetUno(),
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    colors: {
      orange1: '#E6553B',
    },
  },
  transformers: [transformerVariantGroup(), transformerDirectives(), transformerCompileClass()],
})
