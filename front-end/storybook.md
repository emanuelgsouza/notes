# Storybook

* [Documentação Oficial](https://storybook.js.org/)
* [Learn Storybook Tutorials](https://www.learnstorybook.com/)

Segundo a documentação oficial, o Storybook é uma ferramenta open source para criação de componentes isolados de uma aplicação. Ou seja, com ele você poderá criar, por exemplo, um input e testar visualmente ele sempre precisar instanciar uma aplicação para usá-lo.

Alguns conceitos simples:

## Story

Um `story` é um estado do componente. Imagine que você tenha um input, quais estados ele poderia ter?

- Sem estado: sua forma "normal"
- Validado e com erros: sua forma em que mostra alguma mensagem de erro para o usuário
- Validado e sem erros: sua forma em que mostra alguma informação de sucesso

Cada um desses estados será uma `story`.

## Visual Testing

Com a Storybook, é possível realizar testes de regressão. Cada story é um estado de um componente que pode ser salvo para posterior verificação. Isto permite que, caso haja alguma mudança no visual do componente, podemos verificar isso.

A equipe da Storybook possui um produto no mercado, o [Chromatic](https://www.chromatic.com/)

## Design System

Storybook ajuda na criação de um design system ao facilitar os seguintes aspectos da criação de um design system:

* Você pode criar os componentes separadamente, criando diferentes visualizações que ele poderá ter
* Como um design system se preocupa com a criação de componentes de apresentação, sem regras de negócio, fica ainda mais fácil incorporar o Storybook
* Com seus [inúmeros addons](https://storybook.js.org/docs/addons/introduction/), é possível dar a apresentação dos seus componentes, alguns comportamentos interessantes, tais como permitir [testes de acessibilidade](https://github.com/storybookjs/storybook/tree/master/addons/a11y), permitir a [interação com os componentes](https://github.com/storybookjs/storybook/tree/master/addons/knobs), [gerar documentação](https://github.com/storybookjs/storybook/tree/master/addons/docs) entre outros.
* Gerar testes visuais

## Aprendizados pessoais e links úteis

Storybook força a você a desenvolver componentes mais reutilizáveis e consequentemente, manuteníveis. É muito comum trabalhar com o conceito de [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0), em que você é desafiado a desenvolver seus componentes de maneira a criar uma interface mais correta para eles.

Um outro ponto é que Storybook também o força a usar uma abordagem de desenvolvimento de interfaces chamado [Component-Driven Development](https://blog.hichroma.com/component-driven-development-ce1109d56c8e), em que você vai escrevendo sua interface a partir de pequenos componentes, os compondo até que sua tela esteja toda pronta.

## Links úteis

* [Tokens in Design Systems por Nathan Curtis](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421)
* [Interface inventory por Brad Frost](https://bradfrost.com/blog/post/interface-inventory/)
* [The Delightful Storybook Workflow por Dominic Nguyen](https://blog.hichroma.com/the-delightful-storybook-workflow-b322b76fd07)
* [Component-Driven Development](https://blog.hichroma.com/component-driven-development-ce1109d56c8e)
