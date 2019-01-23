var pageName = ["campaign"];
var currentProjectWorkingOn = "campaign";

var pages = {};
for (let index in pageName) {
  let page = pageName[index];
  pages[page] = {
    entry: `src/${page}/main.js`,
    filename: `index.htm`
  };
}
if (process.env.NODE_ENV === "production") {
  module.exports = {
    outputDir: `../${currentProjectWorkingOn}/controllers/${currentProjectWorkingOn}`,
    publicPath: `/plugins/gnosis/${currentProjectWorkingOn}/controllers/${currentProjectWorkingOn}`,
    pages,
    chainWebpack: config => {
      config.plugins.delete("preload-search");
      config.plugin(`html-${pageName[0]}`).tap(args => {
        args[0].minify.collapseWhitespace = false;
        return args;
      });
    }
  };
} else if (process.env.NODE_ENV === "development") {
  module.exports = {
    devServer: {
      disableHostCheck: true
    },
    pages: {
      index: {
        publicPath: "http://localhost:8081/",
        entry: `src/${currentProjectWorkingOn}/main.js`,
        // template: `src/${currentProjectWorkingOn}/${currentProjectWorkingOn}.htm`,
        filename: "index.html",
        chunks: ["chunk-vendors", "chunk-common", "index"]
      }
    }
  };
}
