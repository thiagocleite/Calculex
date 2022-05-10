const express = require('express');
const { Calcula, operacoes } = require('./operacoes');
const app = express();
const port = 3000;

app.get('', (req, res) => {
    console.log(req.query);

    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);
    const oper = req.query.oper;

    res.setHeader('Content-Type', 'text/plain');
    
    if (isNaN(n1) || isNaN(n2)) {
        res.statusCode = 404;
        res.end('Numeros invalidos');    
    } else {
        for (let i = 0; i < operacoes.length; i++) {
            var aux = operacoes[i] == oper;
            if (aux) {
                break;
            }
        };

        if (oper == 'divisao' && n2 == 0) {
            res.statusCode = 404;
            res.end(`Cannot divide ${n1} by 0`);    
        } else if (aux) {
            res.statusCode = 200;
            const result = Calcula(oper, n1, n2, operacoes);
            res.end(result);
            console.log(result);
        } else {
            res.statusCode = 404;
            res.end(`O operador é '${oper}' invalido`);
        }
    };
});

app.listen(port, () => {
    console.log(`Servidor executando na porta -> ${port}`);
});