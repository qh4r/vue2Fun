<template>
  <div class="container">
    <h1>mixiny itd:</h1>
    <!--filtry mozna laczyc w kolejki-->
    <p> {{example | toUpper | reverse}}</p>
    <div class="vertical">
      <ul>
        <!--w vue 2 nie mozna przekazywac parametrow z zewnatrz do filtrow-->
        <input class="search" placeholder=Filtruj   type="text" v-model="filterQuote">
        <li v-for="name in matchingNames">{{name}}</li>
      </ul>

      <list-view></list-view>
    </div>
  </div>
</template>

<script>
  import List from "./List.vue"
  import { listMixin } from "./listMixin";
  export default {
    // mixiny nie nadpisuja danych, tylko staraja sie rozszerzyc dane (a takze metody itd) o zawartosc mixina
    mixins: [listMixin],
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
      },
      filterOut(input, args) {
        console.log(data)
        return input
      }
    },
    methods: {
      compute() {
        return 100;
      }
    },
    // COMPUTED NADPISUJE TAKA SAMA FUNKCJE Z MIXINU
    // DODATKOWO PRINT Z MIXINU UZYWA FUNKCJI Z THIS WIEC WLASNIE COMPUTED KOMPONENTU
    beforeMount() {
      console.log("Aplikacja computed:", this.compute() )
      this.print();
    }
  }
</script>

<style lang="scss">
  input.search {
    display: block;
  }

  .vertical {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    &>*{
      width: 100%;
      flex-grow: 1;
    }
  }


</style>
