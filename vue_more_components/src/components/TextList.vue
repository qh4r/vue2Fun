<template>
  <div>
    <text-display class="col-xs-5">
      <h2>Jakiś tam cytat</h2>
      <p slot="foot">przekazana stopka!</p>
    </text-display>
    <text-display class="col-xs-5">
      <!-- nazwa slota powoduje wyrenderowanie w slocie o takim imieniu,
        albo nie wyrenderowanie wcale jesli slot tak nazwany nie istnieje-->
      <h1 slot="title">Naglowek!</h1>
      <h4>Kolejny cytat</h4>
      <p>{{ example }}</p>
      <!--interpolacja odbywa sie przed przekazaniem nizej (a potem jest aktualizowana)-->
    </text-display>
  </div>
</template>

<script>
  import TextDisplay from "./TextDisplay.vue";

  export default {
    components: {
      "text-display": TextDisplay,
    },
    data () {
      setInterval(() => {
        this.counter++;
      }, 5000);
      return {
        counter: 0
      }
    },
    computed: {
      example(){
        return `ten tekst zostanie zinterpolowany w rodzicu a nie w dziecku ${this.counter}`
      }
    }
  }
</script>

<style scoped lang="scss">
  /*BEDZIE MIALO WPLYW NA TO CO PRZEKAZEMY DO SCOPE ALE MOZE ZOSTAC W SCOPE NADPISANE*/
  h4, h2 {
    color: red;
  }
</style>