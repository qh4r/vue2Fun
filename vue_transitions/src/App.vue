<template>
  <div class="container">
    <div class="row">
      <button @click="toggle" class="btn btn-primary">Pokaż ukryte</button>
      <br/>
      <br/>
      <!--w transition mozna miec tylko 1 element root!-->
      <transition name="fade">
        <!--Name moze byc ustawiany dynamicznie!!-->
        <div v-if="secretVisible" class="alert alert-info">
          To tajemnica
        </div>
      </transition>
      <!-- animacja dziala tak samo z v-show-->
      <transition name="slide">
        <div v-show="secretVisible" class="alert alert-info">
          To też
        </div>
      </transition>
      <!--
        moze byc jeszcze type transition - type pomaga zdecydowac vue ktora dlugosc animacji przyjac
        jako roboczy czas trwania animacji (sluzy do eventow itd) - to co podamy w type bedzie czasem animacji jesli uzywamy
        i animacji i transition tak jak w typie mix
      -->
      <transition name="mix" type="animation" appear>
        <!--
          appear sprawia ze animacja bedzie odgrywana podczas poczatkowego zaladowania!
          zeby zadzialala podczas zaladowania element musi byc ustawiony jako widoczny - (stad odwrocony warunek)
        -->
        <div v-if="!secretVisible" class="alert alert-info">
          No i to jeszcze
        </div>
      </transition>

      <!--MOZNA NADPISAC DOMYSLNE UZYWANE KLASY (enter, enter-active itd), sa jeszcze:-->
      <!--leave-class=""-->
      <!--enter-class=""-->
      <transition
              enter-active-class="animated bounce"
              leave-active-class="animated shake"
      >
        <div v-show="secretVisible" class="alert alert-info">
          no i z super animacja
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

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }

  .slide-enter {

  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
  }

  .slide-leave {

  }

  /*forwards sprawia ze animacja zostaje po zakonczeniu i nie wraca ani nie loopuje*/
  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
  }

  .mix-enter {
    @extend .fade-enter;
  }

  .mix-enter-active {
    @extend .slide-enter-active, .fade-enter-active
  }

  .mix-leave {
    @extend .fade-leave
  }

  .mix-leave-active {
    @extend .slide-leave-active, .fade-leave-active
  }

</style>
