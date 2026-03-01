import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import { babel } from '@rollup/plugin-babel';
import vue from 'rollup-plugin-vue';

export default {
  input: 'src/index.js',
  external: ['vue'],
  plugins: [
    vue(),
    resolve({
      extensions: ['.mjs', '.js', '.json', '.node', '.vue'],
    }),
    commonjs({
      include: /node_modules/,
    }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.vue'],
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
  output: {
    format: 'umd',
    name: 'vueInternetChecker',
    exports: 'named',
    file: 'dist/vue-internet-checker.min.js',
    globals: {
      vue: 'Vue',
    },
  },
};
