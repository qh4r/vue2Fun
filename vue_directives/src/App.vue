<template>
  <div class="container">
    <!--delayed to modyfikator-->
    <p>Blok <span v-mark.animate.delayed="'#FFDC0C'">tesktu</span> tak dla <span v-bold v-mark="'#040528'"> demonstracji </span> dyrektyw</p>
    <h1 v-mark.delayed="'#ff0309'">Takze test</h1>
    <h1 v-bold.blink="{from: 100, to: 900}">i test animowany</h1>
    <h1 v-bold.blink>i test animowany default</h1>
  </div>
</template>

<script>
export default {
  // zamiast globalnie mozna deklarowac per komponent w taki sposob
  directives: {
    "bold": {
      bind(el, {value, modifiers}, vnode) {
        el.style.fontWeight = 700;
        if(modifiers["blink"]) {
          let {from = 300, to = 700} = value || {};
            setInterval(() => {
            el.style.fontWeight = el.style.fontWeight == to ? from : to;
          },1000)
        }
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">

</style>
