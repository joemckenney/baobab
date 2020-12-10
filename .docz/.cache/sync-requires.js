const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/joe/repos/baobab/.docz/.cache/dev-404-page.js"))),
  "component---readme-md": hot(preferDefault(require("/home/joe/repos/baobab/README.md"))),
  "component---src-components-button-button-mdx": hot(preferDefault(require("/home/joe/repos/baobab/src/components/button/button.mdx"))),
  "component---src-components-clock-clock-mdx": hot(preferDefault(require("/home/joe/repos/baobab/src/components/clock/clock.mdx"))),
  "component---src-components-layout-layout-mdx": hot(preferDefault(require("/home/joe/repos/baobab/src/components/layout/layout.mdx"))),
  "component---src-components-menu-menu-mdx": hot(preferDefault(require("/home/joe/repos/baobab/src/components/menu/menu.mdx"))),
  "component---src-components-text-text-mdx": hot(preferDefault(require("/home/joe/repos/baobab/src/components/text/text.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/joe/repos/baobab/.docz/src/pages/404.js")))
}

