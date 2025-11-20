import { createClient, SupabaseClient } from '@supabase/supabase-js'

let supabaseInstance: SupabaseClient | null = null

export interface SupabaseConfig {
  url: string
  anonKey: string
}

export function initializeSupabase(config: SupabaseConfig): SupabaseClient {
  if (!config.url || !config.anonKey) {
    throw new Error('Missing Supabase configuration: url and anonKey are required')
  }

  supabaseInstance = createClient(config.url, config.anonKey)
  return supabaseInstance
}

export function getSupabase(): SupabaseClient {
  if (!supabaseInstance) {
    throw new Error('Supabase client not initialized. Call initializeSupabase() first.')
  }
  return supabaseInstance
}

export { SupabaseClient }

