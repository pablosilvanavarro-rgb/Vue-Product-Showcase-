# 🛍️ Vue Product Showcase

Una Single Page Application (SPA) desarrollada con Vue 3 que funciona como un catálogo interactivo de productos. Este proyecto demuestra la implementación de una arquitectura escalable, gestión de estado global, pruebas automatizadas y diseño visual profesional.

## 🚀 Tecnologías Utilizadas
* **Framework:** Vue 3
* **Gestión de Estado:** Vuex 4
* **Cliente HTTP:** Axios
* **Librería UI:** Vuetify 3 (Material Design)
* **Testing:** Jest (Pruebas Unitarias) y Cypress (Pruebas E2E)

## ⚙️ Instrucciones de Instalación

1. Clonar el repositorio:
En GITHUB

2. Instalar las dependencias:
npm install

3. Ejecutar el servidor de desarrollo:
npm run serve

4. Ejecutar pruebas unitarias (Jest):
npm run test:unit

5. Ejecutar pruebas de extremo a extremo (Cypress):
npm run test:e2e

Justificaciones Técnicas y Arquitectura
Gestión del Estado Global (Vuex): Se implementó Vuex para centralizar la información del catálogo y el control del Modal. Esto evita el "prop-drilling" (pasar propiedades por múltiples componentes) y permite que cualquier parte de la aplicación reaccione a cambios de estado o errores de red de forma inmediata y limpia.

Elección de UI y Diseño: Se optó por Vuetify para garantizar una interfaz responsiva, accesible y con componentes de Material Design. Esto permitió implementar un esquema de colores adaptable (Modo Claro/Oscuro) de manera nativa y rápida.

Nuxt / Quasar (Decisión Arquitectónica): Se decidió mantener el proyecto en Vue 3 puro (Vue CLI / Vite) en lugar de migrar a frameworks como Nuxt o Quasar. Dado que el alcance del proyecto es una SPA enfocada en la lógica de cliente, el Server-Side Rendering (SSR) o la generación estática (SSG) no aportarían valor crítico en esta etapa, manteniendo la aplicación más ligera y con una curva de complejidad adecuada.

Estrategia de Pruebas: Las pruebas unitarias con Jest se enfocaron en validar el renderizado aislado y la respuesta visual ante errores de la API, asegurando la robustez de los componentes base. Cypress se utilizó para validar el flujo crítico del negocio: el filtrado y visualización del catálogo desde la perspectiva del usuario final.