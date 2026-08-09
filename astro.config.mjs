// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const repo = 'https://github.com/malys';

export default defineConfig({
  site: 'https://malys.github.io',
  base: '/MG4Suite',
  integrations: [
    starlight({
      title: 'MG4Suite',
      description:
        'Optional applications for the SAIC MG4 infotainment system running Android Automotive OS 9.',
      logo: { src: './src/assets/logo.svg', replacesTitle: true },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/tokens.css'],
      social: [{ icon: 'github', label: 'GitHub', href: `${repo}/MG4Suite` }],
      editLink: { baseUrl: `${repo}/MG4Suite/edit/main/site/` },
      lastUpdated: true,
      sidebar: [
        { label: 'Start here', items: [
          { label: 'What MG4Suite is', slug: 'start/overview' },
          { label: 'Before you install', slug: 'start/safety' },
        ]},
        { label: 'Applications', items: [{ autogenerate: { directory: 'apps' } }] },
        { label: 'Tutorial', items: [
          { label: '1. Get into Android Settings', slug: 'tutorial/settings-access' },
          { label: '2. Sideload an APK', slug: 'tutorial/sideload' },
          { label: '3. Set up ABRP telemetry', slug: 'tutorial/abrp' },
          { label: '4. Write your first rule', slug: 'tutorial/first-rule' },
          { label: '5. Replace the home screen', slug: 'tutorial/launchers' },
        ]},
        { label: 'Reference', items: [{ autogenerate: { directory: 'reference' } }] },
      ],
    }),
  ],
});
