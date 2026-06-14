import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
const supabase = createClient(
  "https://bdwwiokeojuqmwyfusos.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkd3dpb2tlb2p1cW13eWZ1c29zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5MjYzNjEsImV4cCI6MjA5NjUwMjM2MX0.fkoEnI5pzSJIiQL1UF8pna3HqzFQR9NixWKTX3XOgzI"
);
export {
  supabase as s
};
