<template>
  <div id="test">
    <p>{{ defaultText }}</p>
    <p> Focus me app </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted () {
    browser.runtime.sendMessage({})
  },
  computed: {
    defaultText () {
      return browser.i18n.getMessage('extName')
    }
  }
}
</script>

<style scoped>
p {
  font-size: 20px;
}

#test {
  background-color: aquamarine;
}
</style>
