class MegjelenitSor{
    #obj = {};
    constructor(obj, TAROLO){
            this.#obj = obj;
            this.TAROLO = TAROLO;
            this.#sor();
            this.TAROLO("tr:last-child")
            this.keszElem = this.sorElem.child("td").children(".kesz")
            this.keszElem.on("click", ()=>{
                
            });
    }

    #sor(){
        let txt = "<tr>";; 
        for(const key in this.#obj){
            txt += `<td>${this.#obj[key]}</td>`;
            
            txt += `<td><span class="kesz">✅</span><span class="megnem">❌</span><span class="torles">🗑</span></td>`;
            txt += "</tr>";
        };

        this.TAROLO.append(txt);

    }
}

export default MegjelenitSor;