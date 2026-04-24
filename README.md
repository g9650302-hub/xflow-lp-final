# xFlow Payments — Landing Page

Site estático pronto pra deploy na Vercel.

## 📦 O que tem nesse pacote

```
xflow-site/
├── index.html                    (105 KB — o site)
├── favicon.ico                   (2 KB)
├── favicon-16.png                (0.7 KB)
├── favicon-32.png                (1.2 KB)
├── apple-touch-icon.png          (13 KB — ícone home screen iOS)
├── android-chrome-192.png        (15 KB — Android home screen)
├── android-chrome-512.png        (77 KB — Android/PWA)
├── xflow-logo-icon.png           (35 KB — logo exibida no nav)
├── xflow-logo-full.png           (35 KB — backup)
├── robots.txt                    (SEO — diz pro Google indexar)
├── sitemap.xml                   (SEO — mapa de URLs)
├── vercel.json                   (config de cache e segurança)
└── README.md                     (este arquivo)
```

**Total: ~290 KB** — carrega em menos de 1 segundo em 4G.

---

## 🚀 Deploy na Vercel — 3 formas (escolhe a mais fácil pra você)

### Opção 1: Drag & Drop (mais rápido, 2 minutos)

1. Vai em **https://vercel.com/new**
2. Faz login (pode usar GitHub, Google ou email)
3. Clica em **"Import Third-Party Git Repository"** NÃO — clica em cima do texto **"deploy a template"** e procura **"Import a Project"** OU use direto: **https://vercel.com/new/clone**
4. Na verdade, a forma mais simples: vai em https://vercel.com/ → login → na dashboard, arrasta a **pasta inteira** `xflow-site` direto pro navegador (área "Deploy")
5. Dá um nome pro projeto (ex: `xflow-payments`)
6. Clica **Deploy** — pronto

Em ~30 segundos o site tá no ar num domínio tipo `xflow-payments.vercel.app`.

### Opção 2: Via GitHub (recomendado se for atualizar depois)

1. Cria um repo no GitHub (ex: `xflow-landing`)
2. Faz upload dos arquivos do `xflow-site/` no repo
3. Vai em https://vercel.com/new
4. Clica **"Import Git Repository"** e seleciona o repo
5. Clica **Deploy**

Depois, quando quiser atualizar o site, só dá push no GitHub que a Vercel redeploya automaticamente.

### Opção 3: Via CLI (pra devs)

```bash
npm i -g vercel
cd xflow-site
vercel
# segue as perguntas, no final ele dá a URL
```

---

## 🌐 Configurar domínio xflowpayments.com

Depois do deploy funcionando na URL `.vercel.app`:

1. Na dashboard da Vercel, abre o projeto
2. Aba **Settings** → **Domains**
3. Digita `xflowpayments.com` → Add
4. Adiciona também `www.xflowpayments.com`
5. A Vercel vai te pedir pra configurar DNS no seu registrador (GoDaddy, Registro.br, Cloudflare, onde você comprou)

**O que configurar no DNS do seu domínio:**

| Tipo | Nome | Valor |
|------|------|-------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

Se você usa **Registro.br**: entra em registro.br → painel → "Editar Zona" → adiciona esses registros.

Se você usa **Cloudflare**: entra no Cloudflare → DNS → adiciona os registros (deixa o "proxy" como "DNS only" na cor cinza, senão conflita com o SSL da Vercel).

Propagação do DNS leva de 10 minutos a 24h (geralmente 30min). Depois disso, `xflowpayments.com` aponta pro seu site e o SSL (HTTPS 🔒) é ativado automaticamente pela Vercel.

---

## 🔄 Depois do deploy — checklist

- [ ] Abre `xflow-payments.vercel.app` e confere se tudo carregou certo
- [ ] Testa no celular (abre no Safari/Chrome mobile)
- [ ] Clica em todos os botões: "Abrir conta" vai pro `/register`, "Entrar" vai pro `/login`, "Documentação" vai pra `/docs/introducao`
- [ ] Testa o WhatsApp flutuante — abre conversa
- [ ] Vê se o favicon aparece na aba do browser
- [ ] Rola até o showcase e espera ~2s — o dashboard deve começar a animar (dinheiro entrando)
- [ ] Roda um audit no Google PageSpeed: https://pagespeed.web.dev/ (cola a URL da Vercel)

---

## 📧 Atualizar o site depois

Se você fez **Opção 2** (GitHub): só editar o HTML, dar commit e push. Redeploya sozinho.

Se você fez **Opção 1** (drag & drop): no painel da Vercel, vai em **Deployments** → menu **···** → **Redeploy** (mas você vai ter que arrastar os arquivos novos de novo). Por isso a Opção 2 é melhor a longo prazo.

---

## 🆘 Se algo der errado

**"O site carregou mas o favicon não aparece"**
Espera 5 minutos (cache do browser). Ou abre em aba anônima. Se persistir, confere se o `favicon.ico` tá na raiz do deploy.

**"Subi mas aparece 404"**
A Vercel procura `index.html` na raiz. Confere se o arquivo `index.html` tá direto no `xflow-site/` e não dentro de outra pasta.

**"O domínio xflowpayments.com não conecta"**
DNS leva tempo pra propagar. Testa em https://dnschecker.org/ se o A record tá apontando pro IP da Vercel. Se tiver, espera mais 30min.

**"O macbook no showcase não anima"**
Confere no DevTools (F12) → Console se tem algum erro JavaScript. Pode ser que algum CDN (Three.js, Google Fonts) esteja lento pra carregar. Normalmente resolve sozinho.

---

## 💰 Custo da Vercel

**Plano Hobby (grátis):** 100 GB de banda/mês, sem limite de requests, HTTPS, CDN global. Mais que suficiente pra uma landing page — você aguenta ~500 mil visitas/mês antes de estourar.

Se você passar disso (parabéns pelo tráfego), o plano **Pro é $20/mês** por membro do time.

---

**Dúvida? Me chama.** Esse README cobre 99% dos casos, mas se travar em algum passo específico, manda o screenshot do erro.
