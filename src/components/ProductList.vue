<template>
  <v-container>
    <h2 class="text-center my-6 text-h4 font-weight-bold">Catálogo de Productos</h2>
    
    <v-alert v-if="$store.state.apiError" type="error" class="mb-6" variant="tonal">
      Hubo un error de conexión al cargar el catálogo.
    </v-alert>

    <v-row justify="center" class="mb-6">
      <v-col cols="12" sm="6" md="4">
        <v-select
          v-model="selectedCategory"
          :items="categories"
          item-title="text"
          item-value="value"
          label="Filtrar por categoría"
          variant="outlined"
          prepend-inner-icon="mdi-filter"
        ></v-select>
      </v-col>
    </v-row>

    <v-alert v-if="filteredProducts.length === 0 && !$store.state.apiError" type="info" variant="tonal" class="mb-6">
      No hay productos para mostrar en esta categoría.
    </v-alert>

    <v-row v-else>
      <v-col v-for="item in filteredProducts" :key="item.id" cols="12" sm="6" md="4" lg="3">
        <ProductCard :product="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  name: 'ProductList',
  components: {
    ProductCard
  },
  data() {
    return {
      selectedCategory: '',
      // un array de objetos para el v-select de Vuetify 
      categories: [
        { text: 'Todas las categorías', value: '' },
        { text: 'Electrónica', value: 'electronics' },
        { text: 'Joyería', value: 'jewelery' },
        { text: 'Ropa de Hombre', value: "men's clothing" },
        { text: 'Ropa de Mujer', value: "women's clothing" }
      ]
    }
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    filteredProducts() {
      if (this.selectedCategory === '') {
        return this.products;
      }
      return this.products.filter(product => product.category === this.selectedCategory);
    }
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  }
}
</script>