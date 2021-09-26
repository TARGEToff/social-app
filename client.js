import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    "https://hfsguwdfjozkoprtomuv.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMjY2NTIzNSwiZXhwIjoxOTQ4MjQxMjM1fQ.KJJ4kuF9qObbDmPXPieiQofwM6KQC1H61kTAcnWDUaA"
);

async function signInWith(provider) {
    const { user, session, error } = await supabase.auth.signIn({
        provider,
    }, {
        redirectTo: "http://localhost:3000/home",
    });
}

export { supabase, signInWith }