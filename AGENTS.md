# Projeto: ESTUDIO_IMPULSO

## O que é
Site estático do Estúdio Impulso — estúdio de validação de produto para tech startups. 4 páginas HTML puras, sem frameworks de build, hospedado no GitHub Pages.

## Como trabalhar neste projeto

### Arquivos importantes
- `index.html` — landing page principal
- `portfolio.html` — página de portfólio
- `showcase-guia.html` — showcase detalhado do projeto guIA
- `contact.html` — formulário de contato com Formspree
- `css/styles.css` — todo o design system (~735 linhas, sem Tailwind)
- `js/main.js` — navegação, animações, integração FormspreeSDK

### Padrões e convenções
- **Nomes de classes**: kebab-case, sem prefixos de framework (ex: `.bento-card`, `.btn-primary`, `.img-card`)
- **Cores**: sempre usar CSS custom properties do `:root` (ex: `var(--color-primary)`, `var(--color-border-subtle)`)
- **Tipografia**: classes utilitárias `.font-headline-lg`, `.font-body-md`, `.font-label-caps`, `.font-mono-code`
- **Espaçamento**: classes utilitárias `.p-lg`, `.gap-md`, `.space-y-lg` — NUNCA usar Tailwind diretamente
- **Imagens**: pasta `img/`, referenciar como `img/nome.jpg`
- **Ícones**: `<span class="material-symbols-outlined">nome_icone</span>`
- **Responsivo**: classes `md-*` para breakpoint 768px (ex: `md-flex-row`, `md-grid-cols-2`)
- **Navegação**: todas as páginas compartilham o mesmo `<nav class="site-nav">` com links para Home, Portfólio, Contato
- **Footer**: idêntico em todas as páginas com `site-footer > footer-inner`
- **Formspree**: endpoint `xojgazay`, SDK carregado via CDN apenas em `contact.html`

### Regras ao editar
1. NUNCA reintroduzir o nome "STUDIO_PHANTOM" — o brand atual é `ESTUDIO_IMPULSO`
2. NUNCA usar classes do Tailwind (`group`, `group-hover:`, etc.) — o CSS é customizado
3. Sempre testar em mobile e desktop (breakpoint 768px)
4. Imagens devem ser locais (`img/`), nunca URLs externas do Google
5. Ao modificar o formulário de contato, manter os atributos `data-fs-*` do Formspree
6. O botão "Fale conosco" não aparece na própria página de contato (spacer invisível mantém alinhamento)
7. Links do header: Home → `index.html`, Portfólio → `portfolio.html`, Contato → `contact.html`

### Branches e deploy
- Repositório: `gabrieleslava/STUDIO_PHANTOM`
- Branch principal: `main`
- Deploy automático via GitHub Pages (root `/`)
- Domínio: `estudioimpulso.com.br`

### Servidor local
```bash
cd studiophantom
python3 -m http.server 8000
```
