import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://gqejbdhbedmkesjnwdnw.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxZWpiZGhiZWRta2Vzam53ZG53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyMTkyMTEsImV4cCI6MjA2Mzc5NTIxMX0.G34z13AfSBkW6M6PJ-KG4AZqbq3w1cTYVoPfTnIpOvs'; 

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
