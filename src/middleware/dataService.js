// import { supabase } from '../lib/supabaseClient'
const client = useSupabaseClient()

async function getActivityData() {
  const { data: activities } = await client
    .from('activities')
    .select('*')
    .order('id')

  return activities
}

async function getActivityTags() {
  const { data: activityTags } = await client
    .from('activityTags')
    .select('*')

  return activityTags
}

export default {
    getActivityData,
    getActivityTags
}
