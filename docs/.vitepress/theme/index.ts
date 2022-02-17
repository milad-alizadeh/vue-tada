import DefaultTheme from 'vitepress/theme'
import tada from '../../../dist/index.mjs'
import '../../../dist/index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    console.log(tada)
    app.use(tada)
  }
}