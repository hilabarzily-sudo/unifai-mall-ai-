import { getSupabase } from '../client'

export const authService = {
  // Sign in with Google
  async signInWithGoogle() {
    try {
      const supabase = getSupabase()
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google'
      })
      
      if (error) throw error
      return { data, error: null }
    } catch (error: any) {
      return { data: null, error: error.message }
    }
  },

  // Sign in with email
  async signInWithEmail(email: string, password: string) {
    try {
      const supabase = getSupabase()
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      
      if (error) throw error
      return { data, error: null }
    } catch (error: any) {
      return { data: null, error: error.message }
    }
  },

  // Sign up with email
  async signUpWithEmail(email: string, password: string) {
    try {
      const supabase = getSupabase()
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      })
      
      if (error) throw error
      return { data, error: null }
    } catch (error: any) {
      return { data: null, error: error.message }
    }
  },

  // Sign out
  async signOut() {
    try {
      const supabase = getSupabase()
      const { error } = await supabase.auth.signOut()
      
      if (error) throw error
      return { error: null }
    } catch (error: any) {
      return { error: error.message }
    }
  },

  // Get current user
  async getCurrentUser() {
    try {
      const supabase = getSupabase()
      const { data: { user }, error } = await supabase.auth.getUser()
      
      if (error) throw error
      return { user, error: null }
    } catch (error: any) {
      return { user: null, error: error.message }
    }
  },

  // Get session
  async getSession() {
    try {
      const supabase = getSupabase()
      const { data: { session }, error } = await supabase.auth.getSession()
      
      if (error) throw error
      return { session, error: null }
    } catch (error: any) {
      return { session: null, error: error.message }
    }
  }
}

