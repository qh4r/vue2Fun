<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        works


      </div>
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
  </div>
</template>

<script>
  import TextDisplay from './components/TextDisplay.vue'
  export default {
    components: {
      TextDisplay, "text-display": TextDisplay
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
  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  /*BEDZIE MIALO WPLYW NA TO CO PRZEKAZEMY DO SCOPE ALE MOZE ZOSTAC W SCOPE NADPISANE*/
  h4, h2 {
    color: red;
  }
</style>
