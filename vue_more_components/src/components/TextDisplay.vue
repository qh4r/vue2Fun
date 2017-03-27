<template>
    <div class="flex">
        <!-- tu renderwowane bedzie TYLKO to co ma slot podane jako title w argumencie-->
        <slot name="title"></slot>
        <hr>
        <p>
            <!--domyslny slot jesli nie nazwany - dostanie to co zostalo przekazane-->
            <slot></slot>
        </p>
        <slot name="foot"></slot>
        <hr>
        <!--<slot name="foot"> brak stopki </slot>-->
        <!--zawartosc slota to dommyslna warosc ktora bedzie wyswietlana jesli nic nie przekazano do slotu-->
    </div>
</template>

<script>
    export default {
        name: "text-display",
        data(){
            return {}
        }
    }
</script>

<style scoped lang="scss">
    div {
        box-sizing: border-box;
        border: 1px solid #ffdd3c;
        padding: 25px;
        margin: 10px;
        -webkit-box-shadow: 1px 1px 2px #ffdd3c;
        -moz-box-shadow: 1px 1px 2px #ffdd3c;
        box-shadow: 1px 1px 2px #ffdd3c;
    }

    /*MOZNA SYLOWAC ELEMENTY PRZEKAZANE DO SCOPE*/
    h2 {
        color: #55e21f
    }

    /*sprawia ze hr wyswietlane bedzie tylko gdy title jest obaecny*/
    hr {
        display: none;
        /*MARGINS SET AS A HACK*/
        /* sprawia ze hr jest widoczny we flex boxie - inaczej znika :(*/
        margin-left: 0;
        margin-right: 0;
    }

    .hr-after + hr {
        display: block
    }

    .footer {
        color: #777878;
    }

    .flex {
        display: flex;
        flex-direction: column;
    }
</style>