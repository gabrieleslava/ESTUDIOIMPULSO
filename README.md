# ESTUDIO_IMPULSO — Documentação Técnica

## Visão Geral
Site estático de 4 páginas para o Estúdio Impulso, estúdio de validação para tech startups. Hospedado via GitHub Pages com domínio customizado `estudioimpulso.com.br`.

## Stack
- **HTML5** puro (4 páginas, sem frameworks)
- **CSS3** customizado (sem Tailwind em produção — design system próprio)
- **Vanilla JS** (sem dependências de build)
- **GitHub Pages** para hosting
- **Formspree** para envio de formulário de contato

## Estrutura de Arquivos
```
/
├── index.html              # Landing page (hero, princípios, deliverables, portfolio preview, CTA)
├── portfolio.html          # Portfólio (cards de projetos, stats CTA)
├── showcase-guia.html      # Showcase do projeto guIA (método 5 fases + galeria masonry)
├── contact.html            # Formulário de contato + sidebar de benefícios
├── css/
│   └── styles.css          # Design system completo (~735 linhas)
├── js/
│   └── main.js             # Nav ativa, scroll suave, reveal animations, Formspree init
└── img/
    ├── auth-gateway.jpg    # guIA — tela de login
    ├── zones-empty.jpg     # guIA — zonas vazias
    ├── journey-plan.jpg    # guIA — planejamento de jornada
    ├── route-success.jpg   # guIA — rota pronta
    ├── map-overview.jpg    # guIA — visão do mapa
    ├── step-details.jpg    # guIA — detalhes das paradas
    └── guia-thumb-new.png  # Thumbnail do projeto guIA (portfólio)
```

## Design System (styles.css)
- **Paleta:** Deep Dark (#09090b a #ffffff), 40+ tokens de cor via CSS custom properties
- **Tipografia:** Geist (headings/body) + Geist Mono (code/data)
- **Ícones:** Material Symbols Outlined (Google Fonts)
- **Componentes:** bento cards, badges, botões primary/secondary, form inputs, img-cards, glass-panels
- **Responsivo:** mobile-first com breakpoints em 768px

## Páginas

### index.html
- Hero com grid background radial
- Seção de 3 princípios (bento grid)
- Handoff deliverables (grid 4 colunas)
- Preview do portfólio com card clicável
- CTA final com gradiente

### portfolio.html
- Grid de cards de projeto (hover: grayscale → cor)
- Card guIA com overlay link para showcase
- Stats bar com CTA lateral

### showcase-guia.html
- Hero do projeto guIA
- Metodologia em 5 fases (grid bento, fase 4 span 2)
- Galeria masonry 3 colunas (6 screens — alturas assimétricas: 500/400, 400/500, 450/450)

### contact.html
- Layout grid 12 colunas (form 8 + sidebar 4 + status bar 12)
- Formulário com validação Formspree SDK
- Inputs com nome, email, startup, tamanho, mensagem
- Sidebar com 3 benefícios + NDA badge
- Status bar com dot pulsante "aceitando projetos"

## Formspree
- Endpoint: `https://formspree.io/f/xojgazay`
- SDK: `@formspree/ajax@1` via unpkg CDN
- Campos: nome, email, startup, tamanho, mensagem
- Atributos: `data-fs-field`, `data-fs-error`, `data-fs-success`, `data-fs-submit-btn`
- Feedback visual: mensagem de sucesso (verde) ou erro (vermelho) inline

## Deploy
- Repositório: `gabrieleslava/ESTUDIOIMPULSO`
- Branch: `main`
- GitHub Pages: root `/`
- Domínio: `estudioimpulso.com.br`
- DNS Registro.br: 4 registros A (IPs GitHub Pages) + CNAME www

## Comandos
```bash
# Servir localmente
python3 -m http.server 8000

# Deploy (push na main dispara GitHub Pages)
git add -A && git commit -m "mensagem" && git push
```
