# Pipeline de Integração Contínua com GitHub Actions

## Descrição do Projeto

Este projeto tem como objetivo demonstrar a implementação de uma **pipeline de Integração Contínua (CI)** utilizando **GitHub Actions** para automatizar a execução de testes de um sistema de **Serviço de Pagamento** desenvolvido em **Node.js**.

A solução contempla:
- execução automática por **push**;
- execução **manual**;
- execução **agendada**;
- execução de **testes automatizados**;
- geração de **relatório da execução**;
- armazenamento/publicação do relatório na pipeline.

---

## Objetivo

Desenvolver uma pipeline de integração contínua capaz de validar automaticamente o funcionamento da aplicação sempre que houver alterações no repositório, garantindo maior confiabilidade no processo de desenvolvimento.

A pipeline foi configurada para atender aos seguintes requisitos:

- **Execução por push**
- **Execução manual**
- **Execução agendada (`schedule`)**
- **Geração de relatório de testes**
- **Armazenamento/publicação do relatório na pipeline**
- **Documentação da solução e dos conceitos utilizados**

---

## Tecnologias Utilizadas

- **GitHub Actions** — automação da pipeline de integração contínua
- **Node.js** — ambiente de execução JavaScript
- **Mocha** — framework de testes automatizados
- **Node Assert** — biblioteca nativa para validação dos testes
- **GitHub Artifacts** — armazenamento do relatório gerado na execução

---

## Estrutura do Projeto

```bash
.
├── .github/
│   └── workflows/
│       └── ci-pipeline.yml
├── src/
│   └── ServicoDePagamento.js
├── test/
│   └── ServicoDePagamento.test.js
├── reports/
├── package.json
├── package-lock.json
└── README.md

Funcionalidade do Projeto

O sistema implementa um Serviço de Pagamento com funcionalidades para:

registrar pagamentos;
consultar o último pagamento realizado;
consultar todos os pagamentos;
filtrar pagamentos por categoria;
classificar pagamentos em categorias, como:
cara
padrão
Testes Automatizados

Os testes automatizados validam os principais comportamentos do serviço de pagamento, como:

registro de pagamento com categoria cara;
registro de pagamento com categoria padrão;
consulta de todos os pagamentos;
filtro de pagamentos por categoria;
retorno null quando não houver pagamentos registrados.

Exemplo de cenário testado:

pagamento da empresa Prime Video no valor de 150.00, classificado como cara;
pagamento da empresa Netflix no valor de 80.00, classificado como padrão.