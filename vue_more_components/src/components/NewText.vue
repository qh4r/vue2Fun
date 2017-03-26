<template>
  <div>
    <h2>nowy: </h2>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "new-text",
    props: ['name'],
    data(){
      return {

      }
    },

//    standardowe eventy leca tylko gdy nie ma keep alive
    created(){
      console.log("created", this.name);
    },
    mounted(){
      console.log("mounted", this.name);
    },
    destroyed(){
      console.log("destroyed", this.name);
    },
//    poniezsze eventy leca tylko jesli jest keep alive - zastepuja create mounted i destroyed jesli nie recyclujemy
    activated(){
      console.log("activated", this.name);
    },
    deactivated(){
      console.log("deactivated", this.name);
    }
  }
</script>

<style scoped lang="scss">
</style>