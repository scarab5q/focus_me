<template>
  <div id="big" 
  :class="highMode ? 'high' : 'normal'">
    <div id='header'>
      {{ title }}
    </div>
    <div id = "project">
      <p> {{ description }} </p>
      <form>
        <br><br><br>
        <input v-model="message">
        <br><br>
        <input @click="submit($event)" type="submit" value="Start" class="btn">
        <input @click="submit2($event)" type="submit" value="Finish" class="btn">
      </form>
    </div>

    <footer >
      <br><br><br>
      <button @click="highMode = !highMode">{{ btnText }}</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  data() {
    return {
      title: 'Focus-me',
      description: 'What project are you working on now?',
      message: '',
      highMode: false
    }
  },
  methods: {
    submit(e) {
      e.preventDefault();
      chrome.storage.sync.set({'message': this.message}, function() {
        console.log('Settings saved');
      });
     
    },
    submit2(e) {
      e.preventDefault();
      chrome.storage.sync.get("message", function (obj) {
        console.log(obj);
      });
      }
  },
  mounted () {
    browser.runtime.sendMessage({})
  },
  computed: {
    defaultText () {
      return browser.i18n.getMessage('extName')
    },
    btnText () {
      if (this.highMode){
        return "Normal Mode";
      }
      else {
        return "V A P O R W A V E";
      }
    },
    url_link () {
      if (this.highMode){
        return '~@/assets/header3.gif';
      }
      else {
        return '~@/assets/header3.gif';
      }      
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
  background-size:     cover;       
  background-repeat:   no-repeat;
  background-position: center center;
  text-align: center;
}

.high {
  background-image: url('~@/assets/header3.gif');
}

.normal {
  background-image: url('~@/assets/header.jpg');
}

input
{
    background-color: rgba(0, 0, 0, 0.5);
    border: 2px solid  #fff5d9;
    color:  #fff5d9;
    margin-right: 10px;
}

input[type=submit] {
    background-color: rgba(0, 0, 0, 0.5);
    border: 2px solid  #fff5d9;
    border-radius: 6px;
    color:  #fff5d9;
    margin-right: 10px;   
}

input[type=submit]:hover {
  font-weight: bold;
}

p {
  font-size: 18px;
}

#header {
  font-size: 25px;
}

button {
    background-color: rgba(0, 0, 0, 0.5);
    border: 2px solid  #fff5d9;
    border-radius: 6px;
    color:  #fff5d9;
    margin-right: 10px;  
}

button:hover {
  font-weight: bold;
}

footer {}
</style>
