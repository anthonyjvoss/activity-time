import { supabase } from '../lib/supabaseClient'

async function getActivityData() {
  const { data: activities } = await supabase
    .from('activities')
    .select('*')
    .order('id')

  return activities
}

async function getActivityTags() {
  const { data: activityTags } = await supabase
    .from('activityTags')
    .select('*')

  return activityTags
}

export default {
    getActivityData,
    getActivityTags
}
