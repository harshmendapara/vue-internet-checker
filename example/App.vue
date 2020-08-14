<template>
  <div id="app">
    <vue-internet-checker @status="status" @event="event" />
  </div>
</template>

<script>
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
      event(ele) {
        console.log(ele);
      },
    },
  };
</script>
