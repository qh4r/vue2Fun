<template>
    <div>
        <div class="container">
            <form @submit.prevent="onSubmit">
                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <h1>Zarzalenie</h1>
                        <hr>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="text" v-model="user.email" class="form-control" id="email">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" v-model="user.password" class="form-control" id="password">
                        </div>
                        <div class="form-group">
                            <label for="age"></label>
                            <input type="number" v-model="user.age" class="form-control" id="age">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                        <label for="message">Wiadmość</label><br>
                        <textarea
                                id="message"
                                rows="5"
                                v-model="message"
                                class="form-control"></textarea>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <!--checkboxy mapuja sie w tablice! jesli jest > niz jeden pasujacy do 1 pola w modelu-->
                        <div class="form-group">
                            <label for="sendmail">
                                <input
                                        type="checkbox"
                                        id="sendmail"
                                        value="SendMail"
                                        v-model="sendMail"
                                > Wyślij mail</label>
                            <label for="sendInfomail">
                                <input
                                        type="checkbox"
                                        id="sendInfomail"
                                        value="SendInfo"
                                        v-model="sendMail"
                                > Wyślij informacje</label>
                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                        <!--radio matchuje po name-->
                        <label for="male">
                            <input
                                    type="radio"
                                    id="male"
                                    name="male"
                                    value="Male"
                                    v-model="gender"
                            > Mężczyzna </label>
                        <label for="female">
                            <input
                                    type="radio"
                                    id="female"
                                    name="male"
                                    value="Female"
                                    v-model="gender"
                            > Kobieta </label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                        <label for="priority">Priorytet</label>
                        <!--W PRZYPADKU SELECTA UStAWIAMY MODEL NA SELEKCIE WLSNIE-->
                        <select v-model="selectedPriority"
                                id="priority"
                                class="form-control">
                            <option v-for="priority in priorities"
                                    > {{priority}}</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <!--POJEDYNCZY CHECKBOX MATCHUJE SIE  NA TRUE /FALSE-->
                    <label for="newsletter"><input id="newsletter" v-model="newsletter" type="checkbox">
                        Zapisz do newslettera</label>
                </div>
                <hr>
                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <button
                                class="btn btn-primary">Wyślij!


                        </button>
                    </div>
                </div>
                <div class="row">
                    <label for="toggle"><toggle-switch id="toggle" v-model="aggressive"></toggle-switch> Jestem agresywny</label>
                </div>
            </form>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4>Twoje Dane</h4>
                        </div>
                        <div class="panel-body">
                            <p>Mail: {{user.email}}</p>
                            <p>Hasło: {{user.password}}</p>
                            <p>Wiek: {{user.age}}</p>
                            <p>Wiadomość: {{shortMessage}}</p>
                            <p><strong>Wysłać mail?</strong>
                            </p>
                            <ul>
                                <li v-for="item in sendMail">
                                    {{item}}
                                </li>
                            </ul>
                            <p>Subskrybjca: {{newsletter}}</p>
                            <p>Płeć: {{gender}}</p>
                            <p>Priorytet: {{selectedPriority}}</p>
                            <p>Agresja? {{aggressive}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Switch from "./Switch.vue"
    export default {
        components: {
            "toggle-switch": Switch
        },
        data () {
            return {
                user: {
                    email: "start@asd.pl",
                    password: "",
                    age: ""
                },
                message: "msg\n\n\thehe",
                sendMail: [],
                newsletter: false,
                gender: "",
                priorities: ["Wysoki", "średni", "Niski"],
                selectedPriority: "średni",
                aggressive: false
            }
        },
        computed: {
            shortMessage(){
                return this.message.length > 25 ? `${this.message.substring(0, 25).trim()}...` : this.message;
            }
        },
        methods: {
            onSubmit(data){
                // domyslnie data.target.elements to nie tablica (jak porperties w funkcji)
                console.log(Array.prototype.slice.call(data.target.elements).map(x => `${x.id} -> ${x.value}`))
            }
        }
    }
</script>

<style scoped lang="scss">
    textarea {
        resize: none;
    }
</style>
