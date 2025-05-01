<script lang="ts">
	import { page } from '$app/stores';
	import { getColorsByRoute, getTeamnameByRoute, type Route } from '../util/routeData';
	const routes: Route[] = [
		'/ai',
		'/algo',
		'/design',
		'/dev',
		'/game-dev',
		'/general',
		'/icpc',
		'/oss'
	];
	export let currentRoute: Route;
	$: routeName = getTeamnameByRoute(currentRoute);
	$: colors = getColorsByRoute(currentRoute);
</script>

<nav>
	<div class="container" style="background-color: {colors.primaryColor}">
		<div class="logo-container">
			<a href="/" class="logo">
				<img src="acm-logo.svg" class="badge" alt="acmCSUF badge" />
			</a>
		</div>
		<h1>{routeName} Gallery</h1>
	</div>
	<div class="links-container" style="background-color: {colors.secondaryColor}">
		{#each routes as route}
			<a href={route} class="link" class:link-active={$page.url.pathname === route}
				>{getTeamnameByRoute(route)}</a
			>
		{/each}
	</div>
	<!-- TODO: Make navbar responsive by implementing mobile version of navbar, 
	 hiding current links container and instead showing a dropdown -->
</nav>

<style>
	nav {
		display: flex;
		width: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		gap: 0;
	}

	nav .container {
		width: 100%;
		color: white;
		display: flex;
		gap: 0.5rem;
		padding-left: 1rem;
	}

	nav .container .logo-container .logo {
		display: flex;
		align-items: center;
		text-decoration: none;
		gap: 4px;
	}

	nav .container .logo-container .logo .badge {
		height: 64px;
		width: auto;
		filter: drop-shadow(0 1.5px 4.5px rgba(44, 145, 198, 0.5));
	}

	nav .links-container {
		padding: 0.5rem 1rem;
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		align-content: center;
		text-align: center;
		gap: 1rem;
	}

	nav .links-container .link {
		padding: 0.5rem 1.5rem;
		text-decoration: none;
		border: 1px solid white;
		border-radius: 15px;
		background-color: transparent;
		color: white;
		box-shadow: 0 1.5px 4.5px rgba(44, 145, 198, 0.5);
	}

	nav .links-container .link:hover {
		background-color: white;
		color: gray;
	}

	nav .links-container .link-active {
		color: black;
		background-color: white;
	}
</style>
