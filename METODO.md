# MÉTODO IMPULSO — Framework de Validação para Tech Startups

> **Objetivo:** Reduzir incerteza, acelerar feedback e entregar clareza técnica — em até 14 dias.

---

## 1. VISÃO GERAL

O Método Impulso transforma uma hipótese de produto em um protótipo validado com usuários reais, acompanhado de documentação técnica pronta para engenharia. Ele se apoia em 3 pilares:

| Pilar | O que significa na prática |
|---|---|
| **Redução de Incerteza** | Testar antes de investir pesado em desenvolvimento. Cada fase elimina riscos específicos. |
| **Agilidade no Feedback** | Ciclos curtos entre ideia e resposta real do usuário. No máximo 14 dias do kickoff ao handoff. |
| **Parceria Técnica** | Você não recebe só artefatos; recebe critérios de decisão, lógica de produto e documentação de escala. |

---

## 2. O FRAMEWORK DE 5 FASES

```
 ┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
 │  PESQUISA    │───▶│  PROTÓTIPO   │───▶│  VALIDAÇÃO   │───▶│  PRD         │───▶│  HANDOFF     │
 │  QUALITATIVA │    │  NAVEGÁVEL   │    │  COM USUÁRIO │    │  (BLUEPRINT) │    │  TÉCNICO     │
 │  Dia 1-3     │    │  Dia 4-7     │    │  Dia 8-10    │    │  Dia 10-12   │    │  Dia 13-14   │
 └──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
```

---

## 3. FASE 1 — PESQUISA QUALITATIVA (Dias 1-3)

### Objetivo
Mapear o problema real, o contexto do usuário e as premissas que precisam ser validadas **antes de qualquer linha de design**.

### Atividades

#### 3.1 Kickoff com Stakeholders (2h)
- Alinhar expectativas sobre escopo, critérios de sucesso e limitações do sprint.
- Identificar as **3 hipóteses mais arriscadas** do negócio.
- Definir o **perfil do early adopter** (quem sofre mais com o problema hoje?).

**Template de Kickoff:**
```
1. Qual é a oportunidade de negócio? (1 frase)
2. Quem é o usuário-alvo? (descreva em 3 linhas)
3. O que o usuário faz hoje para resolver isso? (workaround atual)
4. Quais são as 3 maiores incertezas sobre esse produto?
5. O que caracterizaria "sucesso" neste sprint de validação?
6. Existe algum concorrente direto ou indireto? Liste.
7. Orçamento e restrições técnicas conhecidas.
```

#### 3.2 Entrevistas com Usuários (3-5 entrevistas de 30-45 min cada)
- Recrute usuários que se encaixem no perfil de early adopter.
- Use o **roteiro de entrevista de problema** (abaixo).
- Grave e transcreva (ferramentas: Otter.ai, Tl;dv, ou notas manuais).
- **Regra de ouro:** não fale sobre sua solução. Só entenda o problema.

**Roteiro de Entrevista — Exploração do Problema:**
```
ABERTURA (5 min)
- "Me conta como é seu dia a dia na [área do problema]."
- "Qual a parte mais frustrante desse processo?"

APROFUNDAMENTO (20 min)
- "Como você resolve isso hoje? Quais ferramentas/gambiarras usa?"
- "Com que frequência esse problema aparece?"
- "Quanto tempo/custo ele gera por semana?"
- "Já tentou alguma solução antes? O que deu errado?"
- "Se pudesse apertar um botão mágico, o que ele faria?"
- "Tem mais alguém na sua equipe que sofre com isso?"

FECHAMENTO (5 min)
- "Tem algo mais que eu não perguntei e você gostaria de compartilhar?"
- "Conhece mais alguém com o mesmo problema? Poderia me conectar?"
```

#### 3.3 Análise Competitiva (2-3h)
- Liste 3-5 concorrentes diretos e indiretos.
- Para cada um: o que fazem bem, onde falham, qual o modelo de negócio.
- Identifique o **gap** que seu cliente pode explorar.

#### 3.4 Síntese — Discovery Report (4h)
Consolide tudo em um documento de 3-5 páginas.

**Estrutura do Discovery Report:**
```
1. RESUMO EXECUTIVO (meia página)
   - Problema central identificado
   - Principal insight das entrevistas
   - Recomendação para o sprint de prototipação

2. PERFIL DO USUÁRIO (1 página)
   - Persona resumida (nome fictício, cargo, dores, objetivos)
   - Citação literal mais impactante de cada entrevistado
   - Jobs-to-be-done principais

3. MAPA DE DORES (1 página)
   - Lista priorizada de pontos de atrito
   - Frequência × Intensidade de cada dor
   - Workarounds atuais e seus custos

4. CENÁRIO COMPETITIVO (meia página)
   - Matriz simples: concorrentes × funcionalidades
   - Oportunidade de diferenciação

5. HIPÓTESES PARA VALIDAR (meia página)
   - As 3 hipóteses mais críticas
   - Como cada uma será testada na fase de protótipo
   - Critério de sucesso/fracasso para cada hipótese
```

### Entregável da Fase 1
**Discovery Report** (PDF/Notion/Google Docs)

---

## 4. FASE 2 — PROTÓTIPO NAVEGÁVEL (Dias 4-7)

### Objetivo
Traduzir os insights da pesquisa em uma interface interativa de alta fidelidade, focada exclusivamente no **fluxo crítico** que responde às hipóteses da Fase 1.

### Atividades

#### 4.1 Arquitetura de Informação (2-3h)
- Defina as **3-5 telas essenciais** que cobrem o fluxo principal.
- Não crie telas secundárias (configurações, perfil, onboarding completo). Foco total no core.
- Desenhe o **user flow** em baixa fidelidade (papel, Excalidraw, Miro).

#### 4.2 Wireframes de Alta Fidelidade (8-12h)
- Use Figma (ou ferramenta equivalente).
- Comece com o **mobile-first**, mesmo que o produto seja desktop.
- Aplique design system consistente (cores, tipografia, espaçamento).
- Crie componentes reutilizáveis desde o primeiro wireframe.

**Checklist de Telas Mínimas:**
- [ ] Tela de entrada / contexto
- [ ] Tela do core action (ex: criar rota, fazer pedido, buscar)
- [ ] Tela de resultado / feedback
- [ ] Tela de estado vazio (primeiro uso)
- [ ] Tela de erro / edge case principal

#### 4.3 Estados e Transições (2-3h)
Para cada tela, documente pelo menos 3 estados:
- **Default** (estado normal, com dados de exemplo realistas)
- **Empty** (primeiro uso, sem dados)
- **Error** (falha de rede, dado inválido, timeout)

Adicione transições entre telas (protótipo clicável no Figma).

#### 4.4 Setup do Smoke Test (4-6h)

Enquanto o protótipo é criado, prepare a landing page de validação:

**Landing Page de Smoke Test — Estrutura:**
```
1. HEADLINE (1 frase)
   - Promessa clara de valor. Ex: "Otimize suas rotas de entrega em 30 segundos."

2. SUBHEADLINE (1-2 frases)
   - Para quem é e qual problema resolve.

3. VISUAL DO PRODUTO (mockup ou screenshot do protótipo)
   - Preferencialmente um GIF/vídeo curto do fluxo principal.

4. PROVA SOCIAL (se disponível)
   - "X entregadores já testaram" ou logos de early testers.

5. CALL TO ACTION
   - Botão principal: "Quero testar grátis" / "Entrar na lista de espera"
   - Capture e-mail + nome + (opcional) cargo/empresa.

6. OBJEÇÕES (rodapé)
   - "Sem compromisso" / "Acesso antecipado gratuito" / "Cancele quando quiser"
```

**Ferramentas para LP rápida:**
- Carrd.co, Typedream, ou HTML puro com Formspree
- Google Analytics ou Plausible para métricas
- Formspree / Mailchimp para captura de e-mails

> **Métrica-chave do Smoke Test:** Taxa de conversão da LP (visitantes → cadastros). Uma taxa acima de 5-8% com tráfego qualificado é sinal verde.

### Entregável da Fase 2
**Protótipo navegável** (Figma) + **Smoke Test Setup** (Landing Page publicada)

---

## 5. FASE 3 — VALIDAÇÃO COM USUÁRIO (Dias 8-10)

### Objetivo
Testar o protótipo com usuários reais para validar (ou invalidar) as hipóteses antes de qualquer investimento em código.

### Atividades

#### 5.1 Recrutamento para Teste (em paralelo à Fase 2)
- Reutilize os entrevistados da Fase 1 (já têm contexto e confiança).
- Recrute 3-5 novos usuários para evitar viés.
- Ofereça incentivo: acesso antecipado, gift card, ou créditos.

#### 5.2 Sessões de Teste de Usabilidade (30-45 min cada)
- Use o protótipo clicável do Figma.
- Peça para o usuário **pensar em voz alta**.
- Não ajude, não explique, não justifique. Apenas observe.
- Grave a tela e o áudio (com consentimento).

**Roteiro de Teste de Usabilidade:**
```
ABERTURA (3 min)
- "Estamos testando o produto, não você. Não existe resposta errada."
- "Pense em voz alta: tudo que passar pela sua cabeça, fale."
- "Eu não vou poder ajudar durante o teste, mas anotarei tudo."

CENÁRIO (2 min)
- Contextualize SEM entregar a solução:
  "Imagine que você é um [cargo] e precisa [realizar tarefa X]."

TAREFAS (20 min)
- Tarefa 1: "Tente [ação principal]. Onde você clicaria primeiro?"
- Tarefa 2: "Agora [próximo passo do fluxo]."
- Tarefa 3 (edge case): "O que você faria se [situação de erro]?"
- Após cada tarefa: "Numa escala de 1 a 7, quão fácil foi?"

DEBRIEF (5 min)
- "O que mais te surpreendeu, positivamente ou negativamente?"
- "Se pudesse mudar uma coisa, qual seria?"
- "Você usaria isso no seu dia a dia? Por quê?"
```

#### 5.3 Síntese dos Testes (4-6h)
Consolide em uma matriz de severidade:

| Severidade | Definição | Ação |
|---|---|---|
| **Crítica** | Usuário não conseguiu completar a tarefa principal | Corrigir antes de seguir |
| **Alta** | Completou com muita dificuldade/confusão | Corrigir no próximo ciclo |
| **Média** | Completou, mas com atrito visível | Priorizar no backlog |
| **Baixa** | Sugestão cosmética ou preferência pessoal | Anotar para futuras iterações |

**Relatório de Validação (1-2 páginas):**
```
1. HIPÓTESES TESTADAS E RESULTADO
   - Hipótese 1: [validada / invalidada / inconclusiva]
   - Hipótese 2: ...
   - Hipótese 3: ...

2. PRINCIPAIS ACHADOS
   - Top 3 coisas que funcionaram bem
   - Top 3 problemas encontrados (com severidade)

3. PADRÕES DE COMPORTAMENTO
   - Onde todos os usuários travaram?
   - O que todos elogiaram espontaneamente?
   - Alguma funcionalidade foi ignorada por todos?

4. RECOMENDAÇÕES
   - O que muda no protótipo agora
   - O que fica para o backlog de desenvolvimento
   - O que foi invalidado e deve ser abandonado

5. MÉTRICAS DE USABILIDADE
   - Taxa de conclusão da tarefa principal: X%
   - Tempo médio para completar: Y segundos
   - Nota média de facilidade (1-7): Z
```

### Entregável da Fase 3
**Relatório de Validação** + **Protótipo atualizado** (versão pós-testes)

---

## 6. FASE 4 — PRODUCT BLUEPRINT / PRD (Dias 10-12)

### Objetivo
Documentar o produto em nível de especificação para que um time de engenharia possa estimar, planejar e executar sem ambiguidades.

### Estrutura do PRD (Product Blueprint)

```markdown
# PRODUCT BLUEPRINT: [Nome do Produto]

## 1. VISÃO DO PRODUTO (meia página)
- Problema que resolve (1 frase)
- Para quem resolve (1 frase)
- Proposta de valor única (1 frase)
- Métrica de sucesso principal (North Star Metric)

## 2. CONTEXTO DE MERCADO (meia página)
- Concorrentes e alternativas atuais
- Diferencial competitivo
- Riscos de mercado identificados

## 3. USUÁRIOS E PERSONAS (1 página)
- Persona principal (nome, cargo, contexto, dores, objetivos)
- Jobs-to-be-done (JTBD) — formato: "Quando [situação], quero [motivação], para [resultado]"
- Cenários de uso prioritários (top 3)

## 4. JORNADA DO USUÁRIO (1-2 páginas)
- Fluxo principal (passo a passo, do entry point ao sucesso)
- Pontos de decisão (onde o usuário pode abandonar ou bifurcar)
- Estados de tela para cada passo (default, empty, loading, error, success)

## 5. REQUISITOS FUNCIONAIS (2-3 páginas)
Cada requisito no formato:

### RF-01: [Nome da funcionalidade]
- **Prioridade:** P0 (MVP) / P1 (pós-lançamento) / P2 (futuro)
- **Descrição:** O que o sistema deve fazer
- **Critérios de aceitação:**
  - [ ] Dado que [condição], quando [ação], então [resultado esperado]
  - [ ] ...
- **Regras de negócio:** [validações, restrições, exceções]
- **Edge cases:** O que acontece se [condição de erro/limite]?

(Repetir para cada funcionalidade do MVP — máximo 8-12 RFs)

## 6. REQUISITOS NÃO-FUNCIONAIS (meia página)
- Performance: tempo de carregamento máximo por tela
- Disponibilidade: expectativa de uptime
- Segurança: requisitos de autenticação, criptografia, compliance
- Acessibilidade: padrão WCAG a ser seguido
- Responsividade: dispositivos e breakpoints suportados

## 7. MÉTRICAS DE SUCESSO (meia página)
- Métrica principal (North Star)
- Métricas secundárias (sinais de tração)
- Contramétricas (o que não pode piorar)
- Baseline atual (se existir) e meta para 30/60/90 dias

## 8. FORA DO ESCOPO (meia página)
- O que explicitamente NÃO será construído nesta versão
- Funcionalidades adiadas para versões futuras
- Premissas e dependências externas

## 9. GLOSSÁRIO (meia página)
- Termos do domínio que o time de engenharia precisa conhecer
```

### Entregável da Fase 4
**Product Blueprint / PRD** (Google Docs, Notion ou PDF)

---

## 7. FASE 5 — HANDOFF TÉCNICO (Dias 13-14)

### Objetivo
Empacotar tudo que o time de engenharia precisa para começar a construir — sem idas e vindas, sem reuniões desnecessárias de alinhamento.

### Atividades

#### 7.1 Tokens de Design (2-3h)
Extraia do protótipo e documente:

```css
/* Exemplo de Design Tokens entregues */
:root {
  /* Cores */
  --color-primary: #XXXXXX;
  --color-primary-hover: #XXXXXX;
  --color-surface: #XXXXXX;
  --color-surface-variant: #XXXXXX;
  --color-text-primary: #XXXXXX;
  --color-text-secondary: #XXXXXX;
  --color-border: #XXXXXX;
  --color-error: #XXXXXX;
  --color-success: #XXXXXX;

  /* Tipografia */
  --font-family: '...';
  --font-size-display: ...;
  --font-size-headline: ...;
  --font-size-body: ...;
  --font-size-caption: ...;
  --line-height-tight: ...;
  --line-height-relaxed: ...;

  /* Espaçamento */
  --space-xs: ...;
  --space-sm: ...;
  --space-md: ...;
  --space-lg: ...;
  --space-xl: ...;

  /* Bordas e Sombras */
  --radius-sm: ...;
  --radius-md: ...;
  --radius-lg: ...;
  --shadow-sm: ...;
  --shadow-md: ...;
  --shadow-lg: ...;
}
```

#### 7.2 Estrutura de Componentes (2-3h)
Para cada componente reutilizável, documente:

```
COMPONENTE: [Nome]
├── Variantes: [ex: primary, secondary, ghost, danger]
├── Estados: default, hover, active, focus, disabled, loading
├── Props/Tokens: [tamanhos, cores, ícones associados]
├── Comportamento responsivo: [como se adapta em mobile vs desktop]
└── Acessibilidade: [role ARIA, tabindex, contraste mínimo]
```

#### 7.3 Lógica de Estado (1-2h)
Documente o comportamento esperado do sistema:

```
FLUXO: [Nome do fluxo principal]

ESTADO INICIAL (Empty):
  - O que o usuário vê
  - Quais ações estão disponíveis
  - Call-to-action principal

ESTADO DE CARREGAMENTO (Loading):
  - Skeleton ou spinner
  - Tempo máximo esperado
  - Comportamento se exceder o tempo (timeout)

ESTADO DE SUCESSO (Success):
  - Confirmação visual
  - Próximo passo sugerido
  - Desfazer / reverter (se aplicável)

ESTADO DE ERRO (Error):
  - Mensagem amigável (não técnica)
  - Ação corretiva sugerida
  - Opção de retry / contato com suporte

ESTADO DE BORDA (Edge):
  - Dados vazios após busca
  - Limite de itens atingido
  - Conflito de ações simultâneas
```

#### 7.4 Assets Estruturados (1h)
Organize os arquivos finais para entrega:

```
📁 handoff/
├── 📁 figma/
│   └── [projeto].fig (arquivo Figma completo)
├── 📁 tokens/
│   ├── colors.json
│   ├── typography.json
│   └── spacing.json
├── 📁 assets/
│   ├── icons/        (SVG exportados)
│   ├── images/       (otimizadas para web, 2x e 3x)
│   └── fonts/        (arquivos de fonte, se customizadas)
├── 📁 specs/
│   ├── PRD.md
│   ├── user-flows.md
│   └── component-library.md
└── README.md         (índice e instruções para engenharia)
```

#### 7.5 Reunião de Handoff (1h)
- Apresente o PRD e a lógica de estados para o time de engenharia.
- Caminhe pelo protótipo mostrando o fluxo principal.
- Destaque os edge cases e decisões de produto.
- Responda dúvidas e combine canal de comunicação pós-handoff (Slack, Discord).

### Entregável da Fase 5
**Pacote de Handoff Técnico** (assets + documentação + tokens + PRD)

---

## 8. MODELO DE SPRINT — VISÃO 14 DIAS

```
SEMANA 1 — DESCobrir E PROTOTIPAR
┌──────────┬──────────┬──────────┬──────────┬──────────┬──────────┬──────────┐
│   SEG    │   TER    │   QUA    │   QUI    │   SEX    │   SÁB    │   DOM    │
│ Kickoff  │ Entre-  │ Entre-  │ Síntese  │ Wire-   │ Hi-fi   │ OFF      │
│ Stake-   │ vistas  │ vistas  │ Discovery│ frames  │ Figma   │          │
│ holders  │ (2-3)   │ (2-3)   │ Report   │ AI + UX │ (cont.) │          │
└──────────┴──────────┴──────────┴──────────┴──────────┴──────────┴──────────┘

SEMANA 2 — VALIDAR E ENTREGAR
┌──────────┬──────────┬──────────┬──────────┬──────────┬──────────┬──────────┐
│   SEG    │   TER    │   QUA    │   QUI    │   SEX    │   SÁB    │   DOM    │
│ Testes   │ Testes   │ Síntese  │ PRD -    │ Design   │ Tokens + │ OFF      │
│ Usuário  │ Usuário  │ Validação│ escrita  │ Handoff  │ Assets   │          │
│ (2-3)    │ (2-3)    │ + ajustes│          │ Reunião  │ + Entrega│          │
└──────────┴──────────┴──────────┴──────────┴──────────┴──────────┴──────────┘
```

### Regras de Ouro do Sprint
1. **Escopo fixo, tempo fixo, qualidade variável.** Se algo não couber em 14 dias, corte — não estique.
2. **Nunca pule a pesquisa.** Prototipar sem entrevistar é construir no escuro.
3. **Teste com usuários REAIS.** Amigos e familiares não contam.
4. **Documente enquanto faz.** Não deixe o PRD para o último dia.
5. **O handoff é parte do produto.** Engenharia que não entende o "porquê" constrói errado.

---

## 9. TEMPLATES PRONTOS PARA USO

### 9.1 E-mail de Recrutamento para Entrevistas (Fase 1)

```
Assunto: Queremos ouvir sua experiência com [área do problema]

Olá [Nome],

Estamos conversando com profissionais como você para entender melhor
os desafios de [área do problema/contexto].

Seria uma conversa rápida de 30 minutos, sem compromisso. Não estamos
vendendo nada — queremos genuinamente aprender com sua experiência.

Como agradecimento, oferecemos [incentivo: gift card de R$X / acesso
antecipado gratuito / créditos na plataforma].

Tem algum horário na [data] ou [data] que funcione para você?

Abraço,
[Seu nome]
```

### 9.2 E-mail de Recrutamento para Teste de Usabilidade (Fase 3)

```
Assunto: Teste uma nova ferramenta de [área] — sua opinião faz diferença

Olá [Nome],

Depois da nossa conversa sobre [área do problema], criamos algo que
gostaríamos que você experimentasse.

É um protótipo inicial de [descrição curta do produto]. Precisamos da
sua opinião sincera para saber se estamos no caminho certo.

A sessão dura no máximo 45 minutos, online. Você testa a ferramenta
enquanto compartilha o que está pensando — sem certo ou errado.

Pode ser na [data] ou [data]? Me diz o melhor horário.

Valeu demais,
[Seu nome]
```

### 9.3 E-mail de Entrega do Discovery Report

```
Assunto: Discovery Report — [Nome do Projeto]

Olá [Nome do Cliente],

Segue o Discovery Report da primeira fase do nosso sprint de validação.

O que você vai encontrar neste documento:
- Perfil do usuário-alvo com citações reais das entrevistas
- Mapa de dores priorizadas por frequência e intensidade
- Cenário competitivo e oportunidade de diferenciação
- As 3 hipóteses que vamos testar no protótipo

Minha recomendação para a próxima fase: [resumo em 2 linhas].

Vamos nos falar [data/hora combinada] para alinhar os próximos passos?

Abraço,
[Seu nome]
```

---

## 10. FERRAMENTAS RECOMENDADAS

| Atividade | Ferramenta | Alternativa Gratuita |
|---|---|---|
| Entrevistas (gravação) | Otter.ai, Tl;dv | Google Meet (gravação nativa) |
| Síntese / Mapa de Dores | Miro, FigJam | Excalidraw, Google Docs |
| Prototipação | Figma | Penpot (open source) |
| Landing Page | Carrd, Typedream | HTML puro + Formspree (grátis) |
| Captura de E-mails | Formspree, Mailchimp | Google Forms |
| Analytics da LP | Plausible, Fathom | Google Analytics |
| PRD / Documentação | Notion, Google Docs | Markdown + GitHub |
| Entrega de Assets | Google Drive, Dropbox | GitHub Releases |

---

## 11. PRECIFICAÇÃO SUGERIDA (referência)

> Adapte conforme seu mercado, senioridade e complexidade do projeto.

| Pacote | Escopo | Prazo | Faixa de Preço |
|---|---|---|---|
| **Essentials** | Discovery Report + Smoke Test LP | 5-7 dias | R$ 4.000 - R$ 8.000 |
| **Professional** | Essentials + Protótipo + Validação | 14 dias | R$ 8.000 - R$ 18.000 |
| **Complete** | Professional + PRD + Handoff Técnico | 14-21 dias | R$ 18.000 - R$ 30.000 |

### O que está incluso em qualquer pacote:
- Reunião de kickoff e alinhamento
- NDA (Acordo de Confidencialidade) padrão
- Canal de comunicação direta (Slack/WhatsApp)
- 1 rodada de revisão por fase
- Sessão de apresentação dos resultados

---

## 12. CHECKLIST DO PROJETO (para o consultor)

### Pré-Projeto
- [ ] Proposta comercial enviada e aceita
- [ ] NDA assinado por ambas as partes
- [ ] Kickoff agendado com todos os stakeholders
- [ ] Acesso a materiais internos do cliente (se aplicável)
- [ ] Ferramentas configuradas (Figma, Miro, e-mail de recrutamento)

### Durante o Projeto
- [ ] Entrevistas realizadas e gravadas (mín. 5)
- [ ] Discovery Report entregue e aprovado
- [ ] Wireframes revisados pelo cliente
- [ ] Protótipo de alta fidelidade publicado
- [ ] Landing Page de smoke test no ar
- [ ] Sessões de teste realizadas (mín. 5)
- [ ] Relatório de Validação entregue
- [ ] PRD escrito e validado com cliente
- [ ] Handoff técnico realizado com engenharia

### Pós-Projeto
- [ ] Todos os arquivos entregues e organizados
- [ ] Reunião de retrospectiva com cliente
- [ ] Case study autorizado pelo cliente
- [ ] Follow-up agendado para 30 dias

---

## 13. PRINCÍPIOS PARA NÃO ESQUECER

> Estes são os valores que sustentam o método. Eles devem guiar cada decisão durante o projeto.

### Redução de Incerteza
- Toda entrega deve eliminar pelo menos 1 incerteza crítica.
- Se uma atividade não reduz incerteza, ela é desperdício.
- Pergunte-se sempre: "O que estamos assumindo que pode estar errado?"

### Agilidade no Feedback
- Ciclos de no máximo 3 dias sem contato com a realidade do usuário.
- Protótipo ruim testado > protótipo perfeito não testado.
- O cliente aprende junto — não esconda más notícias.

### Parceria Técnica
- Entregue criticando o próprio trabalho. Aponte riscos que você vê.
- Documente como se você fosse o engenheiro que vai herdar o projeto.
- Seu valor não está nos arquivos que entrega, mas nas decisões que fundamenta.

---

> **ESTUDIO_IMPULSO** — *"Construímos juntos a base técnica para sua próxima grande ideia."*
