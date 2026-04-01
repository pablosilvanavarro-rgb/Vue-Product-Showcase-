<template>
  <v-card class="mx-auto product-card" max-width="344" hover>
    <v-img :src="product.image" height="200px" class="bg-white" contain></v-img>
    
    <v-card-title>{{ product.title }}</v-card-title>
    
    <v-card-subtitle class="text-h6 text-primary pb-2 font-weight-bold">
      ${{ product.price }}
    </v-card-subtitle>
    
    <v-card-actions>
      <v-btn color="primary" variant="elevated" block @click="openModal">
        Ver Detalles
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    openModal() {
      this.$store.commit('SET_SELECTED_PRODUCT', this.product);
    }
  }
}
</script>