import { createClient } from '@supabase/supabase-js'

async function getActivityData () {
  const supabaseAdmin = createClient(
    import.meta.env.VITE_PUBLIC_SUPABASE_URL || '',
    import.meta.env.VITE_PUBLIC_SUPABASE_KEY || ''
  )

  const { data: activities } = await supabaseAdmin
    .from('activities')
    .select('*')
    .order('id')

  return activities
}

export default {
    getActivityData
}
