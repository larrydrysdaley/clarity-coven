# 🔮 Clarity Coven - Getting Started

Welcome to **Clarity Coven**, an ethical spiritual insight platform built with Next.js, TypeScript, and modern web technologies.

## 📦 What's Included

This starter includes:
- ✅ Next.js 15 with App Router
- ✅ TypeScript configuration
- ✅ Complete design system (CSS variables, utility classes)
- ✅ Landing page with hero, features, and footer
- ✅ Supabase integration setup
- ✅ OpenAI integration with reading generators
- ✅ Responsive design
- ✅ Animations and micro-interactions

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd clarity-coven
npm install
```

### 2. Set Up Environment Variables

Copy the example env file:

```bash
copy .env.local.example .env.local
```

Then fill in your API keys in `.env.local`:

```env
# Supabase (get from https://supabase.com)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# OpenAI (get from https://platform.openai.com)
OPENAI_API_KEY=your_openai_api_key

# Stripe (get from https://stripe.com)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### 3. Set Up Supabase Database

1. Create a new Supabase project at https://supabase.com
2. Go to the SQL Editor
3. Run the SQL from `DATABASE_SCHEMA.md` to create tables
4. Copy your project URL and anon key to `.env.local`

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app!

## 📁 Project Structure

```
clarity-coven/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Landing page
│   ├── page.module.css     # Landing page styles
│   ├── globals.css         # Global styles & design system
│   └── (future pages)
├── lib/
│   ├── supabase.ts         # Supabase client
│   └── openai.ts           # OpenAI integration
├── components/             # Reusable components (create as needed)
├── .env.local             # Environment variables (create from example)
└── package.json
```

## 🎨 Design System

The design system is defined in `app/globals.css` with CSS variables:

### Colors
- `--color-primary`: #2D1B69 (Deep Indigo)
- `--color-accent`: #D4AF37 (Warm Gold)
- `--color-secondary`: #9B8FBF (Soft Lavender)

### Spacing
- `--spacing-sm`: 8px
- `--spacing-md`: 16px
- `--spacing-lg`: 24px
- `--spacing-xl`: 32px

### Utility Classes
- `.container` - Max-width container with padding
- `.card` - Glassmorphism card with hover effect
- `.btn` - Button base styles
- `.btn-primary` - Primary gradient button
- `.btn-secondary` - Secondary outline button

## 🛠️ Next Steps

### 1. Build Core Features

Create these pages/features next:

- [ ] `/signup` - User registration
- [ ] `/login` - User authentication
- [ ] `/dashboard` - Main user dashboard
- [ ] `/readings` - Reading selection and generation
- [ ] `/rituals` - Ritual library
- [ ] `/journal` - Spiritual journal
- [ ] `/chat` - AI psychic chat

### 2. Set Up Authentication

Use Supabase Auth:

```typescript
import { supabase } from '@/lib/supabase'

// Sign up
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'password',
})

// Sign in
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password',
})
```

### 3. Implement Readings

Use the OpenAI helper:

```typescript
import { generateReading } from '@/lib/openai'

const reading = await generateReading(
  'tarot_3_card',
  [
    { position: 'past', card: 'The Tower' },
    { position: 'present', card: 'The Star' },
    { position: 'future', card: 'The Sun' },
  ],
  'I'm considering a career change',
  userProfile
)
```

### 4. Add Payments

Integrate Stripe for subscriptions:

```bash
npm install @stripe/stripe-js stripe
```

## 📚 Documentation

Refer to these documents for detailed information:

- **[PRODUCT_REQUIREMENTS.md](../PRODUCT_REQUIREMENTS.md)** - Full feature spec
- **[AI_PROMPTS.md](../AI_PROMPTS.md)** - AI system prompts
- **[DATABASE_SCHEMA.md](../DATABASE_SCHEMA.md)** - Database structure
- **[UI_UX_WIREFRAMES.md](../UI_UX_WIREFRAMES.md)** - Screen designs
- **[TECH_STACK.md](../TECH_STACK.md)** - Technology decisions
- **[MONETIZATION_STRATEGY.md](../MONETIZATION_STRATEGY.md)** - Business model

## 🎯 Development Checklist

### Week 1: Foundation
- [x] Initialize Next.js project
- [x] Set up design system
- [x] Create landing page
- [ ] Set up Supabase
- [ ] Implement authentication
- [ ] Create database schema

### Week 2-3: Core Features
- [ ] Reading generation
- [ ] Ritual library
- [ ] Spiritual journal
- [ ] Daily insights

### Week 4: Polish
- [ ] UI refinement
- [ ] Testing
- [ ] Deploy to Vercel

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

Vercel will automatically deploy on every push to main.

## 🤝 Need Help?

- **Next.js Docs**: https://nextjs.org/docs
- **Supabase Docs**: https://supabase.com/docs
- **OpenAI Docs**: https://platform.openai.com/docs
- **Stripe Docs**: https://stripe.com/docs

## ✨ What's Next?

You now have a solid foundation! The next steps are:

1. **Set up your Supabase project** and create the database
2. **Get your OpenAI API key** and test the reading generator
3. **Build the signup/login pages** using Supabase Auth
4. **Create the dashboard** and implement core features

Happy building! 🔮✨

---

*"Your intention, illuminated."*  
— Clarity Coven
