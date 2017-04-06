<template xmlns:v-model="http://www.w3.org/1999/xhtml">
    <div class="container">
        <div class="row">
            <button @click="toggle" class="btn btn-primary">Pokaż ukryte</button>
            <br/>
            <br/>
            <!--w transition mozna miec tylko 1 element root!-->
            <transition name="fade">
                <!--Name moze byc ustawiany dynamicznie!!-->
                <div v-if="secretVisible" class="alert alert-info">
                    To tajemnica







                </div>
            </transition>
            <!-- animacja dziala tak samo z v-show-->
            <transition name="slide">
                <div v-show="secretVisible" class="alert alert-info">
                    To też







                </div>
            </transition>
            <!--
              moze byc jeszcze type transition - type pomaga zdecydowac vue ktora dlugosc animacji przyjac
              jako roboczy czas trwania animacji (sluzy do eventow itd) - to co podamy w type bedzie czasem animacji jesli uzywamy
              i animacji i transition tak jak w typie mix
            -->
            <transition name="mix" type="animation" appear>
                <!--
                  appear sprawia ze animacja bedzie odgrywana podczas poczatkowego zaladowania!
                  zeby zadzialala podczas zaladowania element musi byc ustawiony jako widoczny - (stad odwrocony warunek)
                -->
                <div v-if="!secretVisible" class="alert alert-info">
                    No i to jeszcze







                </div>
            </transition>

            <!--MOZNA NADPISAC DOMYSLNE UZYWANE KLASY (enter, enter-active itd), sa jeszcze:-->
            <!--leave-class=""-->
            <!--enter-class=""-->
            <transition
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake"
            >
                <div v-show="secretVisible" class="alert alert-info">
                    no i z super animacja







                </div>
            </transition>

            <!--!! TRANSITION MODE !!-->
            <!--MODE OUT IN SPRAWIA ZE ELEMENTY NIE POKAUZJA SIE POD SOBA TYLKO WYMIENIAJA
            (ANIMACJA 2 ZACZYNA SIE GDY KONCZY SIE ANIMACJA 1)
            * mode in-out - sprawia ze wyjscie zaczyna sie dopiero gdy skonczy sie animacja wejscia
            * domyslnie obie animacje startuja rownoczesnie-->

            <!--jesli 2 elementy byly by widoczne naraz w transition to vue wyswietli tylko pierwszy-->
            <transition name="fade" mode="out-in">
                <!--jesli elementy sa tego samego typu to potrzebuja key! -->
                <div key="1" v-if="secretVisible" class="alert alert-warning">TOGGLE 1/2</div>
                <div key="2" v-else="secretVisible" class="alert alert-success">TOGGLE 2/2</div>
            </transition>
            <!--mozna togglowac kilka elementow ale tylko jesli 1 naraz jest widoczny-->
            <hr>
            <button class="btn btn-success" @click="cssVisible = !cssVisible">Toggle css animation</button>
            <transition
                    @before-enter="cssBeforeEnter"
                    @enter="cssEnter"
                    @after-enter="cssAfterEnter"
                    @before-leave="cssBeforeLeave"
                    @leave="cssLeave"
                    @after-leave="cssAfterLeave"
                    @leave-cancelled="cssLeaveCanceled"
                    @enter-cancelled="cssEnterCanceled"
                    name="mix">
                <div v-if="cssVisible" class="alert alert-danger">
                    Eventy eventy eventy





                </div>
            </transition>
            <hr>
            <button class="btn btn-warning" @click="jsVisible = !jsVisible">Toggle js animation</button>
            <transition
                    @before-enter="jsBeforeEnter"
                    @enter="jsEnter"
                    @after-enter="jsAfterEnter"
                    @before-leave="jsBeforeLeave"
                    @leave="jsLeave"
                    @after-leave="jsAfterLeave"
                    @leave-cancelled="jsLeaveCanceled"
                    @enter-cancelled="jsEnterCanceled"
                    :css="false">
                <!--css false sprawia ze nie beda wykonywane animacje klas cssowych (o odpowiednich nazwach) w ogole-->
                <div :style="{backgroundColor: 'red', width: '100px', height: '100px'}" v-if="jsVisible"
                     class="alert alert-danger">

                </div>
            </transition>

            <hr>
            <select class="form-control" v-model:value="componentSelection" name="testSelection">
                <option value="test-1">Test 1</option>
                <option value="test-2">Test 2</option>
                <option value="test-3">Test 3</option>
            </select>
            <transition appear name="fade" mode="out-in">
                <component :is="componentSelection">

                </component>
            </transition>
            <hr>
            <button class="btn info" @click="addNext">Dodaj numer</button>
            <!--dodatkowo jest dostepne {NAZWA}-move-->
            <ul class="list-group" :style="{position: 'relative'}" > <!-- taki styl ogranicza szerokosc dzieci absolute 0 0 do kontenera ;3 -->
                <transition-group name="mix">
                <li :key="number" @click="removeNumber(index)" v-for="(number, index) in numbers" class="list-group-item">
                    {{number}}
                </li>
                </transition-group>
            </ul>
        </div>
    </div>
</template>

<script>
    import Test1 from './components/test1.vue';
    import Test2 from './components/test2.vue';
    import Test3 from './components/test3.vue';
    export default {
        components: {
            'test-1': Test1,
            'test-2': Test2,
            'test-3': Test3,
        },
        data () {
            return {
                secretVisible: false,
                cssVisible: false,
                jsVisible: false,
                boxWidth: 100,
                enterLoop: null,
                leaveLoop: null,
                componentSelection: 'test-3',
                numbers: [1,2,3,4,5,6]
            }
        },
        methods: {
            addNext(){
              var last = this.numbers.length ? Math.max.apply(null, this.numbers) : 0;
              this.numbers.push(last + 1);
            },
            removeNumber(index){
              this.numbers.splice(index , 1);
            },
            toggle(){
                this.secretVisible = !this.secretVisible;
            },
            cssBeforeEnter(elem) {
                console.log('before enter !', elem);
            },
//            enter(elem, done){
            cssEnter(elem){
                console.log('enter !', elem);
                // done mozna uzywac jesli animujemy jsem a nie cssem

                // done();
                // JESLI PODAMY DONE W ARGUMENTACH TO MUSIMY JE WYWOLAC BO afterEnter NIGDY NIE NASTAPI
                // JESLI POMINIEMY DONE W ARGUMENTACH METODY TO AFTER ENTER NASTAPI PO ZAKONCZENIU ANIMACJI
            },
            cssAfterEnter(elem) {
                console.log('after enter !', elem);
            },
            cssBeforeLeave(elem) {
                console.log('before leave !', elem);
            },
            cssLeave(elem) { // jak enter, tez przyjmuje done
                console.log('leave!', elem);
            },
            cssAfterLeave(elem) {
                console.log('after leave !', elem);
            },
            // metody wywolywane jesli enter albo leave zostanie przerwany
            cssEnterCanceled(elem) {
                console.log('canceled enter !', elem);
            },
            cssLeaveCanceled(elem) {
                console.log('canceled leave !', elem);
            },


            jsBeforeEnter(elem) {
                console.log('before enter !', elem);
            },
            jsEnter(elem, done){
                this.enterLoop = setInterval(() => {
                    elem.style.width = ++this.boxWidth + 'px';
                    if (this.boxWidth > 999) {
                        clearInterval(this.enterLoop);
                        done();
                    }
                }, 1);
                console.log('enter !', elem);
            },
            jsAfterEnter(elem) {
                console.log('after enter !', elem);
            },
            jsBeforeLeave(elem) {
                console.log('before leave !', elem);
            },
            jsLeave(elem, done) {
                this.leaveLoop = setInterval(() => {
                    elem.style.width = --this.boxWidth + 'px';
                    if (this.boxWidth < 101) {
                        clearInterval(this.leaveLoop);
                        done();
                    }
                }, 1)
                console.log('leave!', elem);
            },
            jsAfterLeave(elem) {
                console.log('after leave !', elem);
            },
            jsEnterCanceled(elem) {
                if (this.enterLoop) {
                    clearInterval(this.enterLoop)
                }
                console.log('canceled enter !', elem), this.enterLoop;
            },
            jsLeaveCanceled(elem) {
                if (this.leaveLoop) {
                    clearInterval(this.leaveLoop)
                }
                console.log('canceled leave !', elem);
            }
        }
    }
</script>

<style lang="scss">
    /* nienazwane animacje dzialaja na v-enter i v-leave*/
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s;
        opacyity: 1;
    }

    .fade-leave {
        opacyity: 1;
    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(20px);
        }
    }

    .slide-enter {

    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
    }

    .slide-leave {

    }

    .slide-move {
        transition: transform 1s;
    }

    /*forwards sprawia ze animacja zostaje po zakonczeniu i nie wraca ani nie loopuje*/
    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
    }

    .mix-enter {
        @extend .fade-enter;
    }

    .mix-enter-active {
        @extend .slide-enter-active, .fade-enter-active
    }

    .mix-leave {
        @extend .fade-leave
    }

    .mix-leave-active {
        @extend .slide-leave-active, .fade-leave-active;
        position: absolute;
        left: 0;
        right: 0;
        /*sprawia ze elementy moga na niego nachodzic gdy jest animowany*/;
    }

    /*TO SPRAWIA ZE PRZESUWANIE SIE ITEMOW (SPOWODOWANE ZNIKNIECIEM SASIADA JEST ANIMOWANE*/
    .mix-move {
        transition: transform 1s;
    }
</style>
