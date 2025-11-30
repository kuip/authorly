-- Authorly Waitlist Analytics Queries
-- Use these queries in your Supabase SQL Editor to analyze waitlist data

-- 1. Get overall analytics
SELECT * FROM authorly_waitlist_analytics;

-- 2. Get all public testimonials
SELECT * FROM authorly_public_testimonials;

-- 3. Top referral sources
SELECT
  referral_source,
  COUNT(*) as count
FROM authorly_waitlist
GROUP BY referral_source
ORDER BY count DESC;

-- 4. Urgency breakdown
SELECT
  urgency,
  COUNT(*) as total
FROM authorly_waitlist
GROUP BY urgency
ORDER BY
  CASE urgency
    WHEN 'now' THEN 1
    WHEN 'this-semester' THEN 2
    WHEN 'next-semester' THEN 3
  END;

-- 5. False accusation statistics
SELECT
  falsely_accused,
  COUNT(*) as total_users
FROM authorly_waitlist
GROUP BY falsely_accused;

-- 6. Most popular writing tool combinations
SELECT
  current_writing_tools,
  COUNT(*) as count
FROM authorly_waitlist
GROUP BY current_writing_tools
ORDER BY count DESC
LIMIT 20;

-- 7. Daily signups trend
SELECT
  DATE(created_at) as date,
  COUNT(*) as signups
FROM authorly_waitlist
GROUP BY DATE(created_at)
ORDER BY date DESC;

-- 8. Use case vs urgency matrix
SELECT
  use_case,
  COUNT(CASE WHEN urgency = 'now' THEN 1 END) as now,
  COUNT(CASE WHEN urgency = 'this-semester' THEN 1 END) as this_semester,
  COUNT(CASE WHEN urgency = 'next-semester' THEN 1 END) as next_semester,
  COUNT(*) as total
FROM authorly_waitlist
GROUP BY use_case
ORDER BY total DESC;

-- 9. Geographic distribution
SELECT
  detected_currency,
  COUNT(*) as total
FROM authorly_waitlist
GROUP BY detected_currency;

-- 10. Most active writing tools (any mention in multi-select)
SELECT
  tool,
  count
FROM (
  SELECT
    unnest(current_writing_tools) as tool,
    COUNT(*) as count
  FROM authorly_waitlist
  GROUP BY unnest(current_writing_tools)
) t
ORDER BY count DESC;

-- 11. Export urgent leads
SELECT
  email,
  use_case,
  urgency,
  referral_source,
  falsely_accused,
  created_at
FROM authorly_waitlist
WHERE urgency IN ('now', 'this-semester')
ORDER BY
  CASE urgency
    WHEN 'now' THEN 1
    WHEN 'this-semester' THEN 2
  END,
  created_at DESC;

-- 12. Network effect analysis
SELECT
  COUNT(*) as total_signups,
  COUNT(CASE WHEN falsely_accused = true THEN 1 END) as direct_victims,
  COUNT(CASE WHEN falsely_accused = false AND friends_family_accused = true THEN 1 END) as indirect_victims,
  COUNT(CASE WHEN falsely_accused = false AND friends_family_accused = false THEN 1 END) as no_experience
FROM authorly_waitlist;
