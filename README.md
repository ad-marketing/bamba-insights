# BAMBA Insights - Sistema Inteligente de Produtos Naturais

## Visão Geral

O BAMBA Insights é um sistema completo de inteligência de mercado desenvolvido especificamente para empresas de produtos naturais. O sistema oferece análise automatizada de produtos, priorização inteligente, relatórios em tempo real e integração com múltiplas plataformas.

## Funcionalidades Principais

### 🎯 **Dashboard Inteligente**
- Visão geral em tempo real dos produtos prioritários
- Métricas de desempenho e estatísticas
- Interface responsiva e moderna

### 🔐 **Sistema de Autenticação**
- Login seguro com JWT
- Controle de acesso baseado em roles (user, admin, super_admin)
- Gestão de utilizadores

### 📊 **Análise de Produtos**
- Algoritmo de priorização automática
- Score de produtos baseado em múltiplos fatores
- API REST completa para integração

### 🛠️ **Painel Administrativo**
- Gestão de utilizadores
- Configurações do sistema
- Monitoramento de atividades

## Tecnologias Utilizadas

### **Frontend**
- **React 18** - Interface de utilizador moderna
- **Vite** - Build tool rápido e eficiente
- **Tailwind CSS** - Framework CSS utilitário
- **Axios** - Cliente HTTP para APIs
- **React Hot Toast** - Notificações elegantes

### **Backend**
- **Flask** - Framework web Python
- **SQLAlchemy** - ORM para base de dados
- **Flask-JWT-Extended** - Autenticação JWT
- **PostgreSQL** - Base de dados principal
- **Redis** - Cache e sessões

### **DevOps**
- **Docker** - Containerização
- **Docker Swarm** - Orquestração
- **Traefik** - Reverse proxy e SSL
- **Let's Encrypt** - Certificados SSL automáticos

## Estrutura do Projeto

```
bamba-insights/
├── frontend/                 # Aplicação React
│   ├── src/
│   │   ├── components/      # Componentes React
│   │   ├── contexts/        # Contextos (Auth, Settings)
│   │   └── App.jsx         # Componente principal
│   ├── package.json
│   └── vite.config.js
├── src/                     # Backend Flask
│   ├── models/             # Modelos de dados
│   ├── routes/             # Rotas da API
│   ├── static/             # Ficheiros estáticos
│   └── main.py            # Aplicação principal
├── requirements.txt        # Dependências Python
├── Dockerfile             # Configuração Docker
└── docker-stack-hub.yml   # Configuração Docker Swarm
```

## Instalação e Configuração

### **Pré-requisitos**
- Python 3.11+
- Node.js 18+
- Docker e Docker Swarm
- PostgreSQL 14+
- Redis 7+

### **Desenvolvimento Local**

1. **Clone o repositório:**
```bash
git clone https://github.com/ad-marketing/bamba-insights.git
cd bamba-insights
```

2. **Configure o backend:**
```bash
# Criar ambiente virtual
python -m venv venv
source venv/bin/activate  # Linux/Mac
# ou
venv\Scripts\activate     # Windows

# Instalar dependências
pip install -r requirements.txt

# Configurar base de dados
python create_test_user.py

# Iniciar servidor
python src/main.py
```

3. **Configure o frontend:**
```bash
cd frontend
pnpm install
pnpm run dev
```

### **Deployment em Produção**

1. **Construir a aplicação:**
```bash
# Frontend
cd frontend
pnpm run build

# Copiar para static
cp -r dist/* ../src/static/
```

2. **Docker Deployment:**
```bash
# Construir imagem
docker build -t bamba-insights:latest .

# Deploy com Docker Swarm
docker stack deploy -c docker-stack-hub.yml bamba-insights
```

## API Endpoints

### **Autenticação**
- `POST /api/auth/login` - Login de utilizador
- `POST /api/auth/register` - Registo de utilizador
- `GET /api/auth/me` - Informações do utilizador atual

### **Produtos**
- `GET /api/agent/products/priority` - Lista de produtos prioritários
- `GET /api/agent/health` - Status da API

### **Administração**
- `GET /api/admin/users` - Lista de utilizadores (admin)
- `GET /health` - Health check do sistema

## Configuração de Ambiente

### **Variáveis de Ambiente**

```bash
# Base de Dados
DATABASE_URL=postgresql://user:password@localhost:5432/bamba_insights
REDIS_URL=redis://localhost:6379/0

# Segurança
JWT_SECRET_KEY=your-jwt-secret-key
FLASK_SECRET_KEY=your-flask-secret-key

# Aplicação
FLASK_ENV=production
DEBUG=false
WORKERS=4

# Utilizador Admin
ADMIN_EMAIL=admin@bamba.com
ADMIN_PASSWORD=your-admin-password

# Branding
COMPANY_NAME=BAMBA Natural
SYSTEM_NAME=BAMBA Insights
PRIMARY_COLOR=#10b981
```

## Credenciais de Teste

**Utilizador de Teste:**
- **Email:** huuandrade@gmail.com
- **Senha:** 157842Hsa171@00
- **Role:** super_admin

## Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## Suporte

Para suporte técnico, entre em contato:
- **Email:** suporte@bamba.com
- **Website:** https://insights.admarketing.com.br

---

**Desenvolvido com ❤️ pela equipe BAMBA Natural**
