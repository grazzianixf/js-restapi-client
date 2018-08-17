class PagamentoController {


    constructor() {
        var context = this;

        let $ = document.querySelector.bind(document);

        this._listaPagamentos = new ListaPagamentos();

        this._pagamentosView = new PagamentosView($('#pagamentosView'));
        this._pagamentosView.update(this._listaPagamentos);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }

    _atualizaMensagem(texto, tipo) {
        this._mensagem.texto = texto;
        this._mensagem.tipo = tipo;
        this._mensagemView.update(this._mensagem);
    }

    _criaPagamento(pagamentoArray) {
        console.log(pagamentoArray);
        return new Pagamento(pagamentoArray.id,
            pagamentoArray.forma_de_pagamento,
            pagamentoArray.valor);
    }

    _errorCallBackFunction(e) {
        console.error(e);
        this._atualizaMensagem("Erro ao processar requisição... Veja mais detalhes no log do console (Ctrl + Shift + J)", 4);
    }

    atualizarPagamentos(event) {
				this._atualizaMensagem('Pesquisando pagamentos ...', 2);

        var that = this;

        let ajax = new XMLHttpRequest();
        ajax.onload = loadCallBackFunction;
        ajax.onerror = errorCallBackFunction;
        ajax.open("GET", URL_WEBSERVICE + "/pagamentos", true); //Habilitar Corss no navegador
        ajax.send();

        function loadCallBackFunction() {

            if (this.status == 200) { // request succeeded
                console.log(this.responseText);
                let json = JSON.parse(this.responseText);
                console.log(json);

                json.forEach(pagamentoArray => {
                    that._listaPagamentos.adiciona(that._criaPagamento(pagamentoArray));
                }, that);
                that._pagamentosView.update(that._listaPagamentos);
                that._listaPagamentos = new ListaPagamentos();

                that._atualizaMensagem('');
            } else {
                console.log("Resultado: statusCode = " + this.status);
                that._atualizaMensagem(`Erro do servidor: (${this.status}) ${this.statusText}`, 4);
            }
        }

				function errorCallBackFunction(e) {
		        console.log(this);
		        console.error(e);
		        that._atualizaMensagem("Erro ao processar requisição... Veja mais detalhes no log do console (Ctrl + Shift + J)", 4);
		    }
    }
}
