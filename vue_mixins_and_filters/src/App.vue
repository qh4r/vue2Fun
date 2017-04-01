<template>
  <div class="container">
    <h1>mixiny itd:</h1>
    <!--filtry mozna laczyc w kolejki-->
    <p> {{example | toUpper | reverse}}</p>
    <list-view></list-view>
  </div>
</template>

<script>
  import List from "./List.vue"
  export default {
    components: {
      "list-view": List
    },
    data () {
      return {
        example: "example text",
      }
    },
    //mozna tez rejestrowac globalnie tak jak komponenty Vue.filter("asd", fun())
    filters: {
      toUpper(x) {
        return x.toUpperCase();
      },
      reverse(x) {
        return x.split('').reverse().join('')
      }
    }
  }
</script>

<style lang="scss">
  input.search {
    display: block;
  }
</style>
