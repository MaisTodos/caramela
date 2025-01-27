# Caramela

Este projeto é destinado as automações de teste Front-end E2E funcional da Plataforma MaisTodos

### Ferramentas Utilizadas

- Cypress
- JavaScript

### Para que serve este repo?

- Documentar / Automatizar todas as features
- Version 1.0
- [Framework de atuação => Cypress](https://www.cypress.io/)

### Executando o projeto

Instalando todas as dependêcias:

- npm init

- npm install cypress --save-dev

Adicionando dados de login localmente:

- crie uma pasta "cypress.env.json" em seu projeto local, e adicione dados de login no formato abaixo

{
    "email": "exemplo@gmail.com",
    "senha": "exemplo123"
}

Rodando os testes:

- npx cypress open: - Esse comando abre o cypress para execuções manuais

    ou

- npx cypress run: - Esse comando roda os testes de forma headless


### Arquitetura do Projeto :gear:

e2e:

- Nesta pasta contém todos os arquivos de teste

fixtures:

- Nesta pasta contém todos os dados Json de login.

pages:

- Nesta pasta temos todos os fuxos dividos em dois tipos de arquivos:

- Elements: - Os Elementos são destinada a conter todos o arquivo de mapeamento de elementos.

- PageObjects: - Os PageObjects concentram toda a lógica e interação com a aplicação.



### Configuração da máquina

- Java Script
- NodeJs
- VsCode
- Plugins:

### Created by

- Pedro Barreto