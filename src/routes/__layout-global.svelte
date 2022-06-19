<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit';

    export const load: Load = ({ session }) => {
        if (session.user) {
            /**
             * This must be done here since the sveltekit $session store is not useable outside a component
             */
            user.set(session.user);
        } else {
            user.set(null);
        }

        return {
            status: 200,
        };
    };
</script>

<script>
    import { SupaAuthHelper } from '@supabase/auth-helpers-svelte';
    import { supabase, user } from '$lib/db';
    import { session } from '$app/stores';
</script>

<SupaAuthHelper supabaseClient={supabase} {session}>
    <slot />
</SupaAuthHelper>
