const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Goldgraben Liederbuch',
  url: 'http://liederbuch.goldgraben.net',
  favicon: 'img/the-bluebird-transparent-128x128.png',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
			path: "songs",
			breadcrumbs: false,
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
  plugins: [
	  [require.resolve("@cmfcmf/docusaurus-search-local"),
   {
        // Options here
	   indexBlog: false,
	   lunr: {
		   b: 0,
	   },


      }],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Goldgraben Liederbuch',
        logo: {
          alt: 'Bluebird',
          src: 'img/the-bluebird-transparent-128x128.png',
        },
        items: [
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `G`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
