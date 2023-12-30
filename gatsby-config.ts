import type { GatsbyConfig, PluginRef } from 'gatsby';
import 'dotenv/config';

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

const config: GatsbyConfig = {
  pathPrefix: '/exposito',
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-jodie/gatsby-config.mjs
    siteTitle: 'Expósito',
    siteTitleAlt: 'Expósito - Pintura y decoración',
    siteHeadline: 'Expósito - Pintura y decoración',
    siteUrl: 'https://exposito.art',
    siteDescription: 'Pintura, decoración, ...',
    siteImage: '/banner.jpg',
    siteLanguage: 'es',
    author: '@kloder',
  },
  trailingSlash: 'always',
  plugins: [
    {
      resolve: '@lekoarts/gatsby-theme-jodie',
      // See the theme's README for all available options
      options: {
        navigation: [
          { name: 'Proyectos', slug: '/projects' },
          { name: 'Nosotros', slug: '/nosotros' },
        ],
        homepageProjectLimit: 10,
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'jodie - @lekoarts/gatsby-theme-jodie',
        short_name: 'jodie',
        description:
          'Image-heavy photography portfolio with colorful accents & customizable pages. Includes adaptive image grids powered by CSS grid and automatic image integration into projects.',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
        ],
      },
    },
    // You can remove this plugin if you don't need it
    shouldAnalyseBundle && {
      resolve: 'gatsby-plugin-webpack-statoscope',
      options: {
        saveReportTo: '${__dirname}/public/.statoscope/_bundle.html',
        saveStatsTo: '${__dirname}/public/.statoscope/_stats.json',
        open: false,
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
};

export default config;
