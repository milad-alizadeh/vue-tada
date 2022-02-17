import DefaultTheme from 'vitepress/theme'
import tada from '../../../dist/index.mjs'
import '../../../dist/index.css'
import './tailwind.postcss'


export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(tada)
  }
}