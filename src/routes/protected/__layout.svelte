<script context="module" lang="ts">
    import type { Load } from '@sveltejs/kit';

    export const load: Load = ({ session }) => {
        if (!session.user)
            return {
                status: 307,
                redirect: '/auth',
            };

        return {
            status: 200,
        };
    };
</script>

<slot />
