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
# Workflows da Pipeline

Para atender aos requisitos da atividade, foram criados workflows separados para cada tipo de execução:

#Execução por Push
Executa automaticamente a pipeline sempre que alterações são enviadas para a branch principal do repositório.

#Execução Manual
Permite executar a pipeline manualmente pela aba Actions do GitHub.

#Execução Agendada
Executa a pipeline automaticamente em um horário programado.

# Funcionamento da Pipeline
Todos os workflows seguem uma lógica semelhante, composta pelas seguintes etapas:

# Checkout do código
A action actions/checkout@v4 é utilizada para clonar o conteúdo do repositório no ambiente de execução do GitHub Actions.

# Configuração do ambiente
A action actions/setup-node@v4 configura a versão do Node.js necessária para o projeto.

# Instalação das dependências
O comando npm install instala as dependências definidas no package.json.

# Execução dos Testes
Os testes automatizados são executados na pipeline

# Relatórios e Artefatos da Pipeline
Para atender ao requisito de armazenamento/publicação do relatório, o GitHub Actions pode armazenar relatórios de teste como artefatos.

Objetivo dos artefatos

Os artefatos permitem armazenar:

. relatórios de execução dos testes;
. evidências da pipeline;
. arquivos de saída gerados pelo processo de teste.

# Evidência de Execução da Pipeline

A evidência da execução pode ser consultada na aba Actions do GitHub.

Para a entrega do trabalho, devem ser apresentados:

. URL do repositório GitHub
. evidência de pelo menos uma execução bem-sucedida da pipeline
. evidência dos artefatos ou relatórios gerados

Exemplos de evidência:

. print da execução com status Success
. print da lista de workflows executados
. print do artefato gerado

# Conceitos Aplicados
Integração Contínua (CI)
Integração Contínua é a prática de automatizar a validação do software sempre que alterações são realizadas no repositório, permitindo identificar falhas de forma rápida e contínua.

Workflow
Workflow é o arquivo de configuração do GitHub Actions que define quando e como a pipeline será executada.

Job
Um job representa um conjunto de etapas executadas em uma máquina virtual.

Step
Cada step é uma ação específica dentro do workflow, como instalar dependências ou rodar testes.

Trigger

Trigger é o evento que dispara a execução da pipeline, como:
. push
. workflow_dispatch
. schedule
. Artifact

Artifact é um arquivo gerado durante a execução da pipeline e armazenado para consulta posterior.