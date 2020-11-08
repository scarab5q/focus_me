<template>
  <div id="big">
    <div id='header'>
      {{ title }}
    </div>

    <div id="app">
      <!-- <button @click="start">Start</button>
      <button @click="stop">Stop</button>
      <button @click="reset">Reset</button> -->
      <br><br>
      <p>{{formattedElapsedTime}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timer',
  data() {
    return {
      title: 'Procrastination time',
      elapsedTime: 0,
      timer: setInterval(() => { 
        this.elapsedTime += 1000;
        }, 1000)
    }
  },
  mounted () {
    browser.runtime.sendMessage({})
  },
  computed: {
    defaultText () {
      return browser.i18n.getMessage('extName')
    },
    formattedElapsedTime() {
      const date = new Date(null);
      date.setSeconds(this.elapsedTime / 1000);
      const utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    }
  },
  methods: {
    start() {
      this.timer = setInterval(() => {
        this.elapsedTime += 1000;
      }, 1000);
    },
    stop() {
      clearInterval(this.timer);
    },
    reset() {
      this.elapsedTime = 0;
    }
  }
}
</script>

<style scoped>

#big {
  height: 300px;
  width: 400px;
  margin: 0;
  padding: 0;
  background-color: #292829;
  color: #fff5d9;
  background-image: url('~@/assets/confirmation.jpg');
  background-size:     cover;       
  background-repeat:   no-repeat;
  background-position: center center;
  text-align: center;
}

p {
  font-size: 18px;
}

#header {
  font-size: 25px;
}

/* button {
    background-color: rgba(0, 0, 0, 0.5);
    border: 2px solid  #fff5d9;
    border-radius: 6px;
    color:  #fff5d9;
    margin-right: 10px;  
}

button:hover {
  font-weight: bold;
} */

</style>
