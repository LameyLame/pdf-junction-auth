import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// Public (anon) credentials. Override via .env (see .env.example); the literals
// keep the Lovable-hosted build working without any env configuration.
export const SUPABASE_URL: string =
  import.meta.env.VITE_SUPABASE_URL || "https://lfbcdlnzqxwvfnvmarna.supabase.co";
export const SUPABASE_PUBLISHABLE_KEY: string =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmYmNkbG56cXh3dmZudm1hcm5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzMjkyNzEsImV4cCI6MjA1ODkwNTI3MX0.oX28LB9p4n7ts4XAfo4SoThWKz3CDO9-bhNYb9KMOq0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
