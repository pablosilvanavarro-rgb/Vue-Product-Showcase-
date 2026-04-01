import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  // 1. STATE
  state: {
    products: [],
    selectedProduct: null,
    isModalOpen: false,
    apiError: false // Guardar si error
  },

  // 2. MUTATIONS
  mutations: {

    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_ERROR(state, hasError) {
      state.apiError = hasError;
    }, 
    SET_SELECTED_PRODUCT(state, product) {
      state.selectedProduct = product;
      state.isModalOpen = true; // Abre el modal automáticamente
    },
    CLOSE_MODAL(state) {
      state.isModalOpen = false;
      state.selectedProduct = null;
    }
  },

  // 3. ACTIONS
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get('/products.json');
        commit('SET_PRODUCTS', response.data); 
        commit('SET_ERROR', false); 
      } catch (error) {
        commit('SET_ERROR', true); // Si falla, activa el error
        console.error("Error cargando productos:", error);
      }
    }
  }
});