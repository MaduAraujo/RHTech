# RHTech

## Sumário

- [Visão Geral](#visão-geral)
- [Metodologia](#metodologia)
  - [1. Modelo de Desenvolvimento: Cascata](#1-modelo-de-desenvolvimento-cascata)
  - [2. Modelagem: Diagrama de Caso de Uso](#2-modelagem-diagrama-de-caso-de-uso)
  - [3. Estrutura: Diagrama de Classes](#3-estrutura-diagrama-de-classes)
  - [4. Arquitetura: Cliente-Servidor](#4-arquitetura-cliente-servidor)
  - [5. Requisitos Funcionais](#5-requisitos-funcionais)
  - [6. Requisitos Não Funcionais](#6-requisitos-não-funcionais)
- [Banco de Dados](#banco-de-dados)
- [Aplicação Mobile](#aplicação-mobile)
- [Principais Funcionalidades do App](#principais-funcionalidades-do-app)
  - [1. Arquivos](#1-arquivos)
  - [2. Processo de Admissão](#2-processo-de-admissão)
    - [2.1. Checklist Documental](#21-checklist-documental)
  - [3. Processo de Demissão](#3-processo-de-demissão)
    - [3.1. Checklist Documental](#31-checklist-documental)
  - [4. Dashboard](#4-dashboard)
  - [5. Configurações](#5-configurações)
    - [5.1. Opções de Alternância](#51-opções-de-alternância)
    - [5.2. Opções de Navegação](#52-opções-de-navegação)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Executando o Projeto](#executando-o-projeto)
  
## Visão Geral

RHTech é uma aplicação projetada para otimizar o ciclo de vida documental dentro do setor de Recursos Humanos (RH), focando nos processos de Admissão e Demissão.<br>

O objetivo é eliminar a dependência das planilhas digitais e o risco da papelada manual. A RHTech fornece uma plataforma centralizada e intuitiva que garante que todos os 
documentos sejam coletados e a conformidade legal seja mantida, permitindo que o time de RH gaste menos tempo com burocracia e mais tempo com estratégia.

## Metodologia

O desenvolvimento do projeto foi estruturado com base nos seguintes modelos, diagramas e requisitos (funcionais e não funcionais) para garantir clareza, organização e controle.

### 1. Modelo de Desenvolvimento: Cascata

Esta escolha se justifica por ser um projeto com requisitos claros e etapas bem definidas.

**Vantagens neste contexto:**

  * Permite uma sequência lógica e linear, desde o levantamento de requisitos até a manutenção quando finalizado.
  * Facilita o controle do progresso de desenvolvimento.
 
<div align="center">
  <img src="https://github.com/user-attachments/assets/582131ee-b575-4059-9095-afd314c29a8c" width="70%" alt="Modelo Cascata">
</div>

### 2. Modelagem: Diagrama de Caso de Uso

Este diagrama foi fundamental para:

  * Representar visualmente as funcionalidades do sistema.
  * Mapear a interação dos usuários (atores) com a aplicação.
  * Identificar os serviços oferecidos pelo sistema.
  * Validar o entendimento dos requisitos funcionais e planejar o desenvolvimento.

<div align="center">
  <img src="https://github.com/user-attachments/assets/69a2f5d5-2084-49b0-adc9-c48a6e2350ce" width="70%" alt="Diagrama de Caso de Uso">
</div>

### 3. Estrutura: Diagrama de Classes

O **Diagrama de Classes** foi utilizado para representar a estrutura estática do sistema. Ele detalha:

  * As classes que compõem o sistema, com seus respectivos atributos e métodos.
  * Os relacionamentos e interações entre as classes.
  * A organização lógica da aplicação, servindo como um "mapa" para o desenvolvimento e facilitando a manutenção futura do código.

<div align="center">
  <img src="https://github.com/user-attachments/assets/07985a94-955d-42e5-ae1c-595961595fcd" width="70%" alt="Diagrama de Classes">
</div>

### 4. Arquitetura: Cliente-Servidor

O sistema foi estruturado na arquitetura **Cliente-Servidor**. Neste modelo, o *cliente* (interface do usuário) realiza solicitações, e o *servidor* responde com os dados ou serviços necessários.

**Benefícios desta arquitetura:**

  * **Organização:** Separação clara de responsabilidades (front-end e back-end).
  * **Manutenção:** Facilita a atualização e correção de bugs em partes isoladas.
  * **Escalabilidade:** Permite que o sistema cresça conforme a demanda aumenta.
  * **Segurança:** Centraliza o gerenciamento e a proteção dos dados no servidor.

<div align="center">
  <img src="https://github.com/user-attachments/assets/76055951-615a-4c5f-b421-0ddd52b9a5ca" width="50%" alt="Arquitetura Cliente-Servidor">
</div>

### 5. Requisitos Funcionais

Trata-se das especificações de o que o sistema deve fazer. 

- Fazer Login
- Gerenciar Cadastros
- Visualizar Funcionários
- Adicionar Funcionários
- Desativar Funcionários
- Atualizar Cadastro Funcionários
- Registrar Documentação
- Gerenciar Documentação
- Visualizar Status de Documentações
- Gerar Relatórios
- Gerar Relatórios de Demissões
- Gerar Relatórios de Admissões
- Obter Todos os Relatórios
- Obter Status de Concluído
- Obter Status de Pendência

### 6. Requisitos Não Funcionais

Trata-se das qualidades e restrições técnicas que o sistema deve cumprir.

- Usabilidade: Interface simples e intuitiva, adequada ao uso por equipes de RH.
- Segurança: Acesso restrito apenas a usuários autenticados.
- Disponibilidade: O sistema deve estar acessível de forma contínua, sem interrupções frequentes.
- Desempenho: Consultas e geração de relatórios devem ocorrer com tempo de resposta rápido.
- Confiabilidade: O sistema deve garantir consistência dos dados e evitar duplicações.
- Escalabilidade: O sistema deve suportar o aumento no número de funcionários e documentos sem perda de desempenho.
- Compatibilidade: O sistema deve funcionar em dispositivos IOS e Android.
- Auditabilidade: Permitir rastreabilidade das ações (ex: quem cadastrou, alterou ou removeu dados).

## Banco de Dados

O projeto utiliza um banco de dados relacional, implementado em **SQL**. O modelo lógico foi desenhado para garantir a integridade e a consistência dos dados, estruturando as entidades e seus relacionamentos.

<div align="center">
  <img src="https://github.com/user-attachments/assets/2693994a-d760-47f0-98be-b09b147183c1" width="80%" alt="Modelo Lógico">
</div>

## Aplicação Mobile

A interface foi projetada com foco na experiência (UX) da equipe de Recursos Humanos, priorizando a facilidade de uso e a eficiência nas tarefas do dia a dia. O layout responsivo 
permite acesso rápido às funcionalidades em dispositivos móveis, garantindo uma navegação fluida.<br>

Temos um painel que permite a interação do usuário com os principais módulos do sistema. Podemos visualizar abaixo algumas das telas do aplicativo, onde temos o painel de controle com 
as principais funcionalidades do aplicativo: Arquivos, Admissão, Demissão, Dashboard, Configuração e Colaboradores. O Painel de Admissões onde podemos acompanhar o andamento das contratações 
e o painel de Colaboradores, que nos retorna os colaboradores ativos ou inativos da empresa e suas informações.

<div align="center">
  <img src="https://github.com/user-attachments/assets/33e283eb-e133-4d21-807c-77217ef51652" width="60%" alt="Interface">
</div>

## Principais Funcionalidades do App

### 1. Arquivos

Visão geral de todos os documentos que o setor tem armazenado.

### 2. Processo de Admissão
Ao acionar o botão **"+" (Nova Admissão)**, o usuário deve preencher os dados básicos do novo colaborador:

* **Nome Completo**
* **CPF**
* **Data de Nascimento**
* **Cargo**
* **Departamento**
* **Data de Admissão Prevista**

### 2.1. Checklist Documental
Após salvar os dados básicos, o sistema gera automaticamente um *checklist* de documentos necessários para a admissão. Cada item do *checklist* possui os seguintes campos de controle:

| Campo | Descrição | Status Padrão/Ação |
| :--- | :--- | :--- |
| **Documento** | Nome do documento (Ex: RG, CPF, Carteira de Trabalho, etc.). | N/A |
| **Status** | Indica a situação atual do documento. | **Pendente** |
| **Data de Recebimento** | Data em que o documento foi validado. | Preenchido automaticamente ao mudar o Status para **OK**. |
| **Observações** | Campo para adicionar notas e comentários. | Livre |
| **Anexar Arquivo** | Botão para fazer *upload* de documentos. | Permite a adição de arquivos (Ex: PDF, JPG). |

> **Controle de Status:**
> * **Pendente:** Status inicial.
> * **OK:** O documento foi recebido, verificado e anexado.

---

### 3. Processo de Demissão

Similar ao processo de admissão, esta funcionalidade gerencia o desligamento do colaborador.<br>
Ao acionar o botão **"+" (Nova Demissão)**, o usuário deve preencher os dados básicos do ex colaborador:

* **Data de Demissão**
* **Tipo de Demissão** (Ex: Voluntária, Involuntária, Justa Causa)
* **Motivo** (Descrição detalhada, se necessário)

### 3.1. Checklist Documental
Após salvar os dados básicos, o sistema gera automaticamente um *checklist* de documentos necessários para o desligamento. Cada item do *checklist* possui os seguintes campos de controle:

| Campo | Descrição | Status Padrão/Ação |
| :--- | :--- | :--- |
| **Documento/Ação** | Item do *checklist* (Ex: Termo de Rescisão, Baixa na CTPS, Exame Demissional, etc.). | N/A |
| **Status** | Indica a situação atual do documento. | **Pendente** |
| **Data de Conclusão** | Data em que o documento foi finalizado. | Preenchimento automático ao mudar o Status para **OK**. |
| **Observações** | Campo para adicionar notas e comentários. | Livre |
| **Anexar Arquivo** | Botão para fazer *upload* de documentos. | Permite a adição de arquivos (Ex: PDF, JPG). |

> **Controle de Status:**
> * **Pendente:** Status inicial.
> * **OK:** O documento foi recebido, verificado e anexado.

---

### 4. Dashboard

O Dashboard serve como uma tela de resumo, oferecendo uma visão imediata dos processos em andamento e dos pontos de atenção.

| Indicador | Exemplo | Objetivo |
| :--- | :--- | :--- |
| **Admissões Recentes** | 3 novas admissões na última semana. | Acompanhar o volume de novas contratações. |
| **Admissões Pendentes** | 2 admissões com documentos pendentes. | Identificar gargalos e processos parados. |
| **Demissões em Andamento** | 1 processo de demissão em aberto. | Monitorar o fluxo de desligamentos. |
| **Alertas** | Documentos de João Silva (Admissão) pendentes há mais de 5 dias. | Notificações proativas. |

---

### 5. Configurações

A tela de configurações permite ao usuário personalizar a experiência de uso do aplicativo.

### 5.1. Opções de Alternância
Funcionalidades que podem ser ativadas ou desativadas com um interruptor (liga/desliga):

* **Notificações:** Para ativar ou desativar o recebimento de alertas do sistema.
* **Modo Escuro:** Para alterar o tema da interface de usuário.
* **Login com Impressão Digital:** Para habilitar a autenticação biométrica (se o dispositivo suportar).

### 5.2. Opções de Navegação
Botões que levam o usuário para telas secundárias ou informações adicionais:

* **Mudar Senha:** Navega para a tela de atualização das credenciais de acesso.
* **Termos de Serviço:** Navega para a tela com o documento de termos legais da aplicação.
* **Sobre o Aplicativo:** Navega para a tela de informações de versão.
* **Sair do Aplicativo:** Botão para encerrar a sessão do usuário.

## Tecnologias Utilizadas

- **React-Native**
- **JavaScript**
- **Expo (Snack e Go)**

OBS: A adoção do React Native representa uma escolha estratégica, pois permite o desenvolvimento multiplataforma com uma única base de código. Isso reduz significativamente o tempo de produção e manutenção, além de garantir consistência visual e funcional entre os sistemas operacionais Android e iOS. Essa abordagem também favorece a escalabilidade do projeto e a integração com bibliotecas 
modernas melhorando a experiência do usuário.

## Executando o Projeto

**1. Executando no Expo Snack**

**Pré Requisito:**
* O aplicativo **Expo Go** deve estar instalado no seu dispositivo móvel.

**Instruções:**

1. **Acesso o link no seu navegador:**
```
https://snack.expo.dev/@eduarda.araujo/rhtech
```
2. Selecione a opção My Device (Meu Dispositivo)

3. Use o aplicativo Expo Go para escanear o QRCode exibido. O aplicativo será carregado automaticamente.

**2. Executando Localmente**

**Pré Requisito:**
* **Node.js**
* **Expo Go**

**Instruções:**

1. **Clone o repositório:**
   ```bash
   $ git clone https://github.com/MaduAraujo/RHTech.git

2. **Navegue até o diretório do projeto:**
   ```bash
   cd RHTech

3. **Instale as dependências:**
   ```bash
   npm install

4. **Inicie o aplicativo:**
   ```bash
   npx expo start

5. Teste no dispositivo móvel
- Use o **Expo Go** para escanear o QRCode e testar o aplicativo em seu dispositivo móvel.
