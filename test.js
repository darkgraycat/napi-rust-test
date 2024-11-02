const { add, substract, multiply, divide } = require('./calc-lib.node');

void async function(arg_string = '') {
    if (!arg_string.length) throw new Error('Provide and argument. Ex: 2 + 2');

    const [a, op, b] = arg_string.split(' ');

    const num_a = +a;
    const num_b = +b;

    if (Number.isNaN(num_a) || Number.isNaN(num_b)) throw new Error('Incorrect A and B args');

    const operation = {
        '+': add,
        '-': substract,
        '*': multiply,
        '/': divide,
    }[op];

    if (!operation) throw new Error('Incorrect operation name');

    return operation(num_a, num_b);
}(...process.argv.slice(2))
    .then(console.log)
    .catch(console.error);
