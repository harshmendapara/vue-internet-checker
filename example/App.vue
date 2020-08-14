<template>
  <div id="app">
    <vue-internet-checker
      notification-position="bottom right"
      :notification-speed="1000"
      :show-notification="true"
      :online-notification="onlineNotification"
      :offline-notification="offlineNotification"
      @status="status"
      @event="event"
    />
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
      onlineNotification: {
        title: '😊',
        text: 'Are you Online 😊',
        type: 'success',
        duration: 5000,
      },
      offlineNotification: {
        title: 'Opps! No Internet 😢',
        text: 'Please check your network connection',
        type: 'warn',
        duration: 5000,
      },
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
