<!--Dzieki dodaniu emitu na input, i propsa value komponent wspolgra z v-bind-->

<template>
    <div class="switch-container">
        <div id="is_on"
             @click="toggle(true)"
             :class="{active: isOn}"
        >
            On
        </div>
        <div id="is_off"
             @click="toggle(false)"
             :class="{active: !isOn}"
        >
            Off
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: Boolean,
                default(){
                    return false;
                }
            }
        },
        data () {
            return {
                isOn: false
            }
        },
        methods: {
            toggle(value){
                this.isOn = value
            }
        },
        watch: {
            isOn(newValue){
                this.$emit("input", newValue)
            }
        }
    }
</script>

<style scoped lang="scss">
    @mixin switch(){
        width: 40px;
        height: 20px;
        display: inline-block;
        margin: -2px;
        background-color: lightgray;
        box-sizing: content-box;
        cursor: pointer;
        text-align: center;
    }

    #is_on{
        @include switch();
        &:hover, &.active {
            background-color: lightgreen;
        }
    }

    #is_off{
        @include switch();
        &:hover, &.active {
            background-color: lightcoral;
        }
    }

    .switch-container {
        display: inline-block;
        margin: 10px 0;
        border-radius: 4px;
        overflow: hidden;
    }

</style>
