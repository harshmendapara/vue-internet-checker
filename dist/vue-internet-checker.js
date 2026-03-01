(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.vueInternetChecker = {}, global.Vue));
})(this, (function (exports, vue) { 'use strict';

  var script = {
    name: 'VueInternetChecker',
    emits: ['status', 'event'],
    data: function data() {
      return {
        onOnline: null,
        onOffline: null
      };
    },
    mounted: function mounted() {
      var _this = this;
      if (typeof window === 'undefined') {
        return;
      }
      this.onOnline = function (event) {
        _this.$emit('status', true);
        _this.$emit('event', event);
      };
      this.onOffline = function (event) {
        _this.$emit('status', false);
        _this.$emit('event', event);
      };
      window.addEventListener('online', this.onOnline);
      window.addEventListener('offline', this.onOffline);
      if (typeof navigator !== 'undefined') {
        this.$emit('status', navigator.onLine);
      }
    },
    beforeUnmount: function beforeUnmount() {
      if (typeof window === 'undefined') {
        return;
      }
      if (this.onOnline) {
        window.removeEventListener('online', this.onOnline);
      }
      if (this.onOffline) {
        window.removeEventListener('offline', this.onOffline);
      }
    }
  };

  var _hoisted_1 = {
    style: {
      "display": "none"
    }
  };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1);
  }

  script.render = render;
  script.__file = "src/vueInternetChecker.vue";

  var install = function install(app) {
    app.component('VueInternetChecker', script);
    app.component('vue-internet-checker', script);
  };
  script.install = install;

  exports.default = script;
  exports.install = install;
  exports.vueInternetChecker = script;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
