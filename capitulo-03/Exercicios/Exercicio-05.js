// Faça uma função chamada removeDuplicatas que recebe um array de números inteiros e remove todas as suas duplicadas.

// Utilize as funções auxiliares: reduce e find.

// Exemplo: removeDuplicatas([1,2,3,3,4,5]) → [1,2,3,4,5]

const arrayDuplicado = [1, 2, 3, 3, 4, 5];

removeDuplicatas(arrayDuplicado);
function removeDuplicatas(numeros) {
  return numeros.reduce(function(anterior, valor) {
    const achou = anterior.find(function(valor2) {
      return valor === valor2;
    });
    if (!achou) {
      anterior.push(valor);
    }
    console.log(anterior);
    return anterior;
  }, []);
}
