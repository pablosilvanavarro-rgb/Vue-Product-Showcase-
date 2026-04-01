import { shallowMount } from '@vue/test-utils'
import ProductList from '@/components/ProductList.vue'

describe('ProductList.vue', () => {
  it('muestra un mensaje de error visual cuando la API falla', () => {
    // 1. Simular bodega que la API falló
    const mockStore = {
      state: {
        products: [],
        apiError: true // Simulacion de error
      },
      dispatch: jest.fn()
    }

    // 2. Montar el componente con esa bodega falsa
    const wrapper = shallowMount(ProductList, {
      global: {
        mocks: { $store: mockStore }
      }
    })

    // 3. Verificar que el mensaje de error aparece en pantalla
    expect(wrapper.text()).toMatch('❌ Hubo un error de conexión')
    expect(wrapper.find('.error').exists()).toBe(true)
  })
})