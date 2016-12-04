<template>
    <main-layout>
        <p>Home</p>
    </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  console.log('rendered home');
  export default {
    components: {
      MainLayout
    },
    beforeDestroy: () => {
      console.log('home destroy')
    },
    beforeMount: () => {
      console.log('rendered home');
    }

  }


</script>
