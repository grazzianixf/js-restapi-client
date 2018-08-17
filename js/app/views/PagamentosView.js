class PagamentosView extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(model) {

        return `
        <table border=1 cellspacing=1>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Forma de Pagamento</th>
                    <th>Valor</th>
                    <th>Ações</th>
                </tr>
            </thead>

            <tbody>
                ${model.pagamentos.map(n => `

                    <tr>
                        <td>${n.id}</td>
                        <td>${n.forma_de_pagamento}</td>
                        <td>${n.valor}</td>
                        <td>
                            <button onclick="pagamentoController.excluir(${n.id})">
                                Excluir
                            </button>
                            <div id="despachoView${n.id}"></div>
                        </td>
                    </tr>

                `).join('')}
            </tbody>

            <tfoot>
                <td colspan="7" align="center">
                    ${model.pagamentos.reduce((total, n) => total + 1, 0.0)} itens
                </td>
            </tfoot>

        </table>
        `;
    }
}
