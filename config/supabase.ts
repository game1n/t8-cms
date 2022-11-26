import { createClient } from '@supabase/supabase-js';
console.log(process.env.NEXT_APP_SUPABASE_URL);
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);