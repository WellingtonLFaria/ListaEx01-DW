// Classe para a criação dos campos de entrada do usuário
class campoEntradaUsuario {
    constructor(nome, tipo, parente) {
        this.nome = nome;
        this.tipo = tipo;
        this.parente = parente;
        this.label = document.createElement("label");
        this.label.innerText = `${nome}:`;
        this.campo = document.createElement("input");
        this.campo.type = tipo;
        this.parente.appendChild(this.label);
        this.parente.appendChild(this.campo);
    }
}
// Função que calcula o IMC e a classficação
function IMC(altura, peso) {
    let msg;
    let imc = peso / (altura / 100) ** 2;
    if (imc < 16) {
        msg = "Baixo peso muito grave";
    }
    else if (imc >= 16 && imc <= 16.99) {
        msg = "Baixo peso grave";
    }
    else if (imc >= 17 && imc <= 18.49) {
        msg = "Baixo peso";
    }
    else if (imc >= 18.50 && imc <= 24.99) {
        msg = "Peso normal";
    }
    else if (imc >= 25 && imc <= 29.99) {
        msg = "Sobrepeso";
    }
    else if (imc >= 30 && imc <= 34.99) {
        msg = "Obesidade grau I";
    }
    else if (imc >= 35 && imc <= 39.99) {
        msg = "Obesidade grau II";
    }
    else if (imc >= 40) {
        msg = "Obesidade grau III";
    }
    return [Math.round(peso / (altura / 100) ** 2), msg];
}
// Criando a área do formulário
const form = document.createElement("div");
document.body.appendChild(form);
// Criando os campos de entrada do usuário
const campoNome = new campoEntradaUsuario("Nome", "text", form);
const campoAltura = new campoEntradaUsuario("Altura(cm)", "number", form);
const campoPeso = new campoEntradaUsuario("Peso(kg)", "number", form);
// Criando o botão de envio
const button = document.createElement("button");
button.innerText = "Enviar";
form.appendChild(button);
// Criando o parágrafo do resultado do cáculo
const res = document.createElement("p");
form.appendChild(res);
// Quando clica no botão de enviar
button.onclick = () => {
    let nome = campoNome.campo.value;
    let altura = Number(campoAltura.campo.value);
    let peso = Number(campoPeso.campo.value);
    let imc = IMC(altura, peso);
    res.innerText = `IMC: ${String(imc[0])}, classificado como: ${imc[1]}`;
};
