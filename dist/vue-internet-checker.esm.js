import { openBlock, createElementBlock } from 'vue';

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
  return openBlock(), createElementBlock("div", _hoisted_1);
}

script.render = render;
script.__file = "src/vueInternetChecker.vue";

var install = function install(app) {
  app.component('VueInternetChecker', script);
  app.component('vue-internet-checker', script);
};
script.install = install;

export { script as default, install, script as vueInternetChecker };
