const Vue = require('vue');
const vueInternetChecker = require('  ');

function getComponent(Component, propsData) {
  const Ctor = Vue.extend(Component);
  return new Ctor({ propsData }).$mount();
}

var exampleData = {
  online: navigator.onLine || false,
};

describe('VueDetectOffline', function () {
  it('has correct DOM structure', function () {
    const vm = getComponent(vueInternetChecker, {
      data: exampleData,
    });

    expect(vm.$el.nodeName).toBe('DIV');
  });
});
