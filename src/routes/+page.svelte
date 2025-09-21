<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const galleryItems = data.gallery || [];
</script>

<svelte:head>
	<title>Gallery | ACM at CSUF</title>
</svelte:head>

<!-- Modern Hero Section -->
<section class="hero-section">
	<div class="header">
		<h1>Association for Computing Machinery</h1>
		<img src="acm-logo.svg" alt="ACM Logo" class="logo" />
	</div>

	<p class="description">
		Welcome to the largest Computer Science community at CSUF! Our goal is to expose passionate
		people of all levels to grow their skills in a collaborative community.
	</p>

	<hr class="divider" />
</section>

<!-- Gallery Section -->
<section class="gallery-section">
	<div class="gallery">
		{#if galleryItems.length > 0}
			{#each galleryItems as item (item.id)}
				<div class="gallery-item">
					<img
						src="https://drive.google.com/thumbnail?id={item.id}&sz=s1000"
						alt="ACM community event"
						referrerpolicy="no-referrer"
						loading="lazy"
					/>
				</div>
			{/each}
		{:else}
			<div class="empty-state">
				<h3>No pictures here yet!</h3>
				<p>Check back soon for amazing photos from our community events �</p>
			</div>
		{/if}
	</div>
</section>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background: linear-gradient(135deg, #1e6cff 0%, #082863 100%);
		min-height: 100vh;
		color: white;
	}

	.hero-section {
		background: linear-gradient(135deg, #1e6cff 0%, #082863 100%);
		padding: 4rem 2rem 3rem;
		text-align: center;
		position: relative;
		overflow: hidden;
	}

	.hero-section::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
			repeat;
		pointer-events: none;
	}

	.header {
		position: relative;
		z-index: 2;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		margin-bottom: 2rem;
		flex-wrap: wrap;
	}

	.header h1 {
		font-size: clamp(2.5rem, 5vw, 4rem);
		margin: 0;
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		background: linear-gradient(45deg, #ffffff, #e3f2fd);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
		line-height: 1.1;
	}

	.logo {
		width: clamp(100px, 15vw, 150px);
		height: clamp(100px, 15vw, 150px);
		filter: drop-shadow(0 8px 25px rgba(0, 0, 0, 0.3));
		animation: float 6s ease-in-out infinite;
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0px) rotate(0deg);
		}
		33% {
			transform: translateY(-10px) rotate(1deg);
		}
		66% {
			transform: translateY(-5px) rotate(-1deg);
		}
	}

	.description {
		position: relative;
		z-index: 2;
		text-align: center;
		font-size: clamp(1.1rem, 2.5vw, 1.5rem);
		max-width: 900px;
		margin: 0 auto 3rem;
		padding: 0 1rem;
		font-family: 'Poppins', sans-serif;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.9);
		font-weight: 300;
	}

	.divider {
		border: none;
		height: 2px;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
		width: 60%;
		margin: 3rem auto;
		border-radius: 2px;
	}

	.gallery-section {
		padding: 3rem 2rem;
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(10px);
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
		max-width: 1400px;
		margin: 0 auto;
		padding: 2rem 0;
	}

	.gallery-item {
		position: relative;
		overflow: hidden;
		border-radius: 15px;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		aspect-ratio: 16/10;
	}

	.gallery-item:hover {
		transform: translateY(-8px) scale(1.02);
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
		border-color: rgba(255, 255, 255, 0.4);
	}

	.gallery img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 14px;
		transition: transform 0.4s ease;
	}

	.gallery-item:hover img {
		transform: scale(1.05);
	}

	.gallery-item::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(45deg, rgba(30, 108, 255, 0.1), rgba(8, 40, 99, 0.1));
		opacity: 0;
		transition: opacity 0.3s ease;
		border-radius: 15px;
		z-index: 1;
	}

	.gallery-item:hover::before {
		opacity: 1;
	}

	.empty-state {
		text-align: center;
		padding: 4rem 2rem;
		color: rgba(255, 255, 255, 0.7);
	}

	.empty-state h3 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		font-weight: 500;
	}

	.empty-state p {
		font-size: 1rem;
		margin: 0;
	}

	@media (max-width: 768px) {
		.hero-section {
			padding: 3rem 1rem 2rem;
		}

		.header {
			gap: 1rem;
		}

		.gallery {
			grid-template-columns: 1fr;
			gap: 1.5rem;
			padding: 1rem 0;
		}

		.gallery-section {
			padding: 2rem 1rem;
		}
	}

	@media (max-width: 480px) {
		.gallery {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.gallery-item {
			aspect-ratio: 4/3;
		}
	}
</style>
