import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.doras.to',
  integrations: [starlight({
    title: 'Doras.to',
    editLink: {
      baseUrl: 'https://github.com/doras-to/docs/edit/master/',
    },
    social: {
      github: 'https://github.com/doras-to/docs'
    },
    sidebar: [{
      label: 'Guides',
      items: [
        // Each item here is one entry in the navigation menu.
        {
          label: 'Getting Started',
          link: '/guides/getting-started/'
        }]
    }, {
      label: 'Contributing',
      autogenerate: {
        directory: 'contributing',
      }
    }]
  }), react(), tailwind()]
});