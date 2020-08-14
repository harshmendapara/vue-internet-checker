<template>
  <div />
</template>
<script>
  export default {
    created() {
      window.addEventListener('online', (res) => {
        this.$emit('status', true);
        this.$emit('res', res);
      });

      window.addEventListener('offline', (res) => {
        this.$emit('status', false);
        this.$emit('res', res);
      });
    },
  };
</script>
