<script lang="ts">
	import { page } from '$app/stores';
	import { getColorsByRoute, getTeamnameByRoute, type Route } from '../util/routeData';
	import { getAllTeamSlugs } from '$lib/teams';

	const teamSlugs = getAllTeamSlugs();
	const routes: Route[] = ['/', ...teamSlugs.map((slug) => `/${slug}`)];
	export let currentRoute: Route;
	$: routeName = getTeamnameByRoute(currentRoute);
	$: colors = getColorsByRoute(currentRoute);
</script>

<nav style="--primary-color: {colors.primaryColor}; --secondary-color: {colors.secondaryColor}">
	<div class="container">
		<div class="logo-container">
			<a href="/" class="logo">
				<img src="acm-logo.svg" class="badge" alt="acmCSUF badge" />
			</a>
		</div>
		<h1>{routeName} Gallery</h1>
	</div>
	<div class="links-container">
		{#each routes as route}
			{#if route === '/'}
				<a href={route} class="link" class:link-active={$page.url.pathname === route}
					>{getTeamnameByRoute(route)}</a
				>
			{:else}
				<a
					href={route}
					class="link"
					class:link-active={$page.url.pathname === route}
					data-sveltekit-reload>{getTeamnameByRoute(route)}</a
				>
			{/if}
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
		position: sticky;
		top: 0;
		z-index: 100;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}

	nav .container {
		width: 100%;
		color: white;
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 2rem;
		background: linear-gradient(
			135deg,
			var(--primary-color, #1e6cff) 0%,
			var(--secondary-color, #082863) 100%
		);
	}

	nav .container h1 {
		font-size: 1.8rem;
		font-weight: 600;
		margin: 0;
		text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
		letter-spacing: -0.02em;
	}

	nav .container .logo-container .logo {
		display: flex;
		align-items: center;
		text-decoration: none;
		transition: transform 0.3s ease;
	}

	nav .container .logo-container .logo:hover {
		transform: scale(1.05);
	}

	nav .container .logo-container .logo .badge {
		height: 48px;
		width: auto;
		filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
		transition: filter 0.3s ease;
	}

	nav .links-container {
		padding: 1rem 2rem;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.75rem;
		background: var(--secondary-color, #082863);
		opacity: 0.8;
		backdrop-filter: blur(10px);
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		flex-wrap: wrap;
	}

	nav .links-container .link {
		padding: 0.75rem 1.5rem;
		text-decoration: none;
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-radius: 25px;
		background: rgba(255, 255, 255, 0.1);
		color: white;
		font-weight: 500;
		font-size: 0.95rem;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		backdrop-filter: blur(10px);
		position: relative;
		overflow: hidden;
	}

	nav .links-container .link::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
		transition: left 0.5s ease;
	}

	nav .links-container .link:hover::before {
		left: 100%;
	}

	nav .links-container .link:hover {
		background: rgba(255, 255, 255, 0.25);
		border-color: rgba(255, 255, 255, 0.6);
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
	}

	nav .links-container .link-active {
		background: rgba(255, 255, 255, 0.95);
		color: var(--primary-color, #1e6cff);
		border-color: rgba(255, 255, 255, 0.8);
		font-weight: 600;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
	}

	nav .links-container .link-active:hover {
		background: rgba(255, 255, 255, 1);
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
	}

	@media (max-width: 768px) {
		nav .container {
			padding: 0.75rem 1rem;
		}

		nav .container h1 {
			font-size: 1.4rem;
		}

		nav .container .logo-container .logo .badge {
			height: 36px;
		}

		nav .links-container {
			padding: 0.75rem 1rem;
			gap: 0.5rem;
		}

		nav .links-container .link {
			padding: 0.6rem 1rem;
			font-size: 0.85rem;
		}
	}
</style>
