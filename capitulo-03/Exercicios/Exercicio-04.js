/* Exercício 4 - Equilibrio de parênteses
Utilizando a função auxiliar reduce, escreva uma função chamada validaParenteses que avalia se os parênteses estão balanceados. Isso significa que, pra cada parênteses esquerdo “(“ é necessário ter um parênteses direito “)” correspondente. A função deve aceitar uma string e retornar um valor booleano (true ou false).

Exemplo: validaParenteses(')((()()())))'); → false
Exemplo: "()()()" → true
Exemplo: ")(" → false */

const r1 = validaParenteses();
if (typeof r1 === "string") {
  console.log("Ela retornou uma string como esperado");
} else if (typeof r1 === "undefined") {
  console.error("###Não retornou uma string como esperado");
}

const r2 = validaParenteses("(");
if (r2 === false) {
  console.log("Ela retornou false quando passamos um parenteses de ABERTURA");
} else {
  console.error(
    "###Ela não retornou false quando passamos um parenteses de ABERTURA"
  );
}

const r3 = validaParenteses(")");
if (r3 === false) {
  console.log("Ela retornou false quando passamos um parenteses de FECHAMENTO");
} else {
  console.error(
    "###Ela não retornou false quando passamos um parenteses de FECHAMENTO"
  );
}

const r4 = validaParenteses("()");
if (r4 === true) {
  console.log(
    "Ela retornou true quando passamos um parenteses de ABERTURA e um parenteses de FECHAMENTO"
  );
} else {
  console.error(
    "###Ela não retornou true quando passamos um parenteses de ABERTURA e um parenteses de FECHAMENTO"
  );
}
const r5 = validaParenteses("()(");
console.log(r5);

console.log("----");
console.log("O valor de r1 é: " + typeof r1);
console.log("O valor de r2 é: " + r2);
console.log("O valor de r3 é: " + r3);
console.log("O valor de r4 é: " + r4);
console.log("O valor de r5 é: ", r5);

function validaParenteses(texto) {
  let arrTexto;
  if (typeof texto != "undefined") {
    arrTexto = texto.split("");
  } else {
    return undefined;
  }
  console.log("A quantidade de parenteses é: ");
  contaParenteses(texto);

  let soma = 0;
  for (let i = 0; i < arrTexto.length; i++) {
    if (arrTexto[i] === "(") {
      soma--;
    }
    if (arrTexto[i] === ")") {
      soma++;
    }
  }

  if (soma === 0) {
    return true;
  } else if (soma < 0 || soma >= 1) {
    return false;
  }
}

function contaParenteses(texto) {
  const arrTexto = texto.split("");
  console.log(arrTexto.length);
}
