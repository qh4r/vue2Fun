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
        <hr>
        <ul v-if="usersList.length" class="list-group">
            <li class="list-group-item" v-for="user in usersList">
                {{user.id}} - {{user.username}} {{user.email}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                username: '',
                email: '',
                usersList: []
            }
        },
        beforeMount(){
            this.$http.get()
                .then((data) => {
                console.log('asd', data.json());
                    return data.json();
                })
                .then((body) => {
                    console.log(body);
                    this.usersList = Object.keys(body).map(key => {
                        return Object.assign({}, body[key], {id: key});
                    });
                }).catch(err => console.log(err))
        },
        methods: {
            submit(){
                // dostepne dzieki vue resource
                this.$http.post(null, {
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
