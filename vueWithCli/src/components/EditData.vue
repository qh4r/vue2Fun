<template xmlns:v-model="http://www.w3.org/1999/xhtml">
  <div class="edit-data">
    Edit

    <form @submit.prevent="submitData">
    <div>
    <label for="name">Imie</label>
    <input id="name" type="text" v-model:value="localUser.name">
    </div>
    <div>
    <label for="surname">Nazwisko</label>
    <input id="surname" type="text" v-model:value="localUser.surname">
    </div>
    <div>
    <label for="age">Wiek</label>
    <input id="age" type="number" v-model:value="localUser.age">
    </div>
    <button type="submit">Zmień</button>
  </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        localUser: Object.assign({}, this.user)
      }
    },
    props: {
      user: {
        type: Object,
        default(){
          return {
            name: "",
            surname: "",
            age: 0
          }
        }
      }
    },
    methods: {
      submitData(){
        console.log("submit", this.localUser)
        this.$emit("data-update", this.localUser)
      }
    }
  }
</script>

<style lang="sass" type="text/sass" scoped>
  @mixin input-style()
    outline: none
    background-color: #ff232a
    color: white
    border: 2px solid #ff0317
    padding: 4px
    border-radius: 4px

  .edit-data
    margin: 10px
    background-color: #ffdd3c
    color: #4448ff
    form>div
      display: flex
      flex-wrap: nowrap
      flex-direction: row
      margin: 5px 10px
      text-align: left
      align-items: center
      label
        width: 80px
        margin-right: 10px
        &::after
          content: ': '

    input[type=text],[type=number]
      @include input-style()
      width: 100%
      &:focus
        background-color: lighten(#ff232a, 15%)
    button
      @include input-style()
      &:hover
        background-color: lighten(#ff232a, 15%)
</style>