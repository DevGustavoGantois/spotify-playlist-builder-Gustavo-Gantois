# 🎧 Spotify Builder - Plataforma de integração com a API do Spotify

Este projeto foi desenvolvido como parte de um desafio técnico para a **GP Engenharia**, com o objetivo de criar uma plataforma moderna e funcional integrada à **API do Spotify**. A aplicação permite autenticação de usuários via Spotify, acesso a playlists privadas, leitura de dados de reprodução e uma interface inspirada na original do Spotify.

---

## 🛠️ Processo de Instalação do Projeto

Para iniciar o projeto, utilizei o seguinte comando com uma versão específica do Next.js (13.3):

```bash

npx create-next-app@13.3 spotify-builder


Perguntas feitas durante a criação do projeto:
Would you like to use TypeScript?
✅ Yes
O projeto foi desenvolvido utilizando TypeScript.

Would you like to use ESLint?
✅ Yes
ESLint foi utilizado para padronização e análise de código.

Would you like to use Tailwind CSS?
❌ No
Optei por usar CSS Modules ao invés de Tailwind.

Would you like to use src/ directory?
✅ Yes
Utilizei a estrutura com a pasta src para organização do projeto.

Would you like to use experimental app/ directory (beta)?
❌ No
Este projeto utilizou a estrutura baseada na pasta pages/, por ser a padrão em versões anteriores.


🚀 Tecnologias Utilizadas
Next.js 13.3

React

TypeScript

NextAuth.js (OAuth com Spotify)

CSS Modules (Estilização)

Lucide-react (Ícones SVG)

React-icons

Spotify Web API

✅ Login via Spotify
Página de login customizada acessível em /home.

Redirecionamento automático após login, com persistência dos tokens de autenticação.

✅ Gestão de Sessão com Tokens
Armazenamento e uso dos accessToken e refreshToken no JWT.

Implementação da lógica de refresh automático do token ao expirar, garantindo uma experiência contínua.

✅ Leitura e Gerenciamento de Playlists
Leitura de playlists privadas e colaborativas do usuário autenticado.

Funcionalidades para deletar e remover bibliotecas com base nas playlists selecionadas.

✅ Reprodução Atual
Consumo do endpoint user-read-currently-playing para capturar a faixa atual em reprodução.

❗ Nota: Não consegui finalizar a funcionalidade de reproduzir a faixa diretamente, devido à complexidade de permissões e integração de controle de playback. Esse é um ponto identificado para evolução futura.

✅ Interface Inspirada no Spotify
Interface visualmente semelhante à do Spotify, adaptada de forma responsiva e funcional.

A interface possui aproximadamente 90% de similaridade com a original, priorizando usabilidade e lógica de funcionamento.


🎨 Estilização e Responsividade
Estilização feita com CSS Modules, sem o uso de frameworks como Tailwind.

Foram utilizados Lucide-react e React-icons para reforçar a estética moderna.

Houve desafios ao trabalhar com CSS puro, especialmente na responsividade, por estar há um tempo sem usar essa abordagem.


🧠 Dificuldades Enfrentadas com NextAuth
Este foi meu primeiro projeto utilizando o NextAuth.js em conjunto com o OAuth do Spotify. Os principais desafios foram:

🔐 URI de Redirecionamento Inválida
Erro frequente: INVALID_CLIENT: Invalid redirect URI.

Solução: registrar corretamente as URIs no [Spotify Developer Dashboard] para ambientes local e produção.

⚠️ Desafios com a Versão do Next.js
Habituado com Next.js 14+, tive que reaprender a estrutura tradicional do Next.js 13.3 baseada em pages/.

A documentação mais recente diverge bastante da versão usada, o que exigiu reinicializar o repositório três vezes para adaptar o NextAuth corretamente.

📚 Resumo: O processo exigiu paciência, estudo e resiliência. Apesar dos desafios, consegui absorver bastante conhecimento sobre versões anteriores do Next.js e me adaptar à estrutura proposta no desafio com sucesso.

🌍 Código e Commits em Inglês
Todo o código, variáveis, funções, componentes e mensagens de commit foram escritos em inglês, pois acredito que é a língua universal da programação.

✅ Benefícios:
Facilita o entendimento por desenvolvedores ao redor do mundo.

Segue boas práticas profissionais.

Melhora a colaboração em projetos open source.

Garante documentação e comunicação técnica padronizada.

💡 Exemplos:
tsx
Copiar
Editar
// Em vez de:
const usuarioAutenticado = true;

// Escrito como:
const isUserAuthenticated = true;

// Em vez de:
function buscarPlaylistsPrivadas() {}

// Escrito como:
function fetchPrivatePlaylists() {}
bash
Copiar
Editar
# Em vez de:
git commit -m "corrige bug ao carregar playlists"

# Escrito como:
git commit -m "fix: resolve bug when loading playlists"
📁 Estrutura de Pastas
r
Copiar
Editar
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
🧱 Utilização do padrão kebab-case com prefixo c- para nomear componentes.

🧪 Testes
Apesar de constar como requisito bônus, não houve tempo hábil para implementar testes unitários.

Em versões futuras, pretendo utilizar:

Jest

Testing Library

🙌 Considerações Finais
✅ Projeto desafiador e extremamente enriquecedor.
✅ Primeiro contato real com NextAuth.js e Spotify Web API.
✅ Apliquei diversos conhecimentos técnicos em um projeto completo e funcional.
✅ Estou em constante busca por aprendizado, evolução e crescimento profissional.

Muito obrigado pela oportunidade!
Sou um profissional apaixonado por tecnologia, determinado a evoluir e a fazer a diferença.

Bora pra cima! 🚀