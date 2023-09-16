const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Lebenslieder',
  tagline: 'Gemeinsam singend mit unseren Kinder das Leben feiern und betrauern',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/tree-soundwaves-drawing.webp',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
			path: "songs",
			routeBasePath: "/",
			sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false, 
		pages: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Lebenslieder',
        logo: {
          alt: 'Lebenslieder Logo',
          src: 'img/tree-soundwaves-drawing.webp',
        },
        items: [
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `${new Date().getFullYear()} Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});