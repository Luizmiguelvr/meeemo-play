# Meeemo Play

Site institucional infantil cristão com design vibrante e alegre. Site estático (HTML, CSS e JavaScript puro) pronto para deploy.

## 📁 Estrutura do Projeto

```
/
├── index.html              # Página principal
├── css/
│   ├── variables.css       # Variáveis CSS (cores, estilos)
│   └── style.css          # Estilos principais
├── js/
│   ├── config.js          # Configurações centralizadas
│   └── main.js            # JavaScript principal
├── assets/
│   ├── images/            # Imagens do site
│   └── icons/             # Ícones e favicons
├── CONFIG.md              # Guia de configuração
└── README.md              # Este arquivo
```

## 🎨 Personalização

### Alterar Cores

Edite `css/variables.css` e altere as variáveis:

```css
--color-primary: #1E88E5;    /* Cor principal */
--color-yellow: #FFD600;     /* Amarelo */
--color-green: #00C853;      /* Verde */
```

### Alterar Conteúdo

Edite `js/config.js` e altere:

- **Nome da marca**: `brandName`
- **Slogan**: `slogan`
- **Links**: `links.youtube`, `links.spotify`
- **Textos**: `about`, `contentCards`, `parentsCards`

### Alterar Logo

Edite `js/config.js` na seção `logo` e substitua o SVG.

**📖 Veja `CONFIG.md` para guia completo de personalização.**

## 🚀 Deploy no Cloudflare Pages

### Método 1: Via GitHub (Recomendado)

1. **Crie um repositório no GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/seu-usuario/meemoplay.git
   git push -u origin main
   ```

2. **No Cloudflare Pages:**
   - Acesse [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Vá em **Pages** > **Create a project**
   - Conecte seu repositório GitHub
   - **Build settings:**
     - Framework preset: **None**
     - Build command: *(deixe vazio)*
     - Build output directory: `/` (raiz)
   - Clique em **Save and Deploy**

3. **Pronto!** O site estará online em alguns minutos.

### Método 2: Upload Direto

1. No Cloudflare Pages, escolha **Upload assets**
2. Faça upload de todos os arquivos (exceto `.gitignore`)
3. Deploy automático!

## ⚙️ Configurações do Cloudflare Pages

- **Framework preset**: None
- **Build command**: *(vazio - não precisa build)*
- **Build output directory**: `/` (raiz)
- **Root directory**: `/` (raiz)

## 📋 Requisitos

- Nenhum! Site estático puro
- Não precisa Node.js, npm ou build
- Funciona diretamente da raiz

## 🌐 Características

- ✅ Site estático (HTML/CSS/JS puro)
- ✅ Totalmente responsivo
- ✅ Sistema de configuração centralizado
- ✅ Pronto para produção
- ✅ Sem dependências externas (exceto Google Fonts)

## 📝 Notas

- O site roda diretamente da raiz
- Não há processo de build necessário
- Todos os caminhos são relativos
- Compatível com qualquer servidor estático

## 💛

© Meeemo Play — Educação cristã infantil
