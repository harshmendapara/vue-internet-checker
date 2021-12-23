<template>
  <div />
</template>

<script>
export default {
  created() {
    if (!window.navigator.onLine) {
      this.$emit('status', false)
    } else {
      this.$emit('status', true)
    }
    window.addEventListener('online', (event) => {
      this.$emit('status', true)
      this.$emit('event', event)
    })

    window.addEventListener('offline', (event) => {
      this.$emit('status', false)
      this.$emit('event', event)
    })
  },
}
</script>
