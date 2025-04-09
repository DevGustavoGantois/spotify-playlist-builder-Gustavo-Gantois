# 🎧 Spotify Builder - Plataforma de integração com a API do Spotify

Este projeto foi desenvolvido como parte de um desafio técnico para a **GP Engenharia**, com o objetivo de criar uma plataforma moderna e funcional integrada à **API do Spotify**. A aplicação permite autenticação de usuários via Spotify, acesso a playlists privadas, leitura de dados de reprodução e uma interface inspirada na original do Spotify.

## Processo de instalação 

- create-next-app@13.3 spotify-builder
-

---

## 🚀 Tecnologias Utilizadas

- **Next.js 13.3**
- **React**
- **TypeScript**
- **NextAuth.js** (OAuth com Spotify)
- **CSS Modules** (Estilização)
- **Lucide-react** (Ícones SVG)
- **React-icons**
- **Spotify Web API**

---

## 🌐 Funcionalidades Implementadas

### ✅ Autenticação com Spotify (OAuth 2.0)
- Integração completa com o **NextAuth.js**.
- Permissões solicitadas via `scope`:
  - `user-read-email`
  - `playlist-read-private`
  - `playlist-read-collaborative`
  - `user-read-currently-playing`
  - `user-modify-playback-state`

### ✅ Login via Spotify
- Página de login customizada acessível em `/home`.
- Redirecionamento automático após login, com persistência dos tokens de autenticação.

### ✅ Gestão de Sessão com Tokens
- Armazenamento e uso dos `accessToken` e `refreshToken` no JWT.
- Implementação da lógica de **refresh automático do token** ao expirar, garantindo uma experiência contínua.

### ✅ Leitura e Gerenciamento de Playlists
- Leitura de playlists privadas e colaborativas do usuário autenticado.
- Implementação de funcionalidades para **deletar** e **remover bibliotecas** com base nas playlists selecionadas.

### ✅ Reprodução Atual
- Consumo do endpoint `user-read-currently-playing` para capturar a faixa atual em reprodução.
- *Nota:* apesar do endpoint ter sido corretamente consumido, **não consegui finalizar a funcionalidade de reproduzir a faixa diretamente**, devido à complexidade de permissões e integração de controle de playback — ponto identificado para evolução futura.

### ✅ Interface Inspirada no Spotify
- Interface visualmente semelhante à do Spotify, adaptada de forma responsiva e funcional.
- Devido ao curto prazo para desenvolvimento e à quantidade de funcionalidades, optei por focar em uma interface com **aproximadamente 90% de similaridade**, priorizando usabilidade e lógica de funcionamento.

---

## 🎨 Estilização e Responsividade

- A interface foi desenvolvida com **CSS Modules**, sem o uso de frameworks utilitários como Tailwind.
- Enfrentei alguns desafios na construção do layout responsivo, especialmente por estar há um tempo sem utilizar CSS puro, o que demandou mais atenção e testes durante o desenvolvimento.
- Ícones modernos foram utilizados com **Lucide-react** e **React-icons**, reforçando a estética visual semelhante ao Spotify.

---

## 🧠 Dificuldades Enfrentadas com NextAuth

Este foi meu **primeiro projeto utilizando o NextAuth.js** em conjunto com o OAuth do Spotify. A seguir, listo os principais desafios enfrentados — e como foram superados:

### 🔐 1. URI de Redirecionamento Inválida
- Um dos erros mais frequentes foi o `INVALID_CLIENT: Invalid redirect URI`.
- Para resolvê-lo, foi necessário registrar corretamente as URIs de callback no [Spotify Developer Dashboard], tanto para o ambiente local quanto para produção:

## ⚠️ Desafios com a Versão do Next.js

Por estar habituado a trabalhar com o **Next.js 14 ou superior**, inicialmente enfrentei dificuldades ao adaptar o projeto para a **versão 13.3**, especialmente por conta da estrutura baseada em `pages/` ao invés do novo sistema `app/` (App Router), com o qual já estava mais familiarizado.

### 🧩 Desafios Técnicos Enfrentados:
- Reaprender a estrutura tradicional do Next.js com roteamento via `pages/`.
- Ajustar minha lógica mental e técnica para lidar com o padrão antigo de rotas e organização de arquivos.
- Tive que reiniciar o repositório **três vezes** durante o desenvolvimento, buscando compreender corretamente a **configuração do NextAuth.js** para compatibilidade com o Next 13.3.
- Encontrei dificuldades ao tentar aplicar padrões recentes (Next.js 15.2 + NextAuth) baseando-me na documentação mais atualizada, que difere significativamente da estrutura e métodos usados na versão 13.3.

> 📚 **Resumo:** O processo exigiu paciência, estudo e resiliência. Apesar dos desafios, consegui absorver bastante conhecimento sobre versões anteriores do Next.js e me adaptar à estrutura proposta no desafio com sucesso.


## 🌍 Código e Commits em Inglês

Optei por escrever **todo o código, nomes de variáveis, funções, componentes e mensagens de commit em inglês**, pois acredito que o inglês é a **língua universal da programação** e da tecnologia. Essa prática segue padrões adotados por empresas no mundo todo e facilita a **colaboração em projetos open source, trabalho em equipe global e futuras oportunidades profissionais**.

### ✅ Benefícios de adotar o inglês no código:
- Facilita o entendimento por desenvolvedores de qualquer lugar do mundo.
- Segue boas práticas adotadas em projetos profissionais e colaborativos.
- Aumenta a qualidade e padronização do código.
- Melhora a documentação e a comunicação técnica.

### 💡 Exemplos:

#### Nomes de variáveis:
```tsx
// Em vez de:
const usuarioAutenticado = true;

// Escrito como:
const isUserAuthenticated = true;

# Em vez de:
git commit -m "corrige bug ao carregar playlists"

# Escrito como:
git commit -m "fix: resolve bug when loading playlists"

// Em vez de:
function buscarPlaylistsPrivadas() {}

// Escrito como:
function fetchPrivatePlaylists() {}

```env
http://localhost:3000/api/auth/callback/spotify
https://spotify-builder-gustavo-gantois-gp-engenharia.vercel.app/api/auth/callback/spotify

src/
├── pages/
│   ├── home.tsx                    # Página de login
│   └── index.tsx                   # Página principal pós login
├── components/
│   ├── c-artist.tsx                # Componente de artistas
│   ├── c-search-results.tsx        # Resultados de busca
├── lib/
│   └── spotify.ts                  # Integração com Spotify Web API
├── styles/
│   └── global.module.css           # Estilos com CSS Modules
└── pages/api/auth/[...nextauth].ts  # Configuração do NextAuth


🧱 Utilização do padrão k-bab-case com prefixo c- para nomear componentes.

---bash

```
## 🧪 Testes

Apesar de constar nos requisitos bônus, **não houve tempo hábil para implementar testes unitários**.

> Futuramente, pretendo aplicar testes com:
- **Jest**
- **Testing Library**

---

## 🙌 Considerações Finais

✅ Projeto desafiador e extremamente enriquecedor.

✅ Primeiro contato real com **NextAuth.js** e **Spotify Web API**.

✅ Apliquei diversos conhecimentos técnicos em um projeto completo e funcional.

✅ Estou em constante busca por aprendizado, evolução e crescimento profissional.

---

### Muito obrigado pela oportunidade!  
Sou um profissional apaixonado por tecnologia, determinado a evoluir e fazer a diferença.

**Bora pra cima! 🚀**
