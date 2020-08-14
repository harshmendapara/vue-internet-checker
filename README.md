# vue-internet-checker :zap: <a href="http://npmjs.org/package/vue-internet-checker"><img src="https://img.shields.io/npm/v/v-offline.svg" alt="npm version"></a> <a href="https://bundlephobia.com/result?p=v-offline"><img src="http://img.badgesize.io/vinayakkulkarni/v-offline/master/dist/v-offline.min.js?compression=gzip" alt="gzip size"></a> <a href="https://travis-ci.org/vinayakkulkarni/v-offline"><img src="https://travis-ci.org/vinayakkulkarni/v-offline.svg?branch=master" alt="Build Status"></a> <a href="http://npm-stat.com/charts.html?package=v-offline"><img src="https://img.shields.io/npm/dm/v-offline.svg" alt="npm downloads"></a>

* Detect offline & online events for your vue app.

* This is [on GitHub](https://github.com/Harsh02051998/vue-internet-checker) so let me know if I've b0rked it somewhere, give me a star :star: if you like it :beers:

* Demo here -> [💯 Webpackbin Link](https://goo.gl/Pq6Tky)

## Requirements

* [Vue.js](https://vuejs.org/) 2.x

## :white_check_mark: Install :ok_hand:

```bash
npm install vue-internet-checker
# or
yarn add vue-internet-checker
```

CDN: [UNPKG](https://unpkg.com/vue-internet-checker/dist/) | [jsDelivr](https://cdn.jsdelivr.net/npm/vue-internet-checker/dist/) (available as `window.vueInternetChecker`)

## :white_check_mark: Usage :mortar_board:

Register the component globally:

```javascript
Vue.component('vueInternetChecker', require('vue-internet-checker'));
```

Or use locally

```javascript
import vueInternetChecker from 'vue-internet-checker';
```

## :white_check_mark: Example 1 :four_leaf_clover:

### HTML
```html
<vue-internet-checker @status="status" @res="res"> </vue-internet-checker>
```

### JS
```javascript
  import vueInternetChecker from '../src';

  export default {
    components: {
      vueInternetChecker,
    },
    data: () => ({
      onLine: null,
    }),
    methods: {
      status(ele) {
        console.log(ele);
        this.onLine = ele;
      },
      res(ele) {
        console.log(ele);
      },
    },
  };

```

### CSS
```css

```

### :white_check_mark: :ear: Events

| Name                 | Description                                                                 |
| -------------------- | --------------------------------------------------------------------------- |
| `status` | Emits an Boolean value which can be used for multiple purposes in your app. |
| `res` |  |

## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request :D

## Author

**v-offline** © [Harsh Mendapara](https://github.com/Harsh02051998/), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Vinayak Kulkarni with help from contributors ([list](https://github.com/Harsh02051998/vue-internet-checker/graphs/contributors)).

> GitHub [@Harsh02051998](https://github.com/Harsh02051998)

