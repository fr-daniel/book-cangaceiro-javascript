class NegociacaoController {
    constructor() {
        const $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoes = new Negociacoes();
    }

    adiciona(event) {
        event.preventDefault();
        this._negociacoes.adiciona(this._criarNegociacao());
        this._limparFormulario();
     }

     _limparFormulario() {
         this._inputData.value = '';
         this._inputQuantidade.value = 1;
         this._inputValor.value = 0.0;
         this._inputData.focus();
     }

     _criarNegociacao() {
         return new Negociacao(
            DateConverter.paraData(this._inputData.value), 
            this._inputQuantidade.value, 
            this._inputValor.value
        );
     }
}