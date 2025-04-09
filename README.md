🎧 Spotify Builder - Plataforma de integração com a API do Spotify
<p>Este projeto foi desenvolvido como parte de um desafio técnico para a <strong>GP Engenharia</strong>, com o objetivo de criar uma plataforma moderna e funcional integrada à <strong>API do Spotify</strong>. A aplicação permite autenticação de usuários via Spotify, acesso a playlists privadas, leitura de dados de reprodução e uma interface inspirada na original do Spotify.</p>
🛠️ Processo de Instalação do Projeto
<p>Para iniciar o projeto, utilizei o seguinte comando com uma versão específica do Next.js (13.3):</p>
bash
Copiar
Editar
npx create-next-app@13.3 spotify-builder
Perguntas feitas durante a criação do projeto:

✅ Would you like to use TypeScript?

<p>Sim – O projeto foi desenvolvido utilizando TypeScript.</p>
✅ Would you like to use ESLint?

<p>Sim – ESLint foi utilizado para padronização e análise de código.</p>
❌ Would you like to use Tailwind CSS?

<p>Não – Optei por usar CSS Modules ao invés de Tailwind.</p>
✅ Would you like to use src/ directory?

<p>Sim – Utilizei a estrutura com a pasta <code>src</code> para organização do projeto.</p>
❌ Would you like to use experimental app/ directory (beta)?

<p>Não – O projeto utilizou a estrutura tradicional baseada em <code>pages/</code>.</p>
🚀 Tecnologias Utilizadas
Next.js 13.3

React

TypeScript

NextAuth.js (OAuth com Spotify)

CSS Modules

Lucide-react (Ícones SVG)

React-icons

Spotify Web API

✅ Funcionalidades
Login via Spotify
Página de login customizada acessível em /home

Redirecionamento automático após login

Persistência dos tokens de autenticação

Gestão de Sessão com Tokens
Armazenamento e uso de accessToken e refreshToken no JWT

Lógica de refresh automático ao expirar o token

Leitura e Gerenciamento de Playlists
Leitura de playlists privadas e colaborativas

Funções para deletar e remover bibliotecas com base nas playlists

Reprodução Atual
Consumo do endpoint user-read-currently-playing

⚠️ Nota: Não finalizei a funcionalidade de reproduzir a faixa diretamente por limitações da API

Interface Inspirada no Spotify
Interface responsiva e funcional

Cerca de 90% de similaridade com a original

🎨 Estilização e Responsividade
<p>A estilização foi feita com CSS Modules, sem uso de frameworks como Tailwind. Foram utilizadas as bibliotecas <strong>Lucide-react</strong> e <strong>React-icons</strong> para reforçar a estética moderna.</p> <p>Houve desafios com responsividade devido ao tempo sem trabalhar com CSS puro.</p>
🧠 Dificuldades Enfrentadas com NextAuth
🔐 URI de Redirecionamento Inválida
<p>Erro comum: <strong>INVALID_CLIENT: Invalid redirect URI</strong></p> <p><strong>Solução:</strong> registrar corretamente as URIs no <em>Spotify Developer Dashboard</em> para ambientes local e produção.</p>
⚠️ Desafios com a Versão do Next.js
<p>Por estar acostumado com o Next.js 14+, precisei reaprender a estrutura baseada em <code>pages/</code>.</p> <p>A documentação mais recente diverge bastante da versão usada, e reinicializei o repositório três vezes para adaptar corretamente o NextAuth.</p> <p><strong>Resumo:</strong> Foi um processo que exigiu paciência, estudo e resiliência, mas me trouxe muito aprendizado.</p>
🌍 Código e Commits em Inglês
<p>Todo o código, variáveis, funções, componentes e mensagens de commit foram escritos em inglês, seguindo boas práticas.</p>
✅ Benefícios:

Facilidade de entendimento global

Melhoria na colaboração open source

Documentação técnica padronizada

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
└── pages/api/auth/[...nextauth].ts # Configuração do NextAuth
<p><strong>Obs:</strong> Utilizei o padrão <code>kebab-case</code> com prefixo <code>c-</code> para nomear componentes.</p>
🧪 Testes
<p>Apesar de ser um requisito bônus, não houve tempo hábil para implementar testes unitários. Em versões futuras pretendo utilizar:</p>
Jest

Testing Library

🙌 Considerações Finais
✅ Projeto desafiador e extremamente enriquecedor

✅ Primeiro contato real com NextAuth.js e Spotify Web API

✅ Aplicação completa com diversas funcionalidades

✅ Sigo em constante aprendizado e evolução

<p>Muito obrigado pela oportunidade! Sou um profissional apaixonado por tecnologia, determinado a evoluir e a fazer a diferença.</p>
Bora pra cima! 🚀