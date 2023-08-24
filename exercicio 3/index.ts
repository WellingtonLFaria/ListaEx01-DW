const peso1 = 2;
const peso2 = 5;
const peso3 = 3;

function calcularMedia(nota1:number, nota2:number, nota3:number) {
    let media = ((nota1*peso1) + (nota2 * peso2) + (nota3 * peso3))/(peso1+peso2+peso3);
    let classificacao;
    if (media > 9 && media <= 10) {
        classificacao = "A";
    } else if (media > 8 && media <= 9) {
        classificacao = "B";
    } else if (media > 7 && media <=8) {
        classificacao = "C";
    } else if (media > 6 && media <= 7) {
        classificacao = "D";
    } else if (media > 5 && media <= 6) {
        classificacao = "E";
    } else if (media >= 0 && media <= 5) {
        classificacao = "F";
    }
    return [media, classificacao];
};

const labelAtividade1 = document.createElement("label");
labelAtividade1.innerText = "Nota atividade 1:";
const campoAtividade1 = document.createElement("input");
campoAtividade1.type = "number";

const labelAtividade2 = document.createElement("label");
labelAtividade2.innerText = "Nota atividade 2:";
const campoAtividade2 = document.createElement("input");
campoAtividade2.type = "number";

const labelAtividade3 = document.createElement("label");
labelAtividade3.innerText = "Nota atividade 3:";
const campoAtividade3 = document.createElement("input");
campoAtividade3.type = "number";

const submit = document.createElement("button");
submit.innerText = "Enviar";

const res = document.createElement("p");

document.body.appendChild(labelAtividade1);
document.body.appendChild(campoAtividade1);

document.body.appendChild(labelAtividade2);
document.body.appendChild(campoAtividade2);

document.body.appendChild(labelAtividade3);
document.body.appendChild(campoAtividade3);

document.body.appendChild(submit);

document.body.appendChild(res);

submit.onclick = () => {
    let nota1 = Number(campoAtividade1.value);
    let nota2 = Number(campoAtividade2.value);
    let nota3 = Number(campoAtividade3.value);
    let media = calcularMedia(nota1, nota2, nota3);
    res.innerText = `Média: ${media[0]} | Classificação: ${media[1]}`;
};
