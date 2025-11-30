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

## Building for Production

```bash
npm run build
npm start
```

Make sure to set your environment variables in your deployment platform.

## License

Proprietary
