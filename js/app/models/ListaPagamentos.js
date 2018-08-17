class ListaPagamentos {

    constructor() {

        this._pagamentos = [];
    }

    adiciona(pagamento) {

        this._pagamentos.push(pagamento);
    }

    get pagamentos() {

        return [].concat(this._pagamentos);
    }
}
