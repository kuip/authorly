-- Create authorly_waitlist table
CREATE TABLE IF NOT EXISTS authorly_waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  use_case VARCHAR(50) NOT NULL CHECK (use_case IN ('school', 'high-school', 'college-admissions', 'research-paper', 'graduate-thesis', 'other')),
  other_use_case VARCHAR(255), -- Only filled if use_case is 'other'
  current_writing_tools TEXT[] NOT NULL, -- Array of writing tools
  other_writing_tool VARCHAR(255), -- Only filled if 'other' is in current_writing_tools
  falsely_accused BOOLEAN NOT NULL,
  friends_family_accused BOOLEAN NOT NULL,
  anonymous_comment TEXT, -- Optional comment if falsely_accused is true
  urgency VARCHAR(50) NOT NULL CHECK (urgency IN ('now', 'this-semester', 'next-semester')),
  referral_source VARCHAR(100) NOT NULL, -- How they heard about us
  country_code VARCHAR(2), -- ISO 3166-1 alpha-2 country code (e.g., 'US', 'DE', 'FR')
  detected_currency VARCHAR(3), -- Currency shown to user (e.g., 'USD', 'EUR')
  user_agent TEXT,
  ip_address INET,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_authorly_waitlist_email ON authorly_waitlist(email);

-- Create index on created_at for analytics
CREATE INDEX IF NOT EXISTS idx_authorly_waitlist_created_at ON authorly_waitlist(created_at DESC);

-- Create index on use_case for analytics
CREATE INDEX IF NOT EXISTS idx_authorly_waitlist_use_case ON authorly_waitlist(use_case);

-- Create index on urgency for analytics
CREATE INDEX IF NOT EXISTS idx_authorly_waitlist_urgency ON authorly_waitlist(urgency);

-- Create index on referral_source for analytics
CREATE INDEX IF NOT EXISTS idx_authorly_waitlist_referral_source ON authorly_waitlist(referral_source);

-- Create index on falsely_accused for analytics
CREATE INDEX IF NOT EXISTS idx_authorly_waitlist_falsely_accused ON authorly_waitlist(falsely_accused);

-- Enable Row Level Security (RLS)
ALTER TABLE authorly_waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting (anyone can sign up)
CREATE POLICY "Anyone can insert authorly_waitlist entries"
  ON authorly_waitlist
  FOR INSERT
  WITH CHECK (true);

-- Create policy for reading (only authenticated users can read - for admin dashboard)
CREATE POLICY "Only authenticated users can read authorly_waitlist"
  ON authorly_waitlist
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_authorly_waitlist_updated_at
  BEFORE UPDATE ON authorly_waitlist
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Analytics view for dashboard (optional)
CREATE OR REPLACE VIEW authorly_waitlist_analytics AS
SELECT
  COUNT(*) as total_signups,
  COUNT(DISTINCT DATE(created_at)) as days_active,
  -- Use case breakdown
  COUNT(CASE WHEN use_case = 'college-admissions' THEN 1 END) as college_admissions_count,
  COUNT(CASE WHEN use_case = 'high-school' THEN 1 END) as high_school_count,
  COUNT(CASE WHEN use_case = 'school' THEN 1 END) as school_count,
  COUNT(CASE WHEN use_case = 'research-paper' THEN 1 END) as research_paper_count,
  COUNT(CASE WHEN use_case = 'graduate-thesis' THEN 1 END) as graduate_thesis_count,
  -- Writing tools (count users who selected each)
  COUNT(CASE WHEN 'google-docs' = ANY(current_writing_tools) THEN 1 END) as google_docs_count,
  COUNT(CASE WHEN 'microsoft-word' = ANY(current_writing_tools) THEN 1 END) as microsoft_word_count,
  COUNT(CASE WHEN 'libre-office' = ANY(current_writing_tools) THEN 1 END) as libre_office_count,
  COUNT(CASE WHEN 'notion' = ANY(current_writing_tools) THEN 1 END) as notion_count,
  COUNT(CASE WHEN 'scrivener' = ANY(current_writing_tools) THEN 1 END) as scrivener_count,
  COUNT(CASE WHEN 'latex' = ANY(current_writing_tools) THEN 1 END) as latex_count,
  COUNT(CASE WHEN 'markdown' = ANY(current_writing_tools) THEN 1 END) as markdown_count,
  COUNT(CASE WHEN 'other' = ANY(current_writing_tools) THEN 1 END) as other_count,
  -- AI Accusation stats
  COUNT(CASE WHEN falsely_accused = true THEN 1 END) as falsely_accused_count,
  COUNT(CASE WHEN friends_family_accused = true THEN 1 END) as friends_family_accused_count,
  COUNT(CASE WHEN anonymous_comment IS NOT NULL AND anonymous_comment != '' THEN 1 END) as testimonial_count,
  -- Urgency breakdown
  COUNT(CASE WHEN urgency = 'now' THEN 1 END) as urgency_now,
  COUNT(CASE WHEN urgency = 'this-semester' THEN 1 END) as urgency_this_semester,
  COUNT(CASE WHEN urgency = 'next-semester' THEN 1 END) as urgency_next_semester,
  -- Geographic
  COUNT(CASE WHEN detected_currency = 'USD' THEN 1 END) as usd_visitors,
  COUNT(CASE WHEN detected_currency = 'EUR' THEN 1 END) as eur_visitors
FROM authorly_waitlist;

-- Create view for public testimonials (anonymous comments from those falsely accused)
CREATE OR REPLACE VIEW authorly_public_testimonials AS
SELECT
  anonymous_comment,
  use_case,
  created_at
FROM authorly_waitlist
WHERE falsely_accused = true
  AND anonymous_comment IS NOT NULL
  AND anonymous_comment != ''
ORDER BY created_at DESC;
