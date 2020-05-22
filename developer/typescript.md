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

### Enun

São tipos usados para enumerar valores constantes em nosso código. Por exemplo, podemos usá-lo quando precisamos trabalhar com permissões para um usuário.

Escrevemos Enums:

```ts
// Por padrão, cada role abaixo compilará ao final um número
enum Roles {
  ADMIN, // 0
  AUTHOR, // 1
  USER // 2
}

// Agora podemos usar o enum
const user = {
  name: 'Emanuel',
  role: Roles.ADMIN
}

// fazer comparacões
if (user.role === Roles.ADMIN) {}

// Podemos, no momento da criacão, atribuir valores
enum Roles {
  ADMIN = 5,
  AUTHOR = 'AUTHOR'
}
```

### Any

É o tipo que define que posso usar qualquer valor, qualquer tipo em alguma variável.

```ts
const data = any[]; // aqui estou definindo que meu array pode receber qualquer valor

// O compilador não irá acusar um erro
let data: any = 'Emanuel';
data = 9;
```

### Union

Unios são usados para unir dois tipos e combiná-los de maneira a expressar quais seriam os tipos específicos que uma variável poderia receber. Exemplo:

```ts
// estou dizendo que user pode ser um objeto com um name ou uma string
let user = { name: string } | string;

user = { name: 'Emanuel' }; // ok
user = 'Emanuel'; // ok
```

### Literals

Tipos literais usam os tipos comuns da linguagem JS e definem como uma constante uma variável.

Exemplo:

```ts
// como estou usando const, name se torna uma constante do tipo 'Emanuel'
const name = 'Emanuel';

// mesmo princípio
const age = 22;
```

### Type aliases

Em TS, é possível criar seu próprio tipo. Com isso, você precisará usar `type` para dizer ao TS que aquilo é um tipo criado por você. Ele é util para reaproveitamento de código.

```ts
// definindo um tipo usando Literal type e Union
type GENRE = 'M' | 'F';

type User = {
  name: string;
  age: number;
  genre: GENRE;
}

// definindo que emanuel é do tipo User
const emanuel: User = {
  name: 'Emanuel',
  age: 22,
  genre: 'M' // se eu tentar colocar 'D', por exemplo, será emitido um erro
}
```
