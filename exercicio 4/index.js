"use strict";
class userInput {
    constructor(name, type, parent) {
        this.name = name;
        this.type = type;
        this.parent = parent;
        this.label = document.createElement("label");
        this.label.innerText = this.name + ":";
        this.input = document.createElement("input");
        this.input.type = this.type;
        this.parent.appendChild(this.label);
        this.parent.appendChild(this.input);
    }
}
class Button {
    constructor(text, parent) {
        this.button = document.createElement("button");
        this.text = text;
        this.parent = parent;
        this.button.innerText = this.text;
        this.parent.appendChild(this.button);
    }
}
const distancia = new userInput("Distância(Km)", "number", document.body);
const qtd_peças = new userInput("Quantidade de peças", "number", document.body);
const regiao = new userInput("Região", "number", document.body);
const button = new Button("Enviar", document.body);
button.button.onclick = () => {
    let dist = Number(distancia.input.value);
    let qtd = Number(qtd_peças.input.value);
    let reg = Number(regiao.input.value);
    console.log(dist, qtd, reg);
};
