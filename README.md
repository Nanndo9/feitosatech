# Feitosatech

Landing page em Next.js com App Router, React e CSS responsivo. Os textos e os símbolos são mantidos em UTF-8.

## Desenvolvimento

Use Node.js 20.9 ou superior.

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Contato

Copie `.env.example` para `.env.local` e configure `NEXT_PUBLIC_CONTACT_URL` com seu WhatsApp ou e-mail. Na hospedagem, configure a mesma variável antes de gerar o build.

```env
NEXT_PUBLIC_CONTACT_URL=https://wa.me/55DDDNUMERO
```

Enquanto o endereço não estiver configurado, o botão informa que o canal de contato estará disponível em breve.

## Publicação

Importe o repositório na Vercel, selecione o preset Next.js e publique. Para hospedar em um servidor Node.js:

```bash
npm ci
npm run build
npm start
```

O comando `npm start` serve a aplicação na porta 3000. Esta versão substitui o antigo HTML independente e precisa do build do Next.js.

## Estrutura

- `app/page.js`: landing page.
- `app/layout.js`: layout, idioma e metadados.
- `app/globals.css`: estilos e responsividade.
- `components/ContactButton.js`: interação do contato.

Os serviços são uma proposta inicial de conteúdo. Revise os textos para refletir os serviços reais da Feitosatech.
