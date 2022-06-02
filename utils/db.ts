import { createClient } from "@supabase/supabase-js";

const apiURL = process.env.NEXT_PUBLIC_API_URL as string;
const key = process.env.NEXT_PUBLIC_API_PUBLIC_KEY as string;

console.log({ apiURL, key });

const db = createClient(apiURL, key);

export default db;
