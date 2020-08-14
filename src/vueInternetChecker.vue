<template>
  <div>
    <notifications
      group="vue-internet-checker"
      :speed="notificationSpeed"
      :position="notificationPosition"
    />
  </div>
</template>
<script>
  import Notifications from 'vue-notification';
  export default {
    components: {
      Notifications,
    },
    props: {
      notificationSpeed: {
        require: false,
        type: Number,
        default: 1000,
      },
      notificationPosition: {
        type: String,
        default: 'bottom right',
        require: false,
      },
      showNotification: {
        type: Boolean,
        default: true,
        require: false,
      },
      onlineNotification: {
        type: Object,
        require: false,
        default: null,
      },
      offlineNotification: {
        type: Object,
        require: false,
        default: null,
      },
    },
    created() {
      window.addEventListener('online', (event) => {
        this.$emit('status', true);
        this.$emit('event', event);
        if (this.showNotification) {
          this.$notify({
            group: 'vue-internet-checker',
            title: this.onlineNotification
              ? this.onlineNotification.title
              : '😊',
            text: this.onlineNotification
              ? this.onlineNotification.text
              : 'Are you Online 😊',
            type: this.onlineNotification
              ? this.onlineNotification.success
              : 'success',
            duration: this.onlineNotification
              ? this.onlineNotification.duration
              : 5000,
          });
        }
      });

      window.addEventListener('offline', (event) => {
        this.$emit('status', false);
        this.$emit('event', event);
        if (this.showNotification) {
          this.$notify({
            group: 'vue-internet-checker',
            title: this.offlineNotification
              ? this.offlineNotification.title
              : 'Opps! No Internet 😢',
            text: this.offlineNotification
              ? this.offlineNotification.text
              : 'Please check your network connection',
            type: this.offlineNotification
              ? this.offlineNotification.success
              : 'warn',
            duration: this.offlineNotification
              ? this.offlineNotification.duration
              : 5000,
          });
        }
      });
    },
  };
</script>
