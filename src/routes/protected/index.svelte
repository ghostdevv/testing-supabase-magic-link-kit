<script>
    import { user } from '$lib/db';
</script>

<section class="col">
    <h3>User data</h3>
    <pre class="card no-hover">{JSON.stringify($user, null, 2)}</pre>
</section>
