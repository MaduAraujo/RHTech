# RHTech

## Sumário

- [Visão Geral](#visão-geral)
- [Layout](#layout)
- [Principais Funcionalidades](#principais-funcionalidades)
  - [1. Arquivos](#1-arquivos)
  - [2. Processo de Admissão](#2-processo-de-admissão)
    - [2.1. Checklist Documental](#21-checklist-documental)
  - [3. Processo de Demissão](#3-processo-de-demissão)
    - [3.1. Dados da Rescisão](#31-dados-da-rescisão)
    - [3.2. Checklist de Demissão](#32-checklist-de-demissão)
  - [4. Dashboard](#4-dashboard)
  - [5. Configurações](#5-configurações)
    - [5.1. Opções de Alternância](#51-opções-de-alternância)
    - [5.2. Opções de Navegação](#52-opções-de-navegação)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Linguagem de Programação Utilizada](#linguagem-de-programação-utilizada)
- [Executando Localmente](#executando-localmente)
  
## Visão Geral

RHTech é uma aplicação projetada para otimizar o ciclo de vida documental dentro do setor de Recursos Humanos (RH), focando nos processos de Admissão e Demissão.<br>

Nosso objetivo é eliminar a dependência das planilhas digitais e o risco da papelada manual. A RHTech fornece uma plataforma centralizada e intuitiva que garante que todos os 
documentos sejam coletados e a conformidade legal seja mantida, permitindo que o time de RH gaste menos tempo com burocracia e mais tempo com estratégia.

## Layout

<div align="center">
  <img src="https://github.com/user-attachments/assets/e9f56d49-7d95-4ef5-99a2-e9580005f22b" width="20%" alt="Descrição da Imagem 01">
  <img src="https://github.com/user-attachments/assets/1a2c05f0-adf5-4c15-93a4-1cc227810fca" width="20%" alt="Descrição da Imagem 02">
  <img src="https://github.com/user-attachments/assets/918287e9-ea2f-44ff-bf53-93f4ed771f94" width="20%" alt="Descrição da Imagem 03">
</div>

## Principais Funcionalidades

### 1. Arquivos

Visão geral de todos os documento que o setor tem armazenado.

### 2. Processo de Admissão
Ao acionar o botão **"+" (Nova Admissão)**, o usuário deve preencher os dados básicos do novo colaborador:

* **Nome Completo**
* **CPF**
* **Data de Nascimento**
* **Cargo**
* **Departamento**
* **Data de Admissão Prevista**

#### 2.1. Checklist Documental
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

Similar ao processo de admissão, esta funcionalidade gerencia o desligamento do colaborador, focando em ações e documentos essenciais para a conformidade legal da rescisão contratual.

#### 3.1. Dados da Rescisão

* **Data de Demissão**
* **Tipo de Demissão** (Ex: Voluntária, Involuntária, Justa Causa)
* **Motivo** (Descrição detalhada, se necessário)

#### 3.2. Checklist de Demissão
O sistema gera um *checklist* focado nas ações e documentos de encerramento.

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

#### 5.1. Opções de Alternância
Funcionalidades que podem ser ativadas ou desativadas com um interruptor (liga/desliga):

* **Notificações:** Para ativar ou desativar o recebimento de alertas do sistema.
* **Modo Escuro:** Para alterar o tema da interface de usuário.
* **Login com Impressão Digital:** Para habilitar a autenticação biométrica (se o dispositivo suportar).

#### 5.2. Opções de Navegação
Botões que levam o usuário para telas secundárias ou informações adicionais:

* **Mudar Senha:** Navega para a tela de atualização das credenciais de acesso.
* **Termos de Serviço:** Navega para a tela com o documento de termos legais da aplicação.
* **Sobre o Aplicativo:** Navega para a tela de informações de versão.
* **Sair do Aplicativo:** Botão para encerrar a sessão do usuário.

## Tecnologias Utilizadas

- **React-Native:** Para o desenvolvimento do aplicativo.
- **Expo Snack:** Para prototipagem rápida.
- **Expo Go:** Para realizar os testes em dispositivos móveis.

## Linguagem de Programação Utilizada

- JavaScript

## Executando Localmente

- Requisito: **Node.js**

---

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
- Use o **Expo Go** para escanear o QR code e testar o aplicativo em seu dispositivo móvel.
