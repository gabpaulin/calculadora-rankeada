function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 100) {
        nivel = "Ouro";
    } else if (vitorias >= 101 && vitorias <= 175) {
        nivel = "Platina";
    } else {
        nivel = "Nível Superior";
    }

    let mensagem = `O herói tem um saldo de ${saldoVitorias} vitórias e está no nível ${nivel}`;
    return mensagem;
}

// Exemplo de uso:
let vitorias = 30;
let derrotas = 5;
let resultado = calcularNivel(vitorias, derrotas);
console.log(resultado);
