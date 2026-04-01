<template>
  <v-dialog v-model="isOpen" max-width="600px">
    <v-card v-if="product" class="pa-4">
      <v-img :src="product.image" height="300px" contain class="bg-white mb-4"></v-img>
      
      <v-card-title class="text-h5 text-wrap">{{ product.title }}</v-card-title>
      
      <v-card-text>
        <p class="text-body-1 mb-4">{{ product.description }}</p>
        <v-chip color="secondary" variant="flat" class="mr-2 mb-2">{{ product.category }}</v-chip>
        <div class="text-h5 text-primary font-weight-bold mt-2">${{ product.price }}</div>
      </v-card-text>
      
      <v-card-actions>
        <v-spacer></v-spacer> <v-btn color="error" variant="text" @click="closeModal">Cerrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ProductModal',
  computed: {
    product() {
      return this.$store.state.selectedProduct;
    },
    //get/set para que el v-model de Vuetify funcione en Vuex sin errores
    isOpen: {
      get() {
        return this.$store.state.isModalOpen;
      },
      set(value) {
        if (!value) {
          this.closeModal();
        }
      }
    }
  },
  methods: {
    closeModal() {
      this.$store.commit('CLOSE_MODAL');
    }
  }
}
</script>