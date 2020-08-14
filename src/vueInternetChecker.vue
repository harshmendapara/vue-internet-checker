<template>
  <div />
</template>
<script>
  export default {
    created() {
      window.addEventListener('online', (event) => {
        this.$emit('status', true);
        this.$emit('event', event);
      });

      window.addEventListener('offline', (event) => {
        this.$emit('status', false);
        this.$emit('event', event);
      });
    },
  };
</script>
