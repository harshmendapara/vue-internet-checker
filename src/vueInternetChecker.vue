<template>
  <div style="display: none" />
</template>
<script>
  export default {
    name: 'VueInternetChecker',
    emits: ['status', 'event'],
    data() {
      return {
        onOnline: null,
        onOffline: null,
      };
    },
    mounted() {
      if (typeof window === 'undefined') {
        return;
      }

      this.onOnline = (event) => {
        this.$emit('status', true);
        this.$emit('event', event);
      };

      this.onOffline = (event) => {
        this.$emit('status', false);
        this.$emit('event', event);
      };

      window.addEventListener('online', this.onOnline);
      window.addEventListener('offline', this.onOffline);

      if (typeof navigator !== 'undefined') {
        this.$emit('status', navigator.onLine);
      }
    },
    beforeUnmount() {
      if (typeof window === 'undefined') {
        return;
      }

      if (this.onOnline) {
        window.removeEventListener('online', this.onOnline);
      }

      if (this.onOffline) {
        window.removeEventListener('offline', this.onOffline);
      }
    },
  };
</script>
