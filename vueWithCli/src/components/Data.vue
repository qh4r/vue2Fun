<template>
  <div class="flex-display">
    <show-data :user="user"></show-data>
    <edit-data @data-update="updateUser" :user="user"></edit-data>
  </div>
</template>

<script>
  import EditData from './EditData.vue';
  import ShowData from './ShowData.vue';

  export default {
    data() {
      return {
        user: {
          name: "Fafał",
          surname: "Kuchar",
          age: 12
        }
      }
    },
    components: {
      "edit-data": EditData,
      "show-data": ShowData
    },
    methods: {
      updateUser(user){
        this.user = Object.assign({}, user);
      }
    }

  }
</script>

<style lang="sass" type="text/sass" scoped>
  .flex-display
    display: flex
    flex-direction: row
    flex-wrap: wrap
    > *
      width: 45%
      flex-grow: 1
      @media (max-width: 744px)
        width: 90%

</style>