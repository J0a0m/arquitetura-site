# O Livro dos Dragões

Projeto desenvolvido em React + Vite como parte da atividade de desenvolvimento web.

O projeto consiste em um site inspirado na estrutura do protótipo disponibilizado no Figma, adaptado para o tema O Livro dos Dragões, apresentando informações e registros de diferentes espécies de dragões.

## Integrantes

- Arthur 3B
- João 3B
- Joaquim 3B

## Tema

### O Livro dos Dragões

O site funciona como um catálogo digital de espécies de dragões, reunindo informações sobre suas características, habilidades, comportamentos e registros conhecidos.

A estrutura visual foi baseada no protótipo apresentado na atividade, mantendo a organização das páginas e adaptando os textos e imagens para o tema escolhido.

## Tecnologias utilizadas

- React
- Vite
- React Router
- JavaScript
- HTML
- CSS

## Estrutura das páginas

O projeto possui as seguintes rotas:

### `/`

Página inicial do Livro dos Dragões, contendo:

- Apresentação do projeto
- Introdução ao Livro dos Dragões
- Dragões catalogados
- Chamada para envio de novos registros

### `/projetos`

Página com o catálogo de dragões registrados.

Cada dragão apresenta:

- Imagem
- Nome
- Número do registro
- Descrição
- Acesso para sua ficha completa

### `/projetos/:id`

Página de detalhes de cada dragão.

A página apresenta:

- Nome da espécie
- Classe
- Local do registro
- Imagens
- Descrição detalhada
- Informações sobre a espécie

### `/sobre`

Página com informações sobre o Livro dos Dragões e seu objetivo.

### `/contato`

Página para envio de novos registros de dragões.

O formulário possui campos para:

- Nome
- E-mail
- Registro do dragão

## Componentes reutilizáveis

O projeto utiliza componentes para evitar repetição de código, principalmente:

- `Header.jsx`
- `Footer.jsx`

As páginas ficam organizadas na pasta `src/pages`.