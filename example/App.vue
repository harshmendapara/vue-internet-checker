<template>
  <div id="app">
    <vue-internet-checker @status="status" @res="res"> </vue-internet-checker>
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
      res(ele) {
        console.log(ele);
      },
    },
  };
</script>
