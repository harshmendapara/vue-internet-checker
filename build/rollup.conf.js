import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';

export default {
  input: 'src/index.js',
  plugins: [commonjs(), resolve(), babel(), vue()],
  output: [
    {
      format: 'umd',
      name: 'vueInternetChecker',
      file: 'dist/vue-internet-checker.js',
    },
    {
      format: 'es',
      file: 'dist/vue-internet-checker.esm.js',
    },
  ],
  external: ['ping'],
};
