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
          { label: 'Choose your apps', slug: 'start/overview' },
          { label: 'Before you install', slug: 'start/safety' },
        ]},
        { label: 'Applications', items: [
          { label: 'Control vehicle settings', slug: 'apps/control' },
          { label: 'Automate actions', slug: 'apps/tasker' },
          { label: 'Send data to ABRP', slug: 'apps/abrp' },
          { label: 'Replace the home screen', slug: 'apps/simple-launcher' },
          { label: 'Add swipe shortcuts', slug: 'apps/swipe-launcher' },
        ]},
        { label: 'How-to guides', items: [
          { label: 'Open Android Settings', slug: 'tutorial/settings-access' },
          { label: 'Install an APK', slug: 'tutorial/sideload' },
          { label: 'Switch release channels', slug: 'tutorial/release-channels' },
          { label: 'Create a driving profile', slug: 'tutorial/control-profile' },
          { label: 'Connect Control and Tasker', slug: 'tutorial/control-tasker' },
          { label: 'Connect ABRP', slug: 'tutorial/abrp' },
          { label: 'Create your first rule', slug: 'tutorial/first-rule' },
          { label: 'Build advanced rules', slug: 'tutorial/tasker-rules' },
          { label: 'Set up the launchers', slug: 'tutorial/launchers' },
        ]},
        { label: 'Technical reference', items: [{ autogenerate: { directory: 'reference' } }] },
      ],
    }),
  ],
});
