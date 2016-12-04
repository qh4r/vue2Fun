<template>
    <main-layout>
        <p>About</p>
    </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  export default {
    components: {
      MainLayout
    },
    beforeMount: () =>  console.log('rendered about'),
    beforeDestroy: () => {
      console.log('about destroyed');
    }
  }



</script>
