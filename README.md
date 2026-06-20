# Pipeline de Integração Contínua com GitHub Actions

#1. Descrição do Projeto
Este repositório apresenta a implementação de uma pipeline de **Integração Contínua (CI)** utilizando **GitHub Actions** para o projeto **ServicoDePagamento**.

A solução foi desenvolvida com o objetivo de automatizar a execução dos testes do sistema, permitindo que a aplicação seja validada em diferentes cenários de execução da pipeline, como disparo por push, execução manual e execução agendada.

#2. Objetivo da Atividade
Desenvolver uma pipeline de integração contínua contemplando os seguintes requisitos:

- Execução por **push**
- Execução **manual**
- Execução **agendada (schedule)**
- Geração de **relatório de testes**
- Armazenamento/publicação do relatório na pipeline
- Documentação completa no **README**

#3. Estrutura do Projeto

A organização do repositório está estruturada da seguinte forma:

```bash
.
├─ .github/
│  └─ workflows/
│     ├─ 01-push-exec.yml
│     ├─ 02-manual-exec.yml
│     └─ 03-schedule-exec.yml
├─ src/
├─ test/
├─ package.json
├─ package-lock.json
└─ README.md

#4. Tecnologias Utilizadas

As principais tecnologias e ferramentas utilizadas na solução foram:

. GitHub Actions — automação da pipeline de integração contínua
. Node.js — ambiente de execução da aplicação
. npm — gerenciamento de dependências
. Testes E2E — execução dos testes automatizados do projeto

#5. Workflows da Pipeline

Para atender aos requisitos da atividade, foram criados workflows separados para cada tipo de execução:

#5.1 Execução por Push
Executa automaticamente a pipeline sempre que alterações são enviadas para a branch principal do repositório.

#5.2 Execução Manual
Permite executar a pipeline manualmente pela aba Actions do GitHub.

#5.3 Execução Agendada
Executa a pipeline automaticamente em um horário programado.

#6. Funcionamento da Pipeline
Todos os workflows seguem uma lógica semelhante, composta pelas seguintes etapas:

#6.1 Checkout do código
A action actions/checkout@v4 é utilizada para clonar o conteúdo do repositório no ambiente de execução do GitHub Actions.

#6.2 Configuração do ambiente
A action actions/setup-node@v4 configura a versão do Node.js necessária para o projeto.

#6.3 Instalação das dependências
O comando npm install instala as dependências definidas no package.json.

#7. Execução dos Testes
Os testes automatizados são executados na pipeline

#8. Relatórios e Artefatos da Pipeline
Para atender ao requisito de armazenamento/publicação do relatório, o GitHub Actions pode armazenar relatórios de teste como artefatos.

Objetivo dos artefatos

Os artefatos permitem armazenar:

. relatórios de execução dos testes;
. evidências da pipeline;
. arquivos de saída gerados pelo processo de teste.

#9. Evidência de Execução da Pipeline

A evidência da execução pode ser consultada na aba Actions do GitHub.

Para a entrega do trabalho, devem ser apresentados:

. URL do repositório GitHub
. evidência de pelo menos uma execução bem-sucedida da pipeline
. evidência dos artefatos ou relatórios gerados

Exemplos de evidência:

. print da execução com status Success
. print da lista de workflows executados
. print do artefato gerado

#10. Conceitos Aplicados
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