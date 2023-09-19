class Urlap {
    #adat = {};
    constructor(adat, szuloElem){
        this.#adat = adat;
        this.szuloElem = szuloElem;
        this.szuloElem.html("<form>");
        this.formElem = this.szuloElem.children("form");
        console.log(this.formElem);
        this.#urlapletrehozasa();
        this.submitGomb.on("click", (event) => {
            event.preventDefault();
            this.#adatGyujt();
            this.#kattintasTrigger("ujAdatHozzaAdas");
        });

    }

    #adatGyujt(){

    }

    #urlapletrehozasa(){

    }

    #kattintasTrigger(esemenynev){
        const esemeny = new CustomEvent(esemenynev, { detail: this.#adat });
        window.dispatchEvent(esemeny);
    }

}

export default Urlap;