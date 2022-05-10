const operacoes = [
    'soma',
    'subtracao',
    'multiplicacao',
    'divisao',
    'potencia',
    'raiz',
    'log'
];

function Calcula(operadorEntrada, n1, n2, operacoes) {
    switch (operadorEntrada) {
        case operacoes[0]:
            return (`${n1} + ${n2} = ${n1 + n2}`)
            
        case operacoes[1]:
            return (`${n1} - ${n2} = ${n1 - n2}`)
            
        case operacoes[2]:
            return (`${n1} x ${n2} = ${n1 * n2}`)
            
        case operacoes[3]:
            return (`${n1} / ${n2} = ${n1 / n2}`)
            
        case operacoes[4]:
            return (`${n1} ^ ${n2} = ${n1 ** n2}`)
            
        case operacoes[5]:
            return (`${n1} ^ (1 / ${n2}) = ${n1 ** (1/n2)}`)

        case operacoes[6]:
            return (`log(${n2}, ${n1}) = ${Math.log(n1, n2)}`)
    }
};

module.exports = {
    operacoes,
    Calcula
};