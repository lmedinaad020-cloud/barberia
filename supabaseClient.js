const SUPABASE_URL = 'https://zmvuueizrehqibjjcbgd.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptdnV1ZW6l6cmVocWliampjYmdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk3NTY0MDMsImV4cCI6MjEwNTMzMjQwM30.HVgy61_hS7ecm7sHM2z5hKtb7r1LXesIjfoH5lZG8M';

window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storage: window.localStorage
  }
});
