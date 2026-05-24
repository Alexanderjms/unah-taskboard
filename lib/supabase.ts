import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://fcovxrdfvxjnrmjjvjvn.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjb3Z4cmRmdnhqbnJtamp2anZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk2MzE1OTgsImV4cCI6MjA5NTIwNzU5OH0.cvTVl7ET_jhGzJcjJPZyjmzEz00TtUXLh7xQR6R-z3k";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
