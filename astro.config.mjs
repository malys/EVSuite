// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const repo = 'https://github.com/malys';

export default defineConfig({
  site: 'https://malys.github.io',
  base: '/EVSuite',
  integrations: [
    starlight({
      title: 'EVSuite',
      description:
        'Optional applications for the SAIC MG4 infotainment system running Android Automotive OS 9.',
      logo: { src: './src/assets/logo.svg', replacesTitle: true },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/tokens.css'],
      social: [{ icon: 'github', label: 'GitHub', href: repo }],
      lastUpdated: true,
      sidebar: [
        { label: 'Start here', items: [
          { label: 'Choose your apps', slug: 'start/overview' },
          { label: 'Before you install', slug: 'start/safety' },
        ]},
        { label: 'Applications', items: [
          { label: 'Control vehicle settings', slug: 'apps/profile' },
          { label: 'Automate actions', slug: 'apps/tasker' },
          { label: 'Send data to ABRP', slug: 'apps/abrp' },
          { label: 'Replace the home screen', slug: 'apps/launcher' },
          { label: 'Add swipe shortcuts', slug: 'apps/swipe' },
          { label: 'Watch energy and trips', slug: 'apps/chargepilot' },
        ]},
        { label: 'How-to guides', items: [
          { label: 'Open Android Settings', slug: 'tutorial/settings-access' },
          { label: 'Install an APK', slug: 'tutorial/sideload' },
          { label: 'Switch release channels', slug: 'tutorial/release-channels' },
          { label: 'Create a driving profile', slug: 'tutorial/profile' },
          { label: 'Connect EVProfile and EVTasker', slug: 'tutorial/profile-tasker' },
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
