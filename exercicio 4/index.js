"use strict";
const campoDistancia = document.getElementById("distancia");
const campoQtd = document.getElementById("qtd");
const campoRegiao = document.getElementById("regiao");
const enviar = document.getElementById("enviar");
const res = document.getElementById("res");
enviar.onclick = () => {
    let rastreamentos = document.getElementsByName("rastreamento");
    let rastreamento;
    for (let c in rastreamentos) {
        if (rastreamentos[c].checked) {
            rastreamento = Number(rastreamentos[c].value);
        }
    }
    let distancia = Number(campoDistancia.value);
    let qtd = Number(campoQtd.value);
    let regiao = Number(campoRegiao.value);
    let preco = 0;
    let desconto = 0;
    let resto = 0;
    if (qtd > 1000) {
        resto = qtd - 1000;
        qtd = 1000;
    }
    ;
    switch (regiao) {
        case 1:
            preco = 1;
            desconto = 1 - (1 * 10 / 100);
            break;
        case 2:
            preco = 1.2;
            desconto = 1.2 - (1.2 * 12 / 100);
            break;
        case 3:
            preco = 1.3;
            desconto = 1.3 - (1.3 * 13 / 100);
            break;
    }
    let precoTotal = (qtd * preco) + (resto * desconto) + rastreamento;
    res.innerHTML = `Taxa do rastreamento: R$ ${rastreamento}<br>Valor do frete pelas peças: R$ ${(qtd * preco) + (resto * desconto)}<br>Total do frete: R$ ${precoTotal}`;
};
