# Authorly

**Prove You Wrote It** - Stop false AI-detection accusations with cryptographically verified authorship trails.

## Landing Page & Waitlist

This is the landing page and waitlist signup for Authorly, a tool that helps students prove they wrote their essays by capturing their complete writing process with blockchain verification.

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Run the migration script in Supabase SQL Editor:
   ```bash
   # Copy the contents of scripts/migrations/001_create_waitlist.sql
   # and run it in your Supabase SQL Editor
   ```

3. Get your Supabase credentials:
   - Go to Project Settings > API
   - Copy the Project URL and anon/public key

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

## Features

- **Location-based pricing**: Automatically shows USD ($21.99) for US visitors, EUR (€19.99) for others
- **Comprehensive waitlist form**:
  - Email capture
  - Use case selection (School, High School, College Admissions, Research Paper, Graduate Thesis)
  - **Multi-select writing tools** (Microsoft Word, Google Docs, LibreOffice, Notion, Scrivener, LaTeX, Markdown, Other)
  - False AI accusation tracking (self and friends/family)
  - Optional anonymous testimonials (publicly displayed)
  - Urgency assessment (next two weeks, this semester, next semester)
  - Referral source tracking
  - Price validation (would they pay €19.99/month)
- **Supabase integration**: All submissions stored securely with analytics
- **Public testimonials API**: Display anonymous stories from falsely accused users
- **Responsive design**: Mobile-first, looks great on all devices
- **Privacy-focused**: Clear messaging about data protection

## Database Schema

The waitlist table includes:
- Email (unique)
- Use case
- Current writing tools (array - multi-select)
- Other writing tool (text field)
- Falsely accused (boolean)
- Friends/family accused (boolean)
- Anonymous comment (text)
- Urgency (next-two-weeks, this-semester, next-semester)
- Referral source
- Willing to pay (boolean)
- Country code detection
- Currency shown to user
- User agent and IP tracking (for analytics)
- Timestamps

See `scripts/migrations/001_create_waitlist.sql` for the complete schema.

## Analytics

The database includes a built-in analytics view (`waitlist_analytics`) that tracks:
- Total signups and days active
- Breakdown by use case
- Breakdown by current writing tools (supports multi-select)
- False accusation statistics (self and friends/family)
- Testimonial count
- Urgency breakdown
- Price validation (willing to pay vs not)
- Geographic distribution (USD vs EUR visitors)

## Public Testimonials

The database includes a `public_testimonials` view that:
- Shows anonymous comments from users who were falsely accused
- Includes use case and creation date
- Can be fetched via `/api/testimonials` endpoint
- Can be displayed on the landing page to build social proof

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This is a Next.js app and can be deployed to:
- Vercel (recommended, one-click deployment)
- Netlify
- Any Node.js hosting platform

Make sure to set your environment variables in your deployment platform.

## License

Proprietary
