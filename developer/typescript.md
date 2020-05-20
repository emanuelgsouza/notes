# Typescript

## Refências

* [Understanding TypeScript - 2020 Edition by Maximilian Schwarzmüller](https://www.udemy.com/course/understanding-typescript/)
* [Minicurso de TypeScript do Willian Justen](https://www.youtube.com/playlist?list=PLlAbYrWSYTiPanrzauGa7vMuve7_vnXG_)

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

## Porque adotar TypeScript?

* Evitar comportamentos inesperados.
* Avisa alguns possíveis erros de sintaxe no código.
* Com a tipagem estática, eu possuo uma documentação do meu código como um todo.

## Desvantagens do JavaScript

* Necessita ser compilado (mais um passo no processo)
* Curva de aprendizagem e dificuldade em aprender as boas práticas
* 

## Core Types

### Numbers

TS não diferencia tipos númericos, como *double integer* ou *floats*, como outras linguagens. `5` e `5.00` são tipos `number` da mesma forma.

Então, em TS:

```ts
// Permitido
let age = 30;
let age: number = 30;

// Não permitido
let age = '30'; // deverá me acusar um erro, porque age é do tipo number
```

### Strings

Textos como qualquer outro (entre `""`, `''`, ``);

```ts
// Permitido
let name = 'Emanuel';
let name: string = 'Emanuel';

// Não permitido
let name = 30;
```

### Booleans

Valores já conhecidos, `true` ou `falso`.

```ts
// Permitido
let married = true;
let married: boolean = true;

// Não permitido
let married = 30;
```

### Objects

Todo Object JS será object em TS, porém, TS poderá inferir os tipos automaticamente e não só isso, não permitir que se acesse propriedades que não existem no objeto.

```ts
// Permitido
// TS irá inferir os tipos e as propriedades do object
const emanuel = {
  name: 'Emanuel',
  age: 22,
  married: true
}
console.log(emanuel.name)

// Não permitido
console.log(emanuel.lastName)
```

Podemos ainda anotar o tipo de nossos objetos:

```ts
const emanuel: {
  name: string;
  age: number;
  married: boolean
} = {
  name: 'Emanuel',
  age: 22,
  married: true
}
```

### Arrays

Todo array em JS será um array em TS. A sintaxe para anotação de um array é:

```ts
// variable: <TYPE>[]

// Aqui eu estou dizendo: languages é um array de strings.
// Neste caso, estou sendo específico
const languages: string[];
languages = ['JavaScript', 'Python', 'PHP'];

// Mas e como fazer com que eu tenha uma Array mixado?
// Não é recomendado!
const languagesAny: any[];
languagesAny = ['JavaScript', 'Python', 'PHP', true, 30];
```

### Tuplas

Tuplas em TS são usadas para indicar um conjunto de elementos com tamanho definido. Quando compilado, ele vira um array.

```ts
let tuple: [number, string, boolean];

// Teremos consistência na quantidade de elementos
// As linhas abaixo não compilarão
tuple = [];
tuple = [1];
tuple = [1, ''];

// Teremos consistência na hora de acessar os elementos
tuple[0] // ok
tuple[4] // not ok
```
