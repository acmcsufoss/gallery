<script lang="ts">
  import type { PageData } from '../$types';

  export let data: PageData;
  
  const galleryItems = data.gallery || [];

</script>
  
<svelte:head>
  <title>Gallery | General</title>
</svelte:head>

<h1>General</h1>
<section class="gallery">
  {#if galleryItems.length > 0}
    {#each galleryItems as item (item.id)}
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

  .gallery img {
    border: 4px solid #FFFFFF;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 500px;
    height: auto;
  }

  @media (max-width: 640px) {
    img {
      margin: 1em;
      height: 280px;
    }
  }
</style>
  