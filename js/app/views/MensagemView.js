class MensagemView extends View {

    constructor(elemento) {
       super(elemento);
    }

   template(model) {

       let color = "";

       if (model.tipo == 1) { //success
           color = "green"
       } else if (model.tipo == 2) { //info
           color = "blue"
       } else if (model.tipo == 3) { //warning
           color = "yellow"
       } else if (model.tipo == 4) { //error
           color = "red"
       }

       return model.texto ? `<p style="color: ${color}">${model.texto}</p>` : '<p></p>';
   }
}
