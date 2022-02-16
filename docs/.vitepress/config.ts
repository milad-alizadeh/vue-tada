import { defineConfig } from 'vitepress';

export default defineConfig({
  title: '🎉 Ta-Da! 🎉',
  description: 'Just playing around.',
  themeConfig: {
    nav: [
      { text: 'About', link: '/about/' },
      { text: 'Contact', link: 'https://google.com', target: '_blank' },
    ],
    sidebar: [
      { text: 'Home', link: '/' },
      { text: 'Lazy Loading', link: '/why/' },
    ]
  }
});