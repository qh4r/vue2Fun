(function () {
    var id = 0;

    Vue.component("test", {
        // zamiast template mozna uzyc el i odnosnika
        template: "<p>testowy komponent</p>"
    });

    var instance =new Vue({
        // el: "#app",
        data: {
            playerHp: 100,
            enemyHp: 100,
            isRunning: false,
            log: []
        },
        methods: {
            startGame: function () {
                this.playerHp = 100;
                this.enemyHp = 100;
                this.log = [];
                this.isRunning = true;
                // Maly showcase sekcji
                // jesli sekcja nie jest w danym momencie wyrenderowana to jej wartosc klucza na refs to UNDEFINED!
                console.log(this.$refs, this.$refs.controlsSection);
            },
            surrender: function () {
                this.isRunning = false;
                console.log(this.$refs, this.$refs.controlsSection);
            },
            attack: function () {
                this.enemyHp = dealDmg(9, 18, this.enemyHp)
                this.enemyAct();
            },
            specialAttack: function () {
                this.enemyHp = dealDmg(18, 36, this.enemyHp);
                this.playerHp = dealDmg(9, 18, this.playerHp);
                this.enemyAct();
            },
            heal: function () {
                this.playerHp = healDmg(9, 18, this.playerHp);
                this.enemyAct();
            },
            enemyAct: function () {
                Math.random() > 0.4
                    ? this.playerHp = dealDmg(5, 15, this.playerHp)
                    : this.enemyHp = healDmg(5, 15, this.enemyHp);
            },
            addLogMsg: function (person, diff) {
                console.log(diff);
                if (this.isRunning) {
                    var action = diff < 0;
                    this.log = this.log.concat({
                        key: ++id,
                        person: person,
                        actionColor: action ? 'red' : 'green',
                        action: action ? "stracił" : "odzyskał",
                        value: Math.abs(diff)
                    })
                }
            }
        },
        watch: {
            playerHp: function (newHp, oldHp) {
                this.addLogMsg("Gracz", newHp - oldHp);
                checkResult.call(this, newHp, "Przegrałeś");
            },
            enemyHp: function (newHp, oldHp) {
                this.addLogMsg("Przeciwniik", newHp - oldHp);
                checkResult.call(this, newHp, "Wygrałeś");
            },
            isRunning: function(){
                if(this.isRunning){
                    this.log = [];
                }
            }
        }
    });

    // alternatywa dla el!
    setTimeout(function(){
        instance.$mount(document.querySelector('#app'));
    },1000);

    function checkResult(hp, msg) {
        if (hp == 0 && this.isRunning) {
            this.isRunning = false;
            alert(msg);
        }
    }

    function dealDmg(min, max, current) {
        return Math.min(Math.max(current - getRandom(min, max), 0), 100);
    }

    function healDmg(min, max, current) {
        return Math.min(Math.max(current + getRandom(min, max), 0), 100);
    }

    function getRandom(min, max) {
        return Math.round(((Math.random() * (max - min)) + min));
    }
})();
