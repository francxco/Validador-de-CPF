function calcular() {

    let form = document.getElementById("calculadora");


    let num1 = parseFloat(form.valor1.value);
    let num2 = parseFloat(form.valor2.value);
    let operador = form.operador.value;
    let resultado = form.resultado;
    console.log(num1);
    console.log(num2);
    console.log(operador);
    switch (operador) {
        case '+':
            resultado.value = num1 + num2;
            break;
        case '-':
            resultado.value = num1 - num2;
            break;
        case '*':
            resultado.value = num1 * num2;
            break;
        case '/':
            resultado.value = num1 / num2;
            break;
        default:
            resultado.value = 'Operador inválido';
            break;
    }

    return false;
}
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g,'');
    if(cpf == '') return false;
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;
    add = 0;
    for (i=0; i < 9; i ++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    add = 0;
    for (i = 0; i < 10; i ++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    return true;
    }
    function validar() {
        var cpf = document.getElementById("cpf").value;
        if (validarCPF(cpf)) {
            alert("CPF válido");
        } else {
            alert("CPF inválido");
        }
    }


