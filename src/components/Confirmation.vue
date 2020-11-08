<template>
  <div id="big">
    <div id='header'>
      <br>
      {{ title }}
    </div>
    <div id = "project">
      <br>
      <p> {{ description }} </p>
      <input @click="relevant = true" type="submit" value="Yes" class="btn">
      <input @click="relevant = false" type="submit" value="No" class="btn">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  data() {
    return {
      title: 'Focus-me',
      description: 'Are you sure this website is relevant for your project?',
      relevant: false
    }
  },
  methods: {
    submit() {

    }
  },
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
  background-image: url('~@/assets/confirmation.jpg');
  text-align: center;
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
    font-size: 18px; 
}

input[type=submit]:hover {
  font-weight: bold;
}

p {
  font-size: 18px;
  font-weight: bold;
}

#header {
  font-size: 27px;
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

</style>
