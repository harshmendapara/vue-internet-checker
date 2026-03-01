<template>
  <div id="app">
    <VueInternetChecker @status="status" @event="event" />
    <h2>Internet Status: {{ onLine ? 'Online' : 'Offline' }}</h2>
    <p>Last event: {{ eventType || 'none' }}</p>
  </div>
</template>

<script>
  import VueInternetChecker from '../src';

  export default {
    components: {
      VueInternetChecker,
    },
    data() {
      return {
        onLine: true,
        eventType: null,
      };
    },
    methods: {
      status(ele) {
        this.onLine = ele;
      },
      event(ele) {
        this.eventType = ele.type;
      },
    },
  };
</script>
