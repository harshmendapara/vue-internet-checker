# vue-internet-checker

Vue 3 component/plugin to detect browser internet connectivity changes using native `online` and `offline` events.

- Emits a boolean connectivity status.
- Emits the original browser event object.
- Lightweight component with no UI rendering.

## Requirements

- Vue `3.x`
- Browser environment (`window` and `navigator`)

## Install

```bash
npm install vue-internet-checker
# or
yarn add vue-internet-checker
# or
pnpm add vue-internet-checker
```

CDN builds:
- UNPKG: https://unpkg.com/vue-internet-checker/dist/
- jsDelivr: https://cdn.jsdelivr.net/npm/vue-internet-checker/dist/

## Usage

### 1) Global registration with plugin (`app.use`)

```js
import { createApp } from 'vue';
import App from './App.vue';
import VueInternetChecker from 'vue-internet-checker';

const app = createApp(App);
app.use(VueInternetChecker);
app.mount('#app');
```

Then use in templates:

```html
<vue-internet-checker @status="status" @event="event" />
```

### 2) Local registration in a component

```vue
<script>
import VueInternetChecker from 'vue-internet-checker';

export default {
  components: {
    VueInternetChecker,
  },
};
</script>

<template>
  <VueInternetChecker @status="status" @event="event" />
</template>
```

### 3) Named imports

```js
import { vueInternetChecker } from 'vue-internet-checker';
```

## TypeScript Support

This package includes built-in type declarations.

```ts
import VueInternetChecker, {
  vueInternetChecker,
  install,
  type InternetStatus,
  type InternetEvent,
} from 'vue-internet-checker';
```

Type details:
- `status` event payload: `InternetStatus` (`boolean`)
- `event` event payload: `InternetEvent` (`Event`)

### TypeScript Example (`<script setup lang="ts">`)

```vue
<template>
  <VueInternetChecker @status="onStatus" @event="onEvent" />
  <p>Status: {{ isOnline ? 'Online' : 'Offline' }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VueInternetChecker, {
  type InternetStatus,
  type InternetEvent,
} from 'vue-internet-checker';

const isOnline = ref<boolean>(true);

const onStatus = (value: InternetStatus): void => {
  isOnline.value = value;
};

const onEvent = (event: InternetEvent): void => {
  console.log(event.type);
};
</script>
```

## Events

| Name | Payload | Description |
| --- | --- | --- |
| `status` | `boolean` | Current connectivity status. `true` when online, `false` when offline. |
| `event` | `Event` | Native browser `online`/`offline` event object. |

## Behavior Details

- On mount, the component emits the initial status once (`navigator.onLine`).
- On browser connectivity change, it emits:
  - `status`
  - `event`
- On unmount, event listeners are removed.

## Full Example

```vue
<template>
  <main>
    <VueInternetChecker @status="onStatus" @event="onEvent" />

    <h1>Internet Checker</h1>
    <p>Status: <strong>{{ isOnline ? 'Online' : 'Offline' }}</strong></p>
    <p>Last event: {{ lastEventType }}</p>
  </main>
</template>

<script>
import VueInternetChecker from 'vue-internet-checker';

export default {
  name: 'ConnectivityExample',
  components: {
    VueInternetChecker,
  },
  data() {
    return {
      isOnline: true,
      lastEventType: 'initial',
    };
  },
  methods: {
    onStatus(value) {
      this.isOnline = value;
    },
    onEvent(event) {
      this.lastEventType = event.type;
    },
  },
};
</script>
```

## Vue 2 to Vue 3 Migration

Version `3.0.0` targets Vue 3.

- Upgrade your app to Vue 3.
- Register with `createApp(...).use(...)` for global use.
- If you were using local component import, it still works.

## Changelog

### 3.0.0

- Added Vue 3 support.
- Added plugin install API for `app.use(...)`.
- Added initial status emit on mount.
- Added listener cleanup on unmount.
- Updated build and package dependencies for Vue 3.

## Contributing

1. Fork the repo.
2. Create your branch: `git checkout -b my-feature`.
3. Commit your changes.
4. Push the branch.
5. Open a pull request.

## License

MIT

## Author

- GitHub: https://github.com/harshmendapara
- Email: mendaparaharsh02@gmail.com
- LinkedIn: https://www.linkedin.com/in/harsh-mendapara-44883a165/
