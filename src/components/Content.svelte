<script lang="ts">
    // Get from routes util file
    let team = "";
    let description = "";
    let logo = "";
    // How export component?
</script>

<!-- Team logo and description container-->
<div class="container">
    <!-- Depending on route select which colors/logo/description -->
    <img src={logo} alt="Team Logo" class="logo">
    <h1> { team } </h1>
    <p> { description } </p>
</div>

<style>
    .logo {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 100px 0;
    }
</style>