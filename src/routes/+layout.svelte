
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
    justify-content: space-evenly;
    padding: 1rem;
    margin: 1px solid;
  }

  .nav a {
    text-decoration: none;
    padding: 1rem;
    color: black;
    font-size: 1.5rem;
    border-radius: 25px;
    background-color: beige;
  }

  .nav a:hover {
    background-color: white;
  }
</style>
