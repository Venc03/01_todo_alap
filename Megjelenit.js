import MegjelenitSor from "./MegjelenitSor.js";

class Megjelenit{
    #list = {};
    constructor(list, TAROLO){
            this.#list = list;
            TAROLO.append('<table class="table table-bordered">');
            this.tablaElem = TAROLO.children("table");
            this.tablaIr();
    }

    tablaIr(){
        this.#list.forEach((elem) => {
            new MegjelenitSor(elem, this.tablaElem); 
        });
    }
}

export default Megjelenit;