import { serve } from "https://deno.land/std@0.119.0/http/server.ts";

serve(() => new Response("Hello Deno\n"));