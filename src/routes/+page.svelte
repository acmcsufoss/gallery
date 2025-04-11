<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  
  const galleryItems = data.gallery || [];

</script>

<svelte:head>
  <title>Gallery | ACM at CSUF</title>
</svelte:head>

<!-- TODO: Get random images for base route. -->
<body>
  <section class="header">
    <img src='acm_logo.png' alt="ACM CSUF logo"/>
    <h1>ACM Gallery</h1>
    <p> Here we will store pictures taken by the marketing team!!</p>
  </section>
  <section class="gallery">
    {#if galleryItems.length > 0}
      {#each data.gallery as item (item.id)}
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
</body>




<style>
  * {
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: white;
  }
  body {
    background-color: #0025ac;
  }
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
