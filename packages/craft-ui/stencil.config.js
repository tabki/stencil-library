var commonConfig = {
  namespace: "trustyle",
  buildDir: "",
  wwwDir: "build"
};

var config = {
  generateDistribution: true,
  generateWWW: true
};

// commonConfig injected from stencil.config.common.js
exports.config = Object.assign(commonConfig, config);
