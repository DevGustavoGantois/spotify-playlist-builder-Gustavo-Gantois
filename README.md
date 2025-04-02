# Spotify Playlist Builder

Bem-vindo ao desafio front-end da **GP Engenharia e Consultoria**! Neste desafio, você construirá uma aplicação que utiliza a API do **Spotify** para buscar músicas, criar playlists personalizadas e gerenciá-las usando **Next.js**.

## 🎯 Objetivo
Desenvolver uma aplicação web que:
- ✅ Busque músicas por gênero e outros filtros usando a **API do Spotify**
- ✅ Permita criar e gerenciar **playlists**
- ✅ Adicione e remova **músicas da playlist**
- ✅ Tenha um **design responsivo e intuitivo**

---

## 📌 Requisitos Técnicos

### **Obrigatórios**
- ✅ **Next.js** (versão 13 ou superior) ou **React.js**
- ✅ **Spotify Web API** (autenticação via OAuth)
- ✅ **Gerenciamento de estado** (Context API, Zustand ou Redux Toolkit)
- ✅ **Estilização** com CSS Modules, Styled Components ou TailwindCSS
- ✅ **Hospedagem** no Netlify (deploy contínuo)
- ✅ **Roteamento** com Next.js Router

### **Desejáveis (Bônus)**
- 🧪 **Testes unitários e de integração** (Jest, React Testing Library)
- 📂 **Rotas dinâmicas** (ex: página dedicada para cada playlist)
- 🎤 **Busca avançada** (por artista, nome da música e álbum)
- 🎶 **Player de prévia das músicas** (embed do Spotify)
- ✨ **Dark/Light Mode** (tema alternativo)
- 📊 **Estatísticas da playlist** (duração total, popularidade média)

---

## 🚀 Funcionalidades Principais

### **1. Autenticação com Spotify**
- Implementar **fluxo OAuth 2.0**
- Gerenciar **token de acesso e refresh token**
- Referência: [Spotify Authorization Guide](https://developer.spotify.com/documentation/general/guides/authorization-guide/)

### **2. Sistema de Busca**
- Busca por **gênero** via endpoint `/recommendations`
- Busca avançada (**bônus**) via `/search` (artistas, músicas, álbuns)

### **3. Gerenciamento de Playlists**
- Criar **playlists locais**
- Adicionar/remover músicas
- Salvar playlists no perfil do Spotify (**se autenticado**)
- Editar detalhes da playlist (**bônus**)

### **4. Interface do Usuário**
- Layout moderno com referências do **Dribbble**
- Ilustrações do **unDraw**
- **Totalmente responsivo**
- **Feedback visual** para ações do usuário

---

## ✨ Sugestões de Melhorias (Bônus)
- 🔹 **Sistema de favoritos** para músicas
- 🔹 **Compartilhamento de playlists** via URL
- 🔹 **Sincronização entre abas** usando localStorage
- 🔹 **Paginação** para resultados de busca
- 🔹 **Animações** com Framer Motion

---

## 📌 Regras de Entrega

### **1. Repositório no GitHub**
- Faça um **fork** deste repositório para sua conta pessoal
- Mantenha o repositório **público** durante o desenvolvimento
- Nome do repositório: `spotify-playlist-builder-[seu-nome]`

### **2. Padrão de Commits**
- Use **commits atômicos** (1 feature por commit)
- Formato: `tipo: descrição` (ex: `feat: autenticação com Spotify`)
- Tipos válidos: `feat`, `fix`, `style`, `refactor`, `docs`, `test`

### **3. Organização do Código**
- Mantenha uma **estrutura de pastas clara**
- **Documente** componentes complexos
- Siga boas práticas de **clean code**

### **4. Prazo de Entrega**
- **7 dias corridos** a partir do recebimento
- **Entregas tardias serão desconsideradas**

### **5. Itens Obrigatórios para Entrega**
- ✅ Link do **repositório GitHub** (com histórico de commits)
- ✅ URL do **deploy no Netlify**
- ✅ README completo com:
  - 📌 **Instruções de instalação**
  - 📌 **Dependências utilizadas**
  - 📌 **Dificuldades encontradas**

### **6. Critérios de Avaliação**
- ✅ **Funcionalidades implementadas**
- ✅ **Qualidade do código**
- ✅ **Organização dos commits**
- ✅ **UI/UX e responsividade**
- ✅ **Documentação**

### **7. Dicas Extras**
- ✅ **Priorize as funcionalidades obrigatórias**
- ✅ **Teste em diferentes dispositivos**
- ✅ **Mantenha o design consistente**
- ✅ **Trate possíveis erros da API**

⚠️ **Atenção**: Plágio ou cópia de outros projetos resultará em **desqualificação imediata**.

---

## 📎 Links Úteis
- 🎵 [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
- 🎨 [Inspiração UI - Dribbble](https://dribbble.com/)
- 🚀 [Netlify Docs](https://docs.netlify.com/)
- 🖼️ [unDraw Illustrations](https://undraw.co/)

Boa sorte! 🚀 Use sua criatividade e divirta-se desenvolvendo! 🎧

