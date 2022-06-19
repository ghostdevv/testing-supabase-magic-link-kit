/// <reference types="@sveltejs/kit" />

declare namespace App {
    interface Locals {
        user: import('@supabase/supabase-js').User;
        error: import('@supabase/supabase-js').ApiError;
        accessToken?: string;
    }

    interface Session {
        user: import('@supabase/supabase-js').User;
        accessToken?: string;
    }
}
