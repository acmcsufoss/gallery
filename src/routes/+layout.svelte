<script lang="ts">
	import Navbar from "../components/Navbar.svelte";
    import '../styles.css'
    import {page} from '$app/stores';
	import type { route } from "../util/routeData";

    const currentRoute = $page.url.pathname as route;


</script>
<Navbar currentRoute={currentRoute}/>

<main>
    <slot />
</main>