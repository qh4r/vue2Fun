<template>
  <div class="show-data">
    Show
    <h4>{{user.name}}</h4>
    <h4>{{user.surname}}</h4>
    <h4>{{user.age}}</h4>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: {
      user: Object
    }
  }
</script>

<style lang="sass" type="text/sass" scoped>
  .show-data
    padding: 10px
    margin: 10px
    background-color: #4879ff
    color: #fff38e
    h4
      text-align: left
</style>