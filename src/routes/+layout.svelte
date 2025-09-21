<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	import '../styles.css';
	import { page } from '$app/stores';
	import type { Route } from '../util/routeData';
	import { onMount } from 'svelte';

	$: currentRoute = $page.url.pathname as Route;

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<div class="app" class:mounted>
	<Navbar {currentRoute} />

	<main class="main-content">
		<slot />
	</main>
</div>

<style>
	.app {
		min-height: 100vh;
		opacity: 0;
		transform: translateY(10px);
		transition: all 0.3s ease-out;
	}

	.app.mounted {
		opacity: 1;
		transform: translateY(0);
	}

	.main-content {
		position: relative;
		z-index: 1;
	}

	/* Smooth page transitions */
	:global(.main-content > *) {
		animation: fadeInUp 0.6s ease-out;
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
