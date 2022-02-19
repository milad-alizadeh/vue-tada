import { defineConfig } from 'vitepress';

export default defineConfig({
  title: '🎉 Ta-Da!',
  description: 'Lightweight, blazing fast, scroll animation library for Vue 3',
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