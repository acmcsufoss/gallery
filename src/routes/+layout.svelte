<script>
  import "../styles.css";
</script>
<nav class="nav">
  <a href="/">Home</a>
  <a href="/ai">AI</a>
  <a href=/algo>Algo</a>
  <a href="/design">About</a>
  <a href="/dev">Dev</a>
  <a href="game-dev">Game-Dev</a>
  <a href="/general">General</a>
  <a href="/icpc">ICPC</a>
  <a href="/oss">OSS</a>
</nav>


<main>
  <slot />
</main>

<style> 
  .nav {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin: 1px solid;
    background-color: #05A3FF;
  }

  .nav a {
    text-decoration: none;
    color: rgb(255, 251, 251);
    padding: 0.25rem;
    font-size: 0.625rem;
    border-radius: 1rem;
    border: 1px solid white;
    width: 5rem;
    align-items: center;
    text-align: center;
  }

  .nav a:hover {
    /* background-color: white; */
  }
</style>
