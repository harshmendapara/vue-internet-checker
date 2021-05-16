# vue-internet-checker

* Check Internet Availability for your vue app 😃.

* Get notifications regarding your internet Availability by using it. In needing of your feedback for my efforts.😃

* This is [on GitHub](https://github.com/Harsh02051998/vue-internet-checker) so let me know if I've b0rked it somewhere, give me a star :star: if you like it :beers:

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

## :white_check_mark: Example :four_leaf_clover:

### template
```html
<vue-internet-checker
  @status="status"
  @event="event"
/>
```

### script
```javascript
  import vueInternetChecker from 'vue-internet-checker';

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
      event(ele) {
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
| `event` |  |


## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request :D

## Author

**vue-internet-checker** © [Harsh Mendapara](https://github.com/harshmendapara/), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Harsh Mendapara with help from contributors ([list](https://github.com/harshmendapara/vue-internet-checker/graphs/contributors)).

> GitHub [@Harsh Mendapara](https://github.com/harshmendapara)

> Gmail [@Harsh Mendapara](mendaparaharsh02@gmail.com)

> Linkedin [@Harsh Mendapara](https://www.linkedin.com/in/harsh-mendapara-44883a165/)

> Facebook [@Harsh Mendapara](https://www.facebook.com/mhb0205)
> 
Let's fly together :)


