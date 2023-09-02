const camposTurno = document.getElementsByName("turno");
const camposCategoria = document.getElementsByName("categoria");
const campoCodigo = document.getElementById("codigo");
const campoHoras = document.getElementById("horas");
const campoSalario = document.getElementById("salario");
const button = document.getElementById("submit");
const res = document.getElementById("res");

button.onclick = () => {
    let turno;
    let categoria;
    let codigo;
    let horas;
    let salario;
    let valorHoraTrabalhada;
    let salarioInicial;
    let auxiloAlimentacao;

    camposTurno.forEach(campoTurno => {
        if (campoTurno.checked) {
            turno = campoTurno.value;
        };
    });

    camposCategoria.forEach(campoCategoria => {
        if (campoCategoria.checked) {
            categoria = campoCategoria.value;
        };
    });

    codigo = Number(campoCodigo.value);
    horas = Number(campoHoras.value);
    salario = Number(campoSalario.value);

    if (categoria=="G" && (turno == "M" || turno == "V")) {
        valorHoraTrabalhada = salario*(4/100);
    } else if (categoria == "F" && turno == "N") {
        valorHoraTrabalhada = salario*(2/100);
    } else if (categoria == "F" && (turno == "M" || turno == "V")) {
        valorHoraTrabalhada = salario*(1/100);
    };

    salarioInicial = valorHoraTrabalhada * horas;

    if (salarioInicial <= 800) {
        auxiloAlimentacao = salarioInicial*(25/100);
    } else if (salarioInicial > 800 && salarioInicial <= 1200) {
        auxiloAlimentacao = salarioInicial*(20/100);
    } else if (salarioInicial > 1200) {
        auxiloAlimentacao = salarioInicial*(15/100);
    };

    let salarioFinal = salarioInicial + auxiloAlimentacao;

    res.innerHTML = `Número de horas trabalhadas: ${horas}<br>Valor da hora trabalhada: R$ ${valorHoraTrabalhada.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}<br>Salário Inicial: R$ ${salarioInicial.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}<br>Auxílio alimentação: R$ ${auxiloAlimentacao.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}<br>Salário final: R$ ${salarioFinal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    console.log(turno, categoria, codigo, horas, salario);
};
