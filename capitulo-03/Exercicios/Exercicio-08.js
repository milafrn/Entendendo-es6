// Crie uma função calculaAreaTotal que recebe um parâmetro:

// dimensoes: objeto que possui as propriedades altura e comprimento que são números inteiros
// A função deve retornar a soma de todas as áreas. Tome como base a entrada a seguir:

// var dimensoes = [
//   { altura: 10, comprimento: 20},
//   { altura: 2, comprimento: 4},
//   { altura: 1, comprimento: 1},
//   { altura: 50, comprimento: 50}
// ]
// Exemplo: calculaAreaTotal(dimensoes) → 2709

var dimensoes = [
  { altura: 10, comprimento: 20 },
  { altura: 2, comprimento: 4 },
  { altura: 1, comprimento: 1 },
  { altura: 50, comprimento: 50 }
];

calculaAreaTotal(dimensoes);

function calculaAreaTotal(dimensoes) {
  let dimensao = dimensoes.map(obj => {
    return obj.altura * obj.comprimento;
  });

  let soma = dimensao.reduce(function(a, b) {
    return a + b;
  }, 0);
  console.log(soma);
}

// SOLUÇÃO COM FOR NORMAL
//   function calculaAreaTotal(dimensoes) {
//     let total = 0;
//     for (let i = 0; i < dimensoes.length; i++) {
//       let calculaArea = dimensoes[i].altura * dimensoes[i].comprimento;
//       total += calculaArea;
//     }
//     console.log(total);
//   }
