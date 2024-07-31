Este es un proyecto de aplicación web desarrollado con React. La aplicación incluye un catálogo de productos con imágenes, precios y descripciones, y una sección de contacto para que los usuarios puedan enviar mensajes.

## Descripción

El proyecto está estructurado en dos secciones principales:

1. **Catálogo de Productos**: Muestra una lista de productos con sus nombres, precios y una imagen representativa. El catálogo se adapta a diferentes tamaños de pantalla, garantizando una buena experiencia en dispositivos móviles y de escritorio.

2. **Sección de Contacto**: Permite a los usuarios enviar un mensaje a través de un formulario. La sección incluye campos para el nombre, correo electrónico y mensaje, y valida la entrada del usuario antes de permitir el envío.

## Características

- Catálogo de productos con imágenes, precios y nombres.
- Validación de formulario de contacto.
- Adaptación a dispositivos móviles.

## Instalación

Para ejecutar el proyecto en tu entorno local, sigue estos pasos:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```

2. **Navega al directorio del proyecto:**

   ```bash
   cd tu-repositorio
   ```

3. **Instala las dependencias:**

   ```bash
   npm install
   ```

4. **Ejecuta la aplicación:**

   ```bash
   npm start
   ```

   La aplicación se abrirá en tu navegador por defecto en [http://localhost:3000](http://localhost:3000).

## Estructura del Proyecto

- `src/`
  - `components/`
    - `Footer/` - Componente del pie de página.
    - `Catalog/` - Componente del catálogo de productos.
    - `Contact/` - Componente de la sección de contacto.
  - `pages/`
    - `Catalog/` - Página que muestra el catálogo de productos.
    - `Contact/` - Página que muestra la sección de contacto.
  - `App.js` - Componente principal que gestiona las rutas.
  - `AppRoutes.js` - Configuración de rutas de la aplicación.
  - `index.js` - Punto de entrada de la aplicación.
