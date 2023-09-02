const campoN1 = document.getElementById("n1");
const campoN2 = document.getElementById("n2");
const campoOperador = document.getElementById("operador");
const button = document.getElementById("submit");
const res = document.getElementById("res");

button.onclick = () => {
    let n1 = Number(campoN1.value);
    let n2 = Number(campoN2.value);
    let operador = campoOperador.value;
    let resultado;
    
    if (operador == "soma") {
        resultado = n1 + n2;
        res.innerText = `Resultado: ${resultado}`;
    } else if (operador == "subtração") {
        resultado = n1 - n2;
        res.innerText = `Resultado: ${resultado}`;
    } else {
        res.innerHTML = "Operador inválido!<br>Operadores válidos: soma, subtração";
    };
};
