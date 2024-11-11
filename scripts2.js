//exercicio dispesas 

let family = {
incomes:{300, 451,102.25}
expenses:{300, 212, 56, 90.33}
}

function sum(array) {
let total = 0;

for(let value of array) {
total += value
}

return total
}

    




function calculateBalance() {

    const calculateIncomes = sum(family.incomes)
const calculateExpenses = sum(family.expenses)

const total = calculateIncomes - calculateExpenses

const istOk = total >=0

let balanceText = "negativo"

if (istOk) {
    balanceText = 'positivo'
}


console.log ('seu saldo é' ${balanceText}: ${total.toFixed(2)

})

}