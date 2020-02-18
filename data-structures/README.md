---
title: Estrutura de Dados
---

# Estrutura de Dados

## Referências

As referências técnicas usadas neste documento são:

* Estrutura de dados, algoritmos, análise da complexidade e implementacoes em Java e C++ - Ana Fernanda Gomes Ascencio e Graziela Santos Araújo
* Estruturas de Dados e Seus Algoritmos - Jayme Luiz Szwarcfiter e Lilian Markenzon

## O que é estrutura de dados?

Segundo Cormen:

> Uma estrutura de dados é um meio para armazenar e organizar dados com o objetivo de facilitar o acesso e as modificações.

Ou seja, toda estrutura de dados visa a ter ao menos dois conceitos claros:

1. É necessário definir uma forma como os dados estarão dispostos na estrutura, por exemplo, quando temos uma pilha, os dados estão dispostos de maneira sequencial. Já quando temos uma árvore, a disposição dos dados já não é dessa maneira.
2. É necessário definir como irá ocorrer as operações de manipulação desses dados. Uma pilha possui uma regra para inserção e recuperação de um dado diferente da fila.

### Análise de algoritmo

Como medimos um algoritmo? Novamente Cormen nos ensina que analisar um algoritmo é prever os recursos que o mesmo irá utilizar. Mas quais recursos? Podemos enumerar ao menos dois, que para alguns seriam os mais relevantes:

* Memória alocada
* Tempo de execução

Portanto, ao analisarmos um algoritmo precisamos entender como ele irá consumir os recursos de que dispõe e assim traçar uma performance do mesmo. Estudar as estruturas de dados é relevante para uma melhor análise dos nossos algoritmos, **haja vista que cada estrutura possui sua própria forma de manipulação de dados**.

Por fim, podemos enumerar ao menos duas formas de análise de algoritmos, segundo Knuth:

* Um algoritmo em particular, quando análisamos o desempenho de um algoritmo para uma determinada tarefa
* Uma conjunto de algoritmos, quando temos uma tarefa e queremos identificar qual algoritmo performa melhor para a execução dela.

## Recursão

O que é recursão? Dizemos que todo *procedimento* (para os mais familiarizados com programação, seria a boa e velha função) **que possui ao menos uma chamada para si mesmo dentro de seu corpo**. Todo procedimento, recursivo ou não, precisa de ao menos uma chama externa, que inicializa a execução da função recursiva. Implicitamente, ao usarmos uma recursão, estamos usando uma estrutura de dados chamada pilha. Um outro elemento importantíssimo de toda recursão chama-se **condição de parada**, sem ela, o procedimento entraria em loop.

Quais as vantagens de se usar recursão?

* Algoritmos mais concisos, e simples de entender
* Provas de correção mais simples

A seguir, ilustramos um exemplo de recursão conhecido, o *cálculo de fatorial*:

```sh
funcao fatorial(n):
  se (n <= 1):
    retorna 1
  
  retorna n * fatorial(n - 1)
```

Em código JavaScript, ficaria:

```js
const fatorial = n => {
  if (n <= 1) {
    return 1
  }

  return n * fatorial(n - 1)
}
```

Vamos investigar em detalhes o exemplo em pseudo código:

* Primeiramente definimos uma função `fatorial`.
* Dentro dela, temos uma condição de parada, que é quando `n` (argumento da função) é igual ou menor a 1.
* Por fim, sendo a condição de parada não atendida, retornamos a execução da função `fatorial` com o valor de `n` decrementado.

## Complexidade de Algorítmos

### Avaliacão do tempo e espaco em análise de algoritmos

Dois fatores são analisados num algoritmo:

1. **Tempo** que ele demora para executar uma determinada tarefa
2. **Espaco** que ele irá consumir para a execucão

#### O tempo

O tempo se tornou relevante haja vista o fato de que cada vez mais se busca resolver problemas complexos em menor tempo. Hoje com o advento do Big Data, há uma necessidade cada vez maior de se desenvolver algoritmo para análise de dados - e que grandes dados - num tempo razoável.

#### O espaco

Computacionalmente, o espaco representa a memória. Sendo assim, é claro a evolucão histórica de que no passado as memórias eram muito limitadas, de maneira que o espaco que um algoritmo usava era extremamente escaco e merecia os devidos cuidados. Hoje tal preocupacão inexiste, pois as memórias se tornaram um recurso virtualmente ilimitado.

#### Como avaliar o tempo?

* Método empírico:
  * Baseado na medicão da execucão do tempo
  * Depende do hardware, compilador, linguagem entre outros
  * Permitem um tratamento estatístico, isto é, posso fazer inúmeros testes e calcular uma média, por exemplo
* Método analítico
  * Determinacão de expressões matemáticas para a estimacão do comportamento do tempo do meu algoritmo
  * Independe dos recursos disponíveis

### Método analítico

Alguns princípios são adotados quando usamos o método analítico

* Sempre partimos do princípio de recebermos quantidades de dados absurdamente grandes
* Quando da criacão da expressão matemática, desconsideramos constantes aditivas e multiplicativas. Exemplo: numa equacão como `n2 + 5n` excluímos o valor de `5n` pois a funcão em sí girará em torno do valor de maior expoente, no caso `n2`.
* O objetivo será exprimir o tempo de execucão em funcão da entrada

Mas como chegamos a nossa funcão?

* Primeiramente, precisamos definir os passos do nosso algoritmo, que são as operacões básicas que ele realiza
* Cada passo, portanto, terá um tempo constante
* A operacão básica que é mais executada é chamada de "operacão dominante". Exemplo: em algorimos de ordenacão geralmente a operacão dominante é a de comparacão
* Sendo assim, nosso objetivo é definir uma funcão que exprime a ordem de grandeza de números de passos de um algoritmo, dado uma entrada

### Complexidade de tempo

Dado o método analítico, temos que é possível calcular a ordem de grandeza de nossos algoritmos. Mas como calcular o tempo? Como saber se um algoritmo performa melhor que o outro em termos de tempo? Para tanto, precisamos fazer a análise de complexidade de tempo

Alguns conceitos são importantes a se mencionar:

1. O ideial é sabermos a quantidade de passos dado a entrada
2. No mundo real, isso é impossível
3. Portanto, precisamos escolher algumas quantidades de entrada "representativas".

O que seriam entradas representativas? Seriam as entradas que representam alguns cenários da vida real, tais cenários são o que chamamos de complexidade

#### Complexidade de pior caso

* O número de entradas é desfavorável, quero saber como a coisa irá se comportar quando a entrada for muito grande
* Tende ao infinito, já que pressupomos que nosso algoritmo receba infinita quantidade de entradas
* Quase sempre é relevante e certamente é mais utilizada

#### Complexidade de melhor caso

* O número de entradas é favorável
* Menos utilizada, apenas em momentos específicos

#### Complexidade de médio caso

* O número de entradas será uma probabilidade
* Exige tratamento matemático, pois eu preciso saber a distribuicão de probabilidade das entradas possíveis para o meu algoritmo para definir a entrada mais comum

## Notação O

### Definição da Notação O

Aprendemos anteriormente que quando queremos expressar a ordem de grandeza de um algoritmo, ignoramos alguns elementos da nossa função, tais como as contantes adtivas e multiplicativas. A notação O visa a expressar exatamente o elemento da nossa função que é dominante, que expressa a ordem de grandeza de nosso algoritmo. Em outras palavras, a **notação de O busca exprimir os limites superiores da nossa equação**. Exemplos:

* `f = n2 - 1 => f = O(n2)`, pois o termo `n2` é o **termo dominante** da nossa equação
* `f = 403 => f = O(1)`, pois em ordem de grandeza, a variação será constante

### Propriedades da notação O

Sejam *g*, *h* funções reais (que expressam uma ordem de grandeza de um algoritmo) e *k* sendo uma constante, temos:

* `O(g + h) = O(g) + O(h)`
* `O(g . h) = O(g) . O(h)`
* `O(k + g) = k.O(g) = O(g)`, lembre-se, quando tratamos de ordem de grandeza, constantes somem...

### Como determinar a complexidade de procedimentos recursivos?

1. Determine o número total de chamadas do procedimento recursivo
2. Determine o número total se passos, sem a chamada recursiva
3. Complexidade total: numero de chamadas multiplicada pela complexidade de cada chamada.

## Notação teta

Determina que ambas as funções precisam ter ordem de grandezas iguais, sendo assim, quando afirmamos que `f = teta(g)`, sendo f e g funções reais de uma mesma variável n, então `f = O(g)` e `g = O(f)`. Exemplo:

* `f = n2 - 1` => `f = O(n2)`
* `g = n2`     => `g = O(n2)` => `g = O(f)` => `f = teta(g)`, pois ambas as funções g e f possuem a mesma complexidade

## Notação ômega

Pode-se dizer que a notação ômega é praticamente um inverso da notação O, pois ela busca **exprimir a os limites inferiores da equação**.

Exemplo:

* Tendo uma função `f = n2 - 1`, então `f = O(n2)`
* Assim, a mesma função `f = n2 - 1` será, `f = omega(1)`, pois aqui busca o limite inferior da função, que é a constante 1

## Lista Linear

Uma lista linear agrupa informações referentes a um conjunto de elementos que, de alguma forma, se relacionam entre si. Temos como exemplos:

* Notas de alunos de uma turma
* Lista de nomes de clientes de uma determinada empresa
* Lista de produtos de uma loja

Podemos executar as seguintes operacões:

* Busca de um elemento
* Insercão de um novo elemento
* Remocão de um elemento

### Classificacão de uma lista linear

Existe as seguintes formas de classificarmos uma lista linear:

1. Alocacão de memória
2. Modo como os elementos serao inseridos/removidos
3. Modo de indexacão dos elementos

#### Alocacão de memória

As **listas sequenciais** possuem os elementos em posicões contíguas de memória, ou seja, fisicamente, os elementos se posicionam um após o outro. Tal esquema físico compartilha do esquema lógico da lista, haja vista que logicamente, os elementos também estarão consecutivos um ao outro.

Já as **listas encadeadas** possuem os elementos em posicões dispersas de memória, sendo **ligados por ponteiros**. Neste modelo de alocacão, os elementos logicamente consecutivos não estarão consecutivos fisicamente.

#### Modo como os elementos serao inseridos/removidos

1. **Listas genéricas**: os elementos poderão ser inseridos e removidos em qualquer local da lista, **sem restricão**. Elas são mais difíceis de implementar, pois fica mais trabalhoso lidar com a não restricão nas operacões de insercão e remocão.
2. **Deques**: os elementos serão inseridos e removidos nas extremidades da lista
3. **Pilhas**: as insercões e remocão são permitidas apenas num dos lados da estrutura (esquerda ou direita), sempre da extremidade. O outro lado é conhecido como extremidade fixa (*fundo da pilha*).
4. **Filas**: as insercões são realizadas numa extremidade (*final da fila*), e a remocão na outra (*início da fila*).

#### Modo de indexacão dos elementos

Esse tipo de classificacão é exclusiva das listas sequenciais

* **Vetores**: listas sequencias em que eu **preciso de apenas um índice para acessar determinado elemento**. Usamos para notacão do acesso a um elemento a seguinte estrutura: `v[indice]`, sendo `v` o vetor, e `indice` um número maior que zero e menor que `n`, sendo `n` a quantidade de elementos num vetor.
* **Matrizes**: listas sequencias em que eu **preciso de dois índices para acessar determinado elemento**. Usamos para notacão do acesso a um elemento a seguinte estrutura: `v[i,j]`, sendo `i` a linha e `j` e a coluna.

### Buscas numa lista linear

#### Busca Linear

Possui complexidade no pior caso de `O(n)`, sendo `n` a quantidade de elementos na lista, sendo que isso pode acontecer em duas situacões:

* O elemento não existe na lista; ou
* O elemento existe na lista, mas como último elemento da mesma

Exemplo com JavaScript:

```js
function linearSearch(list = [], x = null) {
  let index = -1

  for (let i = 0; i < list.length; i++) {
    if (list[i] === x) {
      index = i
      break
    }
  }

  return index
}
```

#### Busca Linear Ordenada

**Objetivo**: economizar comparacões, pois poderemos saber se não há mais necessidade em realizar as comparacões na lista.

A complexidade de pior caso dessa funcão é a mesma da busca linear, porem, ela possui eficiência maior na complexidade média, devido ao pulo do gato em não precisar fazer comparacões na lista

Exemplo com JavaScript:

```js
function linearSearchOrdered(list = [], x = null) {
  let index = -1
  let i = 0

  while (list[i] < x) {
    i++
  }
  
  if (list[i] === x) {
    index = i
  }

  return index
}
```

### Manipulação de listas lineares

Sabemos que podemos realizar três operações básicas em listas: inserção, remoção e busca de um elemento. Nesta seção, tratamos das duas operações inicias.

#### Inserção

Ao inserirmos um elemento em nossa lista, precisamos tratar de ao menos duas questões:

1. Nossa lista terá alocação dinâmica ou não na memória? Isto é, ela terá tamanho fixo ou não?
2. A nossa lista poderá conter elementos repetidos?

Se formos considerar as seguintes respostas para as perguntas acima:

1. Terá tamanho fixo
2. Não pode conter elementos repetidos

Chegamos ao seguinte algoritmo (exemplo em JavaScript, ignorando a implementação interna do `Array`):

```js
function insert(list = [], maxElements = 0, element = null) {
  if (list.length < maxElements) {
    if (buscaElement(list, element) === -1) {
      list.push(element)
      return 'inserted'
    }

    return 'element already was in the list'
  }

  return 'overflow'
}
```

Qual a complexidade desse algoritmo? Pois bem, como precisamos saber se o elemento já existe na lista, precisamos realizar uma busca. Portanto, a complexidade desse algoritmo estará atrelado à complexidade do algoritmo de busca. Se for as buscas já apresentadas, seria de `O(n)`.

**Exercício**: suponha que a lista esteja ordenada, qual modificação eu precisaria realizar no algoritmo acima para que, ao inserir o elemento, este ocupe o seu devido lugar, mantendo a ordem anterior?

#### Remoção

Para a remoção, seguimos as seguintes premissas:

1. Precisamos saber que o elemento existe
2. Não podemos remover um elemento de uma lista vazia

Sendo assim, o algoritmo fica:

```js
function remove(list = [], element = null) {
  if (list.length === 0) {
    return 'underflow'
  }

  const index = buscaElement(list, element)

  if (index !== -1) {
    for (let i = index; i < list.length; i--) {
      list[i] = list[i + 1]
    }

    return 'removed'
  }

  return 'element is not in the list'
}
```

A complexidade do algoritmo, portanto, será a complexidade da busca, tal como no outro.

## Busca binária

* [Artigo do Khan Academy](https://pt.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search)
* [Artigo da equipe do IME](https://www.ime.usp.br/~pf/analise_de_algoritmos/aulas/binarysearch.html)

### Métodos de ordenação

* [Material da UTFPR sobre os diferentes métodos de ordenação](http://dainf.ct.utfpr.edu.br/~maurofonseca/lib/exe/fetch.php?media=cursos:if63c:if63ced_08_ordenacao.pdf)

A seguir, possivelmente os mais conhecidos:

#### Ordenação por Seleção (Selection Sort)

* [Artigo bem explicado no Medium](https://medium.com/@henriquebraga_18075/algoritmos-de-ordena%C3%A7%C3%A3o-ii-selection-sort-8ee4234deb10)
* [Artigo do Khan Academy sobre o assunto](https://pt.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/analysis-of-selection-sort)

#### Ordenação por Inserção (Insertion Sort)

* [Artigo explicando passo a passo o algoritmo](https://medium.com/@henriquebraga_18075/algoritmos-de-ordena%C3%A7%C3%A3o-iii-insertion-sort-bfade66c6bf1)

#### Ordenação por Seleção e Troca (Bubble Sort)

* [Artigo explicando passo a passo o funcionamento](https://medium.com/@henriquebraga_18075/algoritmos-de-ordena%C3%A7%C3%A3o-i-bubble-sort-c162a67261ef)

#### Ordenação por Inserção através de incrementos decrescentes (ShellSort)

* [Material do UFMG](https://homepages.dcc.ufmg.br/~cunha/teaching/20121/aeds2/shellsort.pdf)
* [Artigo e vídeo do Geek for Geeks](https://www.geeksforgeeks.org/shellsort/)

#### Ordenação por Particionamento (QuickSort)

* [Artigo do Khan Academy](https://pt.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/overview-of-quicksort)

#### Ordenação por Árvores (HeapSort)

* [Artigo da equipe do IME](https://www.ime.usp.br/~pf/algoritmos/aulas/hpsrt.html)
* [Artigo e vídeo do Geek for Geeks](https://www.geeksforgeeks.org/heap-sort/)

#### Ordenação por Divisão e Conquista (Merge sort)

* [Artigo do Khan Academy](https://pt.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/overview-of-merge-sort)

## Pilha

* [Implementação de pilhas no site do IME](https://www.ime.usp.br/~pf/algoritmos/aulas/pilha.html)
* [Explicação de uma Pilha dada pelo pessoal da UFRJ](https://www.cos.ufrj.br/~rfarias/cos121/pilhas.html)

## Fila

* [Artigo da Caelum](https://www.caelum.com.br/apostila-java-estrutura-dados/filas/)
* [Artigo do IME](https://www.ime.usp.br/~pf/algoritmos/aulas/fila.html)
* [Material da UFRJ](https://www.cos.ufrj.br/~rfarias/cos121/filas.html)
* [Artigo do Geek for Geeks](https://www.geeksforgeeks.org/queue-data-structure/)

## Deque

* [Material da USP](http://www.each.usp.br/digiampietri/ed/aula10.pdf)
* [Material da UFSC](http://www.inf.ufsc.br/~r.mello/ine5384/9-Deques.pdf)
