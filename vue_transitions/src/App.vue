<template>
  <div class="container">
    <div class="row">
      <button @click="toggle" class="btn btn-primary">Pokaż ukryte</button>
      <br/>
      <br/>
      <!--w transition mozna miec tylko 1 element root!-->
      <transition name="fade">
        <div v-if="secretVisible" class="alert alert-info">
          To tajemnica
        </div>
      </transition>

    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        secretVisible: false
      }
    },
    methods: {
      toggle(){
        this.secretVisible = !this.secretVisible;
      }
    }
  }
</script>

<style lang="scss">
  /* nienazwane animacje dzialaja na v-enter i v-leave*/
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
    opacyity: 1;
  }

  .fade-leave {
    opacyity: 1;
  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }
</style>
