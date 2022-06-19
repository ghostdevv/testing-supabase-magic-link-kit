<script lang="ts">
    import { loggedIn, supabase } from '$lib/db';
    import { page } from '$app/stores';

    let email: string;

    let working = false;

    async function go() {
        working = true;

        const { error } = await supabase.auth.signIn(
            { email },
            { redirectTo: `${$page.url.origin}/protected` },
        );

        if (error) {
            console.error('Login/Signup error', error);
            alert(`There was an error, check console`);
        } else {
            alert('Check your email for magic link');
        }

        working = false;
    }
</script>

<section class="col">
    <h4>Login / Signup</h4>

    <div class="row">
        <input
            type="email"
            placeholder="email"
            autocomplete="email"
            bind:value={email}
            disabled={working} />
    </div>

    <button disabled={working} on:click={go}>Go</button>
</section>

{#if $loggedIn}
    <section>
        <h3>
            You are logged in, go to <a href="/protected">/protected</a>?
        </h3>
    </section>
{/if}

<style>
    section {
        padding: 0 16px;
        gap: 22px;
    }
</style>
