# 🏍️ Shineray HortolândiaRepositório oficial do sistema web da concessionária Shineray Hortolândia. Este projeto contempla uma landing page de alta performance, catálogo digital de veículos e um painel administrativo para gestão de estoque e leads.## 🚀 TecnologiasO projeto utiliza uma stack moderna focada em performance, escalabilidade e SEO:Frontend: Next.js (React)Backend: NestJSEstilização: Tailwind CSSBanco de Dados: Supabase (PostgreSQL)Hospedagem: VercelLinguagem: TypeScript## 🛠️ FuncionalidadesCatálogo de Produtos: Listagem dinâmica de motos elétricas, combustão e scooters.Gestão de Estoque: Painel administrativo para cadastro e edição de veículos.Filtros Inteligentes: Busca por categoria, cor, preço e cilindrada.Integração WhatsApp: Botão flutuante e formulários com redirecionamento direto.Otimização SEO: Estrutura focada em rankeamento local para Hortolândia e região.Responsividade: Interface 100% adaptada para dispositivos móveis.## 📁 Estrutura de PastasPlaintext├── apps/
│   ├── web/          # Frontend Next.js & Tailwind
│   └── server/       # API NestJS & Integração Supabase
├── packages/         # Configurações compartilhadas (ESLint, TSConfig)
└── .env.example      # Exemplo de variáveis de ambiente
## ⚙️ Como Executar### 1. Clonar o repositórioBashgit clone https://github.com/diegorosadev/shineray-hortolandia.git
### 2. Instalar dependênciasBashnpm install
# ou
yarn install
### 3. Configurar Variáveis de AmbienteCrie um arquivo .env na raiz do projeto seguindo o modelo:Snippet de códigoSUPABASE_URL=sua_url
SUPABASE_ANON_KEY=sua_chave
API_URL=http://localhost:3000
### 4. Rodar em DesenvolvimentoBashnpm run dev
## 🎨 Identidade VisualO design segue o guia de marca da Shineray, utilizando as cores oficiais:CorHexadecimalAplicaçãoVermelho#E30613Primária / Botões / LogoBranco#FFFFFFFundos / Tipografia InversaPreto#1A1A1ATipografia / Rodapé## 🛡️ LicençaEste software é propriedade intelectual da Flow Flux. O uso ou reprodução sem autorização é estritamente proibido.Desenvolvido por Diego Rosa > 🚀 DIEGOROSADEV - Soluções em IA e Desenvolvimento Web
