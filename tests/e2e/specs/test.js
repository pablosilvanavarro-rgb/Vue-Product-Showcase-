describe('Flujo de Catálogo de Productos', () => {
  it('El usuario filtra productos por categoría y ve los resultados', () => {
    // 1. El usuario entra a la página principal
    cy.visit('/')

    // 2. Verifica que haya tarjetas de productos cargadas
    cy.get('.product-card').should('have.length.greaterThan', 0)

    // 3. El usuario abre el menú desplegable y selecciona "Joyería" (jewelery)
    cy.get('select#categoryFilter').select('jewelery')

    // 4. Verifica visualmente que ahora solo aparecen los 2 productos de joyería
    // (Asegúrate de que en tu products.json tienes 2 productos de joyería)
    cy.get('.product-card').should('have.length', 2)
  })
})