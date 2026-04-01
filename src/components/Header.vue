<template>
  <header class="header">
    <h1>🛍️ Vue Product Showcase</h1>
    <nav>
      <a href="#">Inicio</a> | 
      <a href="#">Catálogo</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.header {
  background-color: #42b883;
  color: white;
  padding: 1rem;
  text-align: center;
}
.header a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
</style>