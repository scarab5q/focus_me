<template>
  <Popup />
  <!-- <Confirmation /> -->
  <!-- <Timer /> -->
</template>

<script>
import Popup from '@/components/Popup.vue'
// import Confirmation from '@/components/Confirmation.vue'
// import Timer from '@/components/Timer.vue'

export default {
  name: 'App',
  components: { Popup}
  // components: { Confirmation}
  // components: {Timer}
}
</script>

<style>
html {
  width: 400px;
  height: 300px;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
}

</style>
