<!--template musi miec 1 element w roocie (jak w reakcie)-->
<template>
  <div>
    <p :class="{warning: !status}">Status: {{statusText}}
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

<style scoped lang="sass">
  p
    color: #55e21f
    button
      color: black
    &.warning
      color: #ff232a

</style>