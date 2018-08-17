class Pagamento {

    constructor(id, forma_de_pagamento, valor) {

        this._id = id;
        this._forma_de_pagamento = forma_de_pagamento;
        this._valor = valor;
        Object.freeze(this);
    }

    get id() {

        return this._id;
    }

    get forma_de_pagamento() {

        return this._forma_de_pagamento;
    }

    get valor() {

        return this._valor;
    }

}
