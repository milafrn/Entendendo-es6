// Dada uma lista de objetos que contém o nome de um aluno e sua média final, crie o método 'aprovados' que recebe esta lista e retorna somente os alunos que foram aprovados.

// Para isto, utilize o método filter.

// var alunos = [
//   { nome: 'Diogo', media: 5.5 },
//   { nome: 'Julia', media: 9.5 },
//   { nome: 'Roberto', media: 1.5 },
//   { nome: 'Tiago', media: 6.0 }
// ];
// Exemplo: aprovados(alunos, 6.5) → [ { nome: 'Julia', media: 9.5 } ]

var alunos = [
  { nome: "Diogo", media: 5.5 },
  { nome: "Julia", media: 9.5 },
  { nome: "Roberto", media: 1.5 },
  { nome: "Tiago", media: 6.0 }
];

const alunosAprovados = alunos.filter(function(aluno) {
  return aluno.media >= 6.5;
});

console.log(alunosAprovados);
