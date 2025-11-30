import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('public_testimonials')
      .select('*')
      .limit(10)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ testimonials: data })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 })
  }
}
