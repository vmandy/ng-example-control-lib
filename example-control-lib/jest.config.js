var path = require('path');

console.log(__dirname);
module.exports = {
  verbose: true,
  globals: {
    "ts-jest": {
      tsConfigFile: path.join(__dirname, './src/tsconfig.spec.json')
    },
    __TRANSFORM_HTML__: true
  },
  preset: path.join(__dirname, './node_modules/jest-preset-angular'),
  setupTestFrameworkScriptFile: path.join(__dirname, './setupJest.js')//,
  // transformIgnorePatterns: [
  //   "node_modules/(?!@ngrx|@ionic-native|@ionic)"
  // ]
};


