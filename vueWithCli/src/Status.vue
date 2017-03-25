<!--template musi miec 1 element w roocie (jak w reakcie)-->
<template>
  <div>
    <p>Status: {{statusText}}
      <button @click="changeStatus">Zmień</button>
    </p>
  </div>
</template>

<script>
  export default {
    name: "status-view",
    data () {
      return {
        status: false
      }
    },
    methods: {
      changeStatus(){
        this.status = !this.status;
      },
    },
    computed: {
      statusText(){
        return this.status ? "Działa" : "Nie działa"
      }
    }
  }
</script>

<style lang="sass">

</style>