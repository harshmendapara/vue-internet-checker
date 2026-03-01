import vueInternetChecker from './vueInternetChecker.vue';

const install = (app) => {
  app.component('VueInternetChecker', vueInternetChecker);
  app.component('vue-internet-checker', vueInternetChecker);
};

vueInternetChecker.install = install;

export { install, vueInternetChecker };
export default vueInternetChecker;
