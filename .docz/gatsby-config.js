const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Baobab',
    description: 'A design system named after my cat',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/home/joe/repos/baobab/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Baobab',
        description: 'A design system named after my cat',
        host: 'localhost',
        port: 3001,
        p: 3000,
        separator: '-',
        paths: {
          root: '/home/joe/repos/baobab',
          templates:
            '/home/joe/repos/baobab/node_modules/docz-core/dist/templates',
          docz: '/home/joe/repos/baobab/.docz',
          cache: '/home/joe/repos/baobab/.docz/.cache',
          app: '/home/joe/repos/baobab/.docz/app',
          appPackageJson: '/home/joe/repos/baobab/package.json',
          appTsConfig: '/home/joe/repos/baobab/tsconfig.json',
          gatsbyConfig: '/home/joe/repos/baobab/gatsby-config.js',
          gatsbyBrowser: '/home/joe/repos/baobab/gatsby-browser.js',
          gatsbyNode: '/home/joe/repos/baobab/gatsby-node.js',
          gatsbySSR: '/home/joe/repos/baobab/gatsby-ssr.js',
          importsJs: '/home/joe/repos/baobab/.docz/app/imports.js',
          rootJs: '/home/joe/repos/baobab/.docz/app/root.jsx',
          indexJs: '/home/joe/repos/baobab/.docz/app/index.jsx',
          indexHtml: '/home/joe/repos/baobab/.docz/app/index.html',
          db: '/home/joe/repos/baobab/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
