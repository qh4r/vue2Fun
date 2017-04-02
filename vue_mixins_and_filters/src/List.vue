<template>
  <ul>
    <!--w vue 2 nie mozna przekazywac parametrow z zewnatrz do filtrow-->
    <input class="search" placeholder=Filtruj  type="text" v-model="filterQuote">
    <li v-for="name in matchingNames">{{name}}</li>
  </ul>
</template>

<script>
  import { listMixin } from "./listMixin";
  export default {
    mixins: [listMixin],
    beforeMount() {
      // tyczy sie to wszystkich hookow - mixin ich nie nadipisuje, odpala sie wszystkie, a w komponencie odpala sie ostatnie.
      console.log("Before mount komponentu odpala sie PO mixinie \n computed:", this.compute() )
      this.print();
    }
  }
</script>

<style lang="scss">
</style>