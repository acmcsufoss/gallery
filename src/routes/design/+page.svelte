<script lang="ts">
  import type { PageData } from '../$types';

  export let data: PageData;
  
  const galleryItems = data.gallery || [];

</script>
  
<svelte:head>
  <title>Gallery | Design</title>
</svelte:head>


<body>
<div class="Design-header">
<h1>Design</h1> <img src="design-logo.svg" alt="Design Logo" class="logo" />
</div>

<p>
  Welcome to Design! The design team is dedicated to emphasizing the importance of product design and 
  product management in the tech industry. Design focuses on educating students about design 
  principles, design tools, and the intricacies of conceptualization, development, and management 
  of a product.
</p>


<hr class="divider" />


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
</body>

<style>

  body {
    background-color: #ff406e;
  } 
  
  .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    background-color: #ff406e;
  }

  .Design-header {
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  }

  .Design-header h1 {
  font-size: 4rem;
  margin: 0;
  margin-left: 4rem;
  font-family: 'Poppins', sans-serif;
  }


  p {
  text-align: center;
  font-size: 1.75rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  font-family: 'Poppins', sans-serif;
  }

  .logo {
  width: 150px;
  height: 150px;
  }

  .divider {
  border: none;
  border-top: 2px solid #FFFFFF;
  width: 80%;
  margin: 2rem auto;
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
  