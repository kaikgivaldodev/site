import { createClient } from '@supabase/supabase-js';

// Substitua pelos seus valores da Supabase
const supabaseUrl = 'https://<SEU-PROJETO>.supabase.co';
const supabaseAnonKey = '<SUA-CHAVE-ANONIMA>';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
