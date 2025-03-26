<script lang="ts">
	import Navbar from "../components/Navbar.svelte";
  import Content from "../components/Content.svelte";
  import '../styles.css'
  import {page} from '$app/stores';
	import type { route } from "../util/routeData";

    $: currentRoute = $page.url.pathname as route;


</script>
<Navbar currentRoute={currentRoute}/>
<Content/>

<main>
    <slot />
</main>