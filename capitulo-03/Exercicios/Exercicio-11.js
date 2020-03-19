// Exercício 11 - A pequena ovelha Dolly
// Utilizando o método auxiliar forEach, crie uma função clonaObjeto que recebe como parâmetro um objeto e cria uma cópia exata dela.

// utilize o método Object.getOwnPropertyNames para obter as propriedades do objeto

const objeto = {
  name: "gertrudis",
  idade: 100
};

const objeto2 = clonaObjeto(objeto);
console.log(objeto2);
function clonaObjeto(obj) {
  let copy = Object.create(Object.getPrototypeOf(obj));
  let propriedadesNames = Object.getOwnPropertyNames(obj);
  console.log(propriedadesNames);

  propriedadesNames.forEach(function(name) {
    const desc = Object.getOwnPropertyDescriptor(obj, name);
    Object.defineProperty(copy, name, desc);
  });
  return copy;
}
