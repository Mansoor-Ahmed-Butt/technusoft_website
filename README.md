# Technusoft (Next.js)

Next.js 14 (App Router) + TypeScript + Tailwind CSS + shadcn/ui-style components + Framer Motion + React Three Fiber + Prisma (PostgreSQL) + React Hook Form + Zod + Resend.

## Run locally (VS Code)
```bash
npm install
cp .env.example .env        # fill in DATABASE_URL, RESEND_API_KEY, CONTACT_TO_EMAIL
npx prisma db push          # creates the ContactMessage table
npm run dev                 # http://localhost:3000
```
Needs Node.js 18.18+ (Node 20 recommended).

## Where to edit
- Services, projects, technologies, pricing, stats: `lib/data.ts`
- Colors / glass look: `app/globals.css` (CSS variables at the top)
- 3D glass scene: `components/Hero3D.tsx`
- Contact API: `app/api/contact/route.ts`, validation: `lib/validation.ts`
- Contact details: `components/Footer.tsx`, `app/contact/page.tsx`

## Deploy
1. Push to GitHub.
2. Create a free PostgreSQL database on Neon or Supabase and copy the connection string.
3. Import the repo in Vercel and add the env vars from `.env.example`.
4. Run `npx prisma db push` once locally with the production DATABASE_URL.
5. Vercel > Settings > Domains > add `technusoft.com` and set the DNS records Vercel shows.
6. In Resend, verify technusoft.com, then set CONTACT_FROM_EMAIL to an address on that domain.

## Add more shadcn/ui components
`npx shadcn@latest add dialog` (components.json is already configured).
