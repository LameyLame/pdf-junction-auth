import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// Public (anon) credentials. Override via .env (see .env.example); the literals
// keep the Lovable-hosted build working without any env configuration.
export const SUPABASE_URL: string =
  import.meta.env.VITE_SUPABASE_URL || "https://eoqwbhiskvavaylmjtfo.supabase.co";
export const SUPABASE_PUBLISHABLE_KEY: string =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  "sb_publishable_suA0OrXgLds4ddg3_pqDHA_jxTMKKtK";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
