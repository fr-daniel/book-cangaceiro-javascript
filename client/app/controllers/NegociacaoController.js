class NegociacaoController {
    constructor() {
        const $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();
        let negociacao = new Negociacao(
            DateConverter.paraData(this._inputData), 
            this._inputQuantidade.value, 
            this._inputValor.value
        );
     }
}