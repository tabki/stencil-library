var config = {
  generateDistribution: true,
  generateWWW: false,
  publicPath: "assets/js"
};

// commonConfig injected from stencil.config.common.js
exports.config = Object.assign(commonConfig, config);
