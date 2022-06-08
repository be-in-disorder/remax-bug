module.exports = {
  one: true,
  output: 'dist/' + process.env.REMAX_PLATFORM,
  configWebpack({ config }) {
    // config 是 webpack-chain 的 Config 对象
    config.devtool('source-map');
    debugger
  },
};
