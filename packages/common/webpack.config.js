// const path = require('path');
//
// module.exports = {
//   mode: 'production',
//   entry: './src/index.ts',
//   output: {
//     path: path.resolve(__dirname, 'lib'),
//     filename: 'common.js',
//     library: 'common',
//   },
//   resolve: {
//     extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: 'ts-loader',
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.(ts|tsx|js|jsx)$/,
//         include: [path.resolve(__dirname, 'src')],
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: [
//               '@babel/preset-typescript',
//               '@babel/preset-react',
//               '@babel/preset-env',
//             ],
//             plugins: ['@babel/transform-runtime'],
//           },
//         },
//       },
//     ],
//   },
// };
