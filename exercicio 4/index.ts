class userInput {
    name:string;
    type:string;
    parent:HTMLElement;
    label:HTMLLabelElement;
    input:HTMLInputElement;
    constructor(name:string, type:string, parent:HTMLElement) {
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
    button:HTMLButtonElement;
    parent:HTMLElement;
    text:string;
    constructor(text:string, parent:HTMLElement) {
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
    let dist:number = Number(distancia.input.value);
    let qtd:number = Number(qtd_peças.input.value);
    let reg:number = Number(regiao.input.value);
    console.log(dist, qtd, reg);
};