import { createClient } from '@supabase/supabase-js';

// Substitua pelos seus valores da Supabase
const supabaseUrl = 'https://ulkkrprfksmydrpzwnnz.supabase.co';
const supabaseAnonKey = '<eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsa2tycHJma3NteWRycHp3bm56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0NjQ3MzMsImV4cCI6MjA1OTA0MDczM30.vtx34avkzHpIbXvis1qdcalCBcb0BSrwOFJiEOcD2Ks>';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
