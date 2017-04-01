<template>
  <ul>
    <!--w vue 2 nie mozna przekazywac parametrow z zewnatrz do filtrow-->
    <input class="search" placeholder=Filtruj  type="text" v-model="filterQuote">
    <li v-for="name in matchingNames">{{name}}</li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        filterQuote: "",
        names: ["Rafał", "Arek", "Grzegorz", "Asia", "Marek", "Darek", "Ola", "Romek"]
      }
    },
    computed: {
      matchingNames: function () {
        return this.names.filter(x => x.toLowerCase().indexOf(this.filterQuote) > -1)
      }
    }
  }
</script>

<style lang="scss">
</style>