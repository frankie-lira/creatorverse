
import { createClient } from '@supabase/supabase-js';

// Replace 'insert your Project URL here' with your actual Supabase Project URL
const URL = 'https://wualqsbnccmcfolltupy.supabase.co';

// Replace 'insert your Project API key here' with your actual Supabase Project API Key
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1YWxxc2JuY2NtY2ZvbGx0dXB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2NjkzMTYsImV4cCI6MjAzNDI0NTMxNn0.LsMLDwE4af_7GcpqzYOpMBWqYP4VSWPj7D13TGk_G5M';

// Create a Supabase client
export const supabase = createClient(URL, API_KEY);

export default supabase;