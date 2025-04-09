# 🎧 Spotify Builder - Plataforma de integração com a API do Spotify

Este projeto foi desenvolvido como parte de um desafio técnico para a **GP Engenharia**, com o objetivo de criar uma plataforma moderna e funcional integrada à **API do Spotify**. A aplicação permite autenticação de usuários via Spotify, acesso a playlists privadas, leitura de dados de reprodução e uma interface inspirada na original do Spotify.

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

```env
http://localhost:3000/api/auth/callback/spotify
https://sua-url.vercel.app/api/auth/callback/spotify

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

🧾 Também criei uma pasta dedicada para interfaces TypeScript, utilizada para tipar todas as respostas vindas da API do Spotify, garantindo organização e segurança de tipo em todo o projeto.


## 🧪 Testes Unitários

Apesar da solicitação de testes unitários, devido à correria e ao curto prazo para entrega, **não consegui implementá-los nos requisitos bonus repositório do fork no GitHub**.

Acredito que com mais tempo, seria plenamente possível evoluir a aplicação com testes bem estruturados, utilizando ferramentas como **Jest** e **Testing Library** para cobrir os fluxos principais e garantir estabilidade do código.

---

## 🤝 Considerações Finais

Independente do resultado desse teste e entrevista, este projeto foi **um grande aprendizado e extremamente realizador para mim**. Foi meu primeiro contato real com o **NextAuth.js** e integração com a **Spotify Web API**, e pude aplicar na prática diversos conhecimentos técnicos que venho estudando.

Sou uma pessoa que **busca constantemente aprender, evoluir e crescer profissionalmente**, e agradeço muito pela oportunidade de participar deste desafio.

**Muito obrigado pela oportunidade desde já, sou um cara que quer aprender, visa em crescer profissionalmente e um dia ser diferente, bora pra cima meus colegas!**