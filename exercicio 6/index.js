const data = document.getElementById("data");
const button = document.getElementById("enviar");
const res = document.getElementById("res");
function mesExtenso(numero_mes) {
    switch (numero_mes) {
        case 1:
            return "Janeiro";
        case 2:
            return "Fevereiro";
        case 3:
            return "Março";
        case 4:
            return "Abril";
        case 5:
            return "Maio";
        case 6:
            return "Junho";
        case 7:
            return "Julho";
        case 8:
            return "Agosto";
        case 9:
            return "Setembro";
        case 10:
            return "Outubro";
        case 11:
            return "Novembro";
        case 12:
            return "Dezembro";
    }
}
;
button.onclick = () => {
    let dataValue = data.value.split("-", 3);
    res.innerText = `${dataValue[2]} de ${mesExtenso(Number(dataValue[1]))} de ${dataValue[0]}`;
};
