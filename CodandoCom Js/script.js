const Alunos =[ 
  {
    Name: "Debora",
    AV1: 7,
    PR2: 10,
  },
  {
    Name: "Vanessa",
    AV1: 10,
    PR2: 10,
  },
  {
    Name: "Buda",
    AV1: 5,
    PR2: 7,
  },
  {
    Name:"Godofredo",
    AV1: 1,
    PR2: 10,
  }]

const Nome1Aluno = Alunos[0].Name
const Nota1Do1Aluno = Alunos[0].AV1
const Nota2Do1Aluno = Alunos[0].PR2

const Nome2Aluno = Alunos[1].Name
const Nota1Do2Aluno = Alunos[1].AV1
const Nota2Do2Aluno = Alunos[1].PR2

const Nome3Aluno = Alunos[2].Name
const Nota1Do3Aluno = Alunos[2].AV1
const Nota2Do3Aluno = Alunos[2].PR2

const Nome4Aluno = Alunos[3].Name
const Nota1Do4Aluno = Alunos[3].AV1
const Nota2Do4Aluno = Alunos[3].PR2

let result1Aluno = (Nota1Do1Aluno + Nota2Do1Aluno) / 2
let result2Aluno = (Nota1Do2Aluno + Nota2Do2Aluno) / 2
let result3Aluno = (Nota1Do3Aluno + Nota2Do3Aluno) / 2
let result4Aluno = (Nota1Do4Aluno + Nota2Do4Aluno) / 2

let result1 = result1Aluno >= 7
let result2 = result2Aluno >= 7
let result3 = result3Aluno >= 7
let result4 = result4Aluno >= 7

if (result1){
  alert(" Parabéns " + Nome1Aluno + " você pasou com: " + result1Aluno)
} else {
  alert(Nome1Aluno + " Não chegou no esperado sua nota foi: " + result1Aluno)
}
if (result2){
  alert(" Parabéns " + Nome2Aluno + " você pasou com: " + result2Aluno)

} else {
  alert(Nome2Aluno + " Não chegou no esperado sua nota foi: " + result2Aluno)

}
if (result3){
  alert(" Parabéns " + Nome3Aluno + " você pasou com: " + result3Aluno)

} else {  
  alert(Nome3Aluno + " Não chegou no esperado sua nota foi: " + result3Aluno)

}
if (result4) {
  alert(" Parabéns " + Nome4Aluno + " você pasou com: " + result4Aluno)

} else {
  alert(Nome4Aluno + " Não chegou no esperado sua nota foi: " + result4Aluno)

}
