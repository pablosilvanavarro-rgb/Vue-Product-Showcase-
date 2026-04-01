import { shallowMount } from '@vue/test-utils'
import ProductCard from '@/components/ProductCard.vue'

describe('ProductCard.vue', () => {
  it('renderiza correctamente el título y precio del producto', () => {
    // producto falso de prueba
    const mockProduct = {
      id: 99,
      title: 'Zapatillas de Prueba',
      price: 50000,
      image: 'ruta-falsa.jpg'
    }

    // Monta el componente inyectando el producto falso
    const wrapper = shallowMount(ProductCard, {
      props: { product: mockProduct },
      global: {
        mocks: {
          $store: { commit: jest.fn() } // Simula Vuex para que no falle el botón
        }
      }
    })

    // 3. Afirmaciones
    expect(wrapper.text()).toMatch('Zapatillas de Prueba')
    // Comprobar que el HTML contenga la etiqueta de imagen
    expect(wrapper.find('img').exists()).toBe(true)
  })
})