var pageName = ["amazon", "walmart"];
var pages = {};
for (let index in pageName) {
  let page = pageName[index];
  pages[page] = {
    entry: `src/${page}/main.js`,
    template: `src/${pageName[index]}/${page}.htm`,
    filename: `${page}.htm`
  };
}

module.exports = {
  outputDir: "../pages",
  assetsDir: "../assets",
  publicPath: "/themes/gnosis/assets",
  pages,
  chainWebpack: config => {
    config.plugins.delete("preload-search");
    config.plugin(`html-${pageName[0]}`).tap(args => {
      args[0].minify.collapseWhitespace = false;
      return args;
    });
  }
};

// https://github.com/kangax/html-minifier#options-quick-reference
// https://forum.vuejs.org/t/enable-minify-removeattributequotes/47431/6
// npx vue-cli-service inspect --plugins
// pages: {
//   amazon: {
//     entry: "src/amazon/main.js",
//     template: "src/amazon/amazon.htm",
//     filename: "amazon.htm"
//   },
//   walmart: {
//     entry: "src/walmart/main.js",
//     template: "src/walmart/walmart.htm",
//     filename: "walmart.htm"
//   }
// },
