const path = require('path');
const GasPlugin = require('gas-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const srcDir = path.join(__dirname, 'src');
const nodeModulesDir = path.join(__dirname, 'node_modules');
const outDir = path.join(__dirname, 'build');
const tsconfigFile = path.join(__dirname, 'tsconfig.json');

module.exports = (env, argv) => {
  return {
    resolve: {
      extensions: ['.ts'],
      modules: [srcDir, nodeModulesDir],
      plugins: [
        new TsconfigPathsPlugin({
          configFile: tsconfigFile,
        }),
      ],
    },
    entry: {
      app: path.join(srcDir, 'main.ts'),
    },
    output: {
      filename: 'build.gs',
      path: outDir,
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new GasPlugin({
        comment: argv.mode === 'production' ? false : true,
      }),
      new CopyPlugin([
        {
          from: path.join(__dirname, 'clasp.json'),
          to: path.join(__dirname, 'build/.clasp.json'),
          toType: 'file',
        },
        {
          from: path.join(__dirname, 'appsscript.json'),
          to: path.join(__dirname, 'build/appsscript.json'),
          toType: 'file',
        },
      ]),
    ],
  };
};
