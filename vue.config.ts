const path = require("path");
const resolve = dir => path.join(__dirname, dir) // 路径
module.exports = {
  css: {
    extract: false,
  },
  // configureWebpack:config =>{
	// config.resolve.alias
	// .set('@', resolve('src'))
  // }
  //   webpack: {
  //     alias: {
  //       "@": resolve("src"),
  //       components: resolve("src/components"),
  //       utils: resolve("src/utils"),
  //       common: resolve("src/common"),
  //       hooks: resolve("src/hooks"),
  //       store: resolve("src/store"),
  //       views: resolve("src/views"),
  //       api: resolve("src/api"),
  //     },
  //   },
};
