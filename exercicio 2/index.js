"use strict";
function verificaIdade(idade) {
    if (idade >= 0 && idade < 15) {
        return "Criança";
    }
    else if (idade >= 15 && idade < 30) {
        return "Jovem";
    }
    else if (idade >= 30 && idade <= 60) {
        return "Adulto";
    }
    else if (idade >= 60) {
        return "Idoso";
    }
}
;
const idadeLabel = document.createElement("label");
idadeLabel.innerText = "Idade:";
const idadeCampo = document.createElement("input");
idadeCampo.type = "number";
const submit = document.createElement("button");
submit.innerText = "Enviar";
const res = document.createElement("p");
document.body.appendChild(idadeLabel);
document.body.appendChild(idadeCampo);
document.body.appendChild(submit);
document.body.appendChild(res);
submit.onclick = () => {
    let idade = Number(idadeCampo.value);
    res.innerText = String(verificaIdade(idade));
};
