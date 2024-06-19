let vitorias = prompt("Informe a quantidade de vitórias: ");
let derrotas = prompt("Informe a quantidade de derrotas: ");
let saldoVitorias;

function saldo(vitorias, derrotas) {
    saldoVitorias = vitorias - derrotas;
    return saldoVitorias;
}

function ranking(saldoVitorias) {
    if (saldoVitorias <= 10) {
        console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível Ferro`);
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível Bronze`);
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível Prata`);
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível Ouro`);
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível Diamante`);
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível Lendário`);
    } else {
        console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível Imortal`);
    };
}

saldo(vitorias, derrotas);
ranking(saldoVitorias);