<template>
  <div class="container">
    <div class="row">
      <button class="btn bt-lg col-xs-4 btn-info" @click="selectComponent('creator-view')">Autor</button>
      <button class="btn bt-lg col-xs-4 btn-info" @click="selectComponent('new-text')">Nowy</button>
      <button class="btn bt-lg col-xs-4 btn-info" @click="selectComponent('text-list')">Lista</button>
      <!--IS OKRESLA WSKAZYWANY KOMPONENT-->
      <!--selected component pozwala dynamicznie zmieniac komponenty-->
        <component :is="selectedComponent" name="recycled">
          <p>ten tekst pojawi sie w slocie jesli taki bedzie instnial!</p>
        </component>
        <!--Waznym elementem jest to że zmiana komponentu powoduje jego ponowne utworzenie i mount-->

      <!-- keep alive sprawia ze komponenty nie sa usuwane przy przelaczaniu na inny -->
      <keep-alive>
        <component :is="selectedComponent" name="kept-alive">
          <p>ten tekst pojawi sie w slocie jesli taki bedzie instnial!</p>
        </component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import TextList from './components/TextList.vue'
  import Creator from './components/Createor.vue'
  import NewText from './components/NewText.vue'

  export default {
    components: {
      "text-list": TextList,
      "creator-view": Creator,
      "new-text": NewText,
    },
    data () {
      return {
        selectedComponent: "text-list"
      }
    },
    methods: {
      selectComponent(component){
        this.selectedComponent = component
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
</style>
