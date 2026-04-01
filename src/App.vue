<template>
  <v-app :theme="theme">
    
    <v-app-bar color="primary" dark>
      <v-app-bar-title>🛍️ Vue Product Showcase</v-app-bar-title>
      <v-spacer></v-spacer>
      
      <v-btn icon @click="toggleTheme">
        <v-icon>{{ theme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny' }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <ProductList />
    </v-main>

    <ProductModal /> 

    <v-footer color="primary" class="text-center d-flex flex-column mt-10">
      <div>© 2026 Vue E-commerce. Todos los derechos reservados a Pablo Silva Navarro.</div>
    </v-footer>

  </v-app>
</template>

<script>
import ProductList from './components/ProductList.vue'
import ProductModal from './components/ProductModal.vue'

export default {
  name: 'App',
  components: {
    ProductList,
    ProductModal
  },
  data() {
    return {
      theme: 'light' 
    }
  },
  methods: {
    toggleTheme() {
      // Cambia entre claro y oscuro
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    }
  }
}
</script>

<style>

body { margin: 0; padding: 0; }
</style>