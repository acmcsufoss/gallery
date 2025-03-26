<script lang="ts">
  import type { PageData } from '../$types';

  export let data: PageData;
  
  const galleryItems = data.gallery || [];

</script>
  
<svelte:head>
  <title>Gallery | AI</title>
</svelte:head>

<div class="AI-header">
<h1>AI</h1><img src="/AILogo.png" alt="AI Logo" class="logo" />
</div>
<p>AI focuses on fun Artificial Intelligence and Machine Learning projects geared towards beginners in the field.</p>
<section class="gallery">
  {#if galleryItems.length > 0}
    {#each galleryItems as item (item.id)}
      <img
      src="https://drive.google.com/thumbnail?id={item.id}&sz=s1000"
      title="Embedded Document"
      alt="img"
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
    background-color: #35E792;
  }
  .AI-header {
  display: flex;
  align-items: center;
  gap: 10px;
  }
  .logo {
  width: 40px;
  height: 40px;
  }
  @media (max-width: 640px) {
    img {
      margin: 1em;
      height: 280px;
    }
  }
</style>
  