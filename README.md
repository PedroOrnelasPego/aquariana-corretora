# aquariana-corretora

## Libs

- https://react-bootstrap.netlify.app/
- https://react-icons.github.io/react-icons/search?q=horse
- https://tailwindcss.com/
- https://formsubmit.co/documentation
- https://www.npmjs.com/package/react-helmet

- Node 18

## Admin + Firebase (Auth/Firestore) + Cloudinary (Imagens)

Este projeto pode carregar os imóveis via Firebase (Auth + Firestore) e expõe um painel simples em `/admin` para cadastrar imóveis. As fotos são enviadas para o **Cloudinary** (para evitar a limitação do Firebase Storage no plano Spark).

### 1) Criar projeto no Firebase

- Firebase Console → crie um projeto
- **Authentication** → Sign-in method → habilite **Email/Password**
- **Firestore Database** → crie o banco (modo produção)

### 1.1) Criar conta no Cloudinary

- Crie uma conta no Cloudinary
- Crie um **Upload Preset** do tipo **Unsigned**
- (Opcional) Defina uma pasta padrão (ex: `imoveis`)

### 2) Variáveis de ambiente

Crie um arquivo `.env` (local) baseado no `.env.example` e preencha:

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_ADMIN_EMAIL` (email do único admin)

Cloudinary (necessário para upload de fotos):

- `VITE_CLOUDINARY_CLOUD_NAME`
- `VITE_CLOUDINARY_UPLOAD_PRESET`
- `VITE_CLOUDINARY_FOLDER` (opcional, padrão: `imoveis`)

### 2.1) Apagar imagens automaticamente (recomendado)

Quando você exclui um imóvel no `/admin`, o app pode apagar as imagens no Cloudinary automaticamente via uma Function em `/api/cloudinary/delete` (segura, com verificação do token do Firebase).

No **Vercel**, adicione estas variáveis (server-side, sem `VITE_`):

- `ADMIN_EMAIL` (mesmo email de `VITE_ADMIN_EMAIL`)
- `FIREBASE_ADMIN_PROJECT_ID`
- `FIREBASE_ADMIN_CLIENT_EMAIL`
- `FIREBASE_ADMIN_PRIVATE_KEY` (cole com `\n` nos finais de linha) **ou** `FIREBASE_ADMIN_PRIVATE_KEY_B64` (a private key em base64)
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

Observação: em dev local com `npm run dev` (Vite), as rotas `/api/*` do Vercel não rodam. Para testar a exclusão automática localmente, use `vercel dev`.

#### Dev local (frontend + API)

- Terminal 1 (API): `npm run vercel:dev`
- Terminal 2 (site): `npm run dev`
- Abra o site em `http://localhost:5173`

O Vite está configurado para encaminhar chamadas `/api/*` para `http://localhost:3000`.

No Vercel: Project → Settings → Environment Variables → adicione as mesmas chaves.

### 3) Criar o usuário admin

Firebase Console → Authentication → Users → Add user

- Email = `VITE_ADMIN_EMAIL`
- Password = (defina uma senha forte)

Depois acesse: `/admin/login`.

### 4) Regras de segurança (importante)

Para manter a leitura pública dos imóveis e restringir escrita apenas ao admin (por email), uma configuração inicial simples é:

**Firestore Rules**

```txt
rules_version = '2';
service cloud.firestore {
	match /databases/{database}/documents {
		match /imoveis/{docId} {
			allow read: if true;
			allow write: if request.auth != null
				&& request.auth.token.email == 'SEU_ADMIN_EMAIL_AQUI';
		}
	}
}
```

Troque `SEU_ADMIN_EMAIL_AQUI` pelo mesmo email de `VITE_ADMIN_EMAIL`.

### Observações

- As imagens são comprimidas no navegador antes do upload para reduzir tamanho e download.
- A página pública de vendas lê do Firestore quando o Firebase está configurado; caso contrário, usa o dataset local.
