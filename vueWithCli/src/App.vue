<template>
  <div id="app">
    <h2>App app ap</h2>
    <p>{{msg}}</p>
    <status-view></status-view>
  </div>
</template>

<script>
  import Status from "./Status.vue";
  export default {
//  name: 'app', // opcjonalne
    data (data) {
      return {msg: "Welcome!"}
    },
    components:{
      "status-view": Status
    },
    // to zadzialalo by tylko jesli nie bylo by templatu dodanego!
//    render: h => h(Start)
  }
</script>

<style lang="sass">
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    margin-top: 60px
    h2
      color: blue

  h1, h2
    font-weight: normal

  ul
    list-style-type: none
    padding: 0

  li
    display: inline-block
    margin: 0 10px

  a
    color: #42b983

</style>
