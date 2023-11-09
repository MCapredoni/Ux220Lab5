class MarcElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Marc was here";
    }
}

customElements.define("x-marc/, MarcElement");
