<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  
  const galleryItems = data.gallery || [];

</script>

<svelte:head>
  <title>Gallery | ACM at CSUF</title>
</svelte:head>

<!-- TODO: Get random images for base route. -->
<h1>ACM Gallery</h1>
<p> Here we will store pictures taken by the marketing team!!</p>
<section class="gallery">
  {#if galleryItems.length > 0}
    {#each data.gallery as item (item.id)}
      <img
        src="https://drive.google.com/thumbnail?id={item.id}&sz=s1000"
        title="Embedded Document"
        alt="img"
        referrerpolicy="no-referrer"
      />
    {/each}
  {:else}
  <p>No pictures here yet! 😔 </p>
{/if}
</section>

<style>
  .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding: 100px 0;
  }
  @media (max-width: 640px) {
    img {
      margin: 1em;
      height: 280px;
    }
  }
</style>
