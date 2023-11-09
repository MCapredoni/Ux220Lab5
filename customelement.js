class MarcElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Marc was here";
    }
}

customElements.define("x-marc", MarcElement);

class CenterElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = 
        `<div style="text-align:center">${this.innerHTML}</div>`;
    }
}

customElements.define("x-center", CenterElement);

class YearElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new date().getFullYear();
    }
}

customElements.define("x-fullyear", YearElement);