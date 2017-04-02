export const listMixin = {
  data () {
    return {
      filterQuote: "",
      names: ["Rafał", "Arek", "Grzegorz", "Asia", "Marek", "Darek", "Ola", "Romek"]
    }
  },
  computed: {
    matchingNames: function () {
      return this.names.filter(x => x.toLowerCase().indexOf(this.filterQuote.toLowerCase()) > -1)
    }
  },
  // dane moga zostac nadpisane w komponentach!
  methods: {
    print(){
      console.log(`wynik to: ${this.compute()}`);
    },
    compute(){
      return 44;
    }
  },
  // hooki normalnie dzialaja
  beforeMount(){
    console.log("mixin before mount")
  }
}