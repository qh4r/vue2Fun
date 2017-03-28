<template>
    <div class="progress-bar-container" :class="{'turn-red': isMax}">
        <div class="progress-bar" :style="{width: `${progress}%`}"></div>
        <div class="state">{{current}} / {{max}}</div>
    </div>
</template>

<script>
    export default {
        props: {
            current: {
                type: Number,
                default() {
                    return 0;
                }
            },
            max: {
                type: Number,
                required: true
            }
        },
        data () {
            return {}
        },
        computed: {
            step(){
                return 100 / this.max;
            },
            progress(){
                return this.step * this.current;
            },
            isMax() {
                return this.current == this.max;
            }
        }
    }
</script>

<style scoped lang="scss">
    .progress-bar-container {
        width: 100%;
        min-height: 30px;
        margin: 5px 10px;
        border: 1px solid black;
        border-radius: 8px;
        overflow: hidden;
        position: relative;
        color: black;
        &.turn-red {
            color: #c02a26;
            border-color: #c02a26;
        }

        .progress-bar {
            min-height: 32px;
            background-color: #66a6cc;
            transition: width 0.5s;
        }

        .state {
            min-height: 32px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            width: 100%;
        }
    }
</style>
