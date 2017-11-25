class View {
    
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }

    update() {
        this._elemento.innerHTML = this.template(model);
    }

    template() {
        throw new Error('Você precisa implementar o método template!');
    }
}   