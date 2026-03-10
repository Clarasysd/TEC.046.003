const calcularMedia = function (nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3
}
const Aprovacao = (Nota) >= 7;
    if (Aprovacao(calcularMedia(7, 10, 7))) {
        console.log("Aluno Aprovado");
    } else { console.log("Aluno Reprovado");
    }
function exibirNotaFinal(Nota){
    console.log ("Nota Final: " + Nota);
}
exibirNotaFinal(Nota = calcularMedia(7, 10, 7));

