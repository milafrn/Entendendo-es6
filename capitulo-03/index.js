// Crie uma função buscar que recebe três parâmetros:

// propriedade: Nome da propriedade no objeto
// valor: Valor da propriedade no objeto
// lista: Lista de objetos onde a busca deve ser executada
// Dado estes parâmetros, a função deve buscar na lista e retornar o registro que possui a propriedade com o valor especificado.

// Utilize o método find.

// var lista = [
//     { nome: 'Tânia', sobrenome: 'Cardoso', idade: 65 },
//     { nome: 'Emilly', sobrenome: 'Barbosa', idade: 46 },
//     { nome: 'Vitória', sobrenome: 'Costa', idade: 83 },
//     { nome: 'Erick', sobrenome: 'Ferreira', idade: 16 }
// ]
// Exemplo: buscar('nome', 'Tânia', lista) → { nome: 'Tânia', sobrenome: 'Cardoso', idade: 65 }

var lista = [
  { nome: "Tânia", sobrenome: "Cardoso", idade: 65 },
  { nome: "Emilly", sobrenome: "Barbosa", idade: 46 },
  { nome: "Vitória", sobrenome: "Costa", idade: 83 },
  { nome: "Erick", sobrenome: "Ferreira", idade: 16 }
];

buscar("nome", "Tânia", lista);
buscar("sobrenome", "Costa", lista);

function buscar(propriedade, valor, lista) {
  const buscando = lista.find(
    objetoDavez => objetoDavez[propriedade] === valor
  );
  console.log(buscando);
}
