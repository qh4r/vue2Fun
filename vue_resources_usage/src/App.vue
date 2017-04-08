<template>
    <div class="container">
        <div class="row">
            <h1>Formularz</h1>
            <div class="form-group">
                <label>User</label>
                <input type="text" v-model="username" class="form-control">
            </div>
            <div class="form-group">
                <label>Mail</label>
                <input type="text" v-model="email" class="form-control">
            </div>
        </div>
        <button @click="submit" class="btn btn-info ">Wyslij</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                username: '',
                email: ''
            }
        },
        methods: {
            submit(){
                // dostepne dzieki vue resource
                this.$http.post('https://vue-fun.firebaseio.com/data.json', {
                    username: this.username,
                    email: this.email
                }).then((response) => {
                    console.log(response)
                }).catch((err) => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style lang="scss">

</style>
