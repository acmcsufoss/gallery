<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	import '../styles.css';
	import { page } from '$app/stores';
	import type { Route } from '../util/routeData';

	$: currentRoute = $page.url.pathname as Route;
</script>

<Navbar {currentRoute} />
<!-- <Content/> -->

<main>
	<slot />
</main>
