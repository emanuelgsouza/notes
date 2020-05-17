# Typescript

## O que é o Typescript?

É um superset do JavaScript, isto é, é uma extensão do JavaScript que permite adicionar tipos a linguagem.

Além disso, TS:

* Adiciona **tipos**, como number, string entre outros, como também permite adicionar tipos criados pelo usuário.
* Permite usar novas features do JavaScript, e depois de compilado, o código funciona em browsers antigos
* Adiciona algumas funcionalidades não suportadas pelo JavaScript, mas conhecidas do universo OO, como *interfaces* e *generics*
* Permite a implementacao de meta programacao com *decorators*.
* Com o sistema de tipos, é possível usar ferramentas que ajudam no debug de código antes de compilá-lo

Uma das diferencas principais entre JS e TS está no fato de que em JavaScript os tipos são dinâmicos, enquanto que em TS os tipos são estáticos.

Um tipo em TS é assinalado à uma variável da seguinte maneira: `<NAME_OF_VARIABLE>: <TYPE>`. Exemplos:

```ts
const name: string = 'Emanuel'; // isto não é necessário porquê TS possui inferência de tipo

const add = (number1: number, number2: number) => {
  return number1 + number2;
}
```

## Core Types

* **Number**: TS não diferencia tipos númericos, como *double integer* ou *floats*, como outras linguagens. `5` e `5.00` são tipos `number` da mesma forma.
* String: textos como qualquer outro (entre `""`, `''`, ``);
* Boolean: valores `true` ou `falso`.
