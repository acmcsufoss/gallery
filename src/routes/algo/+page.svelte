<script lang="ts">
  import type { PageData } from '../$types';

  export let data: PageData;
  
  const galleryItems = data.gallery || [];

</script>
  

<svelte:head>
  <title>Gallery | Algo</title>
</svelte:head>

<body>


  <h1>  
    <div class="title">

      <div class = text-title>
        <div>Algo</div>
      </div>
      <!--
      <section class = img-title>
        <div>Algo</div>
        </section>
      -->
      <div>
      <img class = "img1" src="https://sigmawire.net/i/03/FwxcBf.png" 
      style="width:110px" alt=Algo>
      </div>

    </div>
    
  </h1> 

  <h2 class = "description">
    
    Welcome to Algo! In these workshops, you will be reviewing a variety of 
    Data Structure concepts (Concepts you will learn in CPSC 131 if you have not taken 
    this class yet.) and Dynamic Programming concepts and get a chance to practice them with Leetcode style questions!
    
   

  </h2>

  






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
</body>



<style>
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700');

* {
   font-family: 'Poppins', sans-serif; 
}
body {
  background-color: #af3fff;
} 
.description{
  border: 4px solid #f8f8f8;
  border-radius: 8px;
  color:#f8f8f8;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding: 100px 0;
    border: 4px double #f8f8f8;
    border-radius: 8px;
}
.title {
  display: flex;
  flex-direction: row;
  margin-left: 45%;
  margin-right: 50%;
}

.img1 {
 
  width: 110px;

} .text-title{
 padding-top:30px;
 color:#f8f8f8;
 font-family: 'Poppins', sans-serif; 
}


  @media (max-width: 640px) {
    iframe {
      margin: 1em;
      height: 280px;
    }
}
</style>
  