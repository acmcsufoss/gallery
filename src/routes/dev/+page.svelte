<script lang="ts">
  import type { PageData } from '../$types';

  export let data: PageData;
  
  const galleryItems = data.gallery || [];

</script>
  
<svelte:head>
  <title>Gallery | Dev</title>
</svelte:head>

<h1>Dev</h1>
<p> Pictures of Dev Team</p>
<br/>

<img
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS648Oo1OpFi3n6Dj3J6xCo9WQDtDTxo6jYbw&s"
>

<section class="gallery">
  {#if galleryItems.length > 0}
    {#each galleryItems as item (item.id)}
      <iframe
        src="https://drive.google.com/file/d/{item.id}/preview"
        title="Embedded Document"
        width="640"
        height="480"
        allow="autoplay"
        loading="lazy"
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
    iframe {
      margin: 1em;
      height: 280px;
    }
  }
</style>
  