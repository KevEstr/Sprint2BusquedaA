# Front-end correspondiente al Sprint 2 del módulo de Busqueda de Vuelos A - Fabrica Escuela

Por razones practicas se eliminó la carpeta node_modules porque ocupa mucho espacio en el proyecto, provocando que tanto comprimirlo como descargarlo tarde más.

Por ello, se debe seguir estos pasos:

1. Instalar todos los modulos y dependencias necesarias:
###**npm install**

2. Correr el código:
###**npm run dev**

3. Pruebas unitarias:
###**npm test**

# Descripción del Código:

## SeeFlights.tsx
Es un componente que muestra la interfaz de usuario para buscar y mostrar vuelos. Permite a los usuarios seleccionar ciudades de origen y destino, fechas de viaje y número de pasajeros. Además, proporciona funcionalidad para filtrar y ordenar los vuelos disponibles.

**Funcionalidades Principales:**
- Selección de ciudades de origen y destino.
- Selección del tipo de viaje (ida y vuelta o solo ida).
- Búsqueda de vuelos disponibles.
- Visualización de precios de vuelos.
- Cambio de filtros y orden de vuelos.

**Instrucciones de Uso**
- Inicio y Selección de Destino: Al iniciar la aplicación, se muestra un formulario para seleccionar la ciudad de origen y destino, así como otras opciones de viaje.
- Búsqueda de Vuelos: Una vez que se han seleccionado las ciudades de origen y destino, así como las fechas de viaje, se puede hacer clic en el botón "Buscar" para buscar vuelos disponibles.
- Visualización de Precios: Después de realizar la búsqueda, se muestran los precios de los vuelos disponibles.
- Modificación de Búsqueda: Si se desea cambiar la búsqueda, se puede hacer clic en el botón "Modificar Búsqueda" para volver al formulario de búsqueda.
- Interacción con Vuelos: Se pueden aplicar filtros y ordenar los vuelos según el precio, la duración, la disponibilidad de vuelos directos, etc.

## VerPrecios
Es un componente que muestra los precios y detalles de los vuelos disponibles entre una ciudad de origen y una ciudad de destino seleccionadas.

**Funcionalidades Principales**
Visualización de precios y detalles de vuelos disponibles.
Filtrado y orden de vuelos según diferentes criterios.

**Instrucciones de Uso**
- Visualización de Precios: Se muestra automáticamente al seleccionar ciudades de origen y destino y hacer clic en el botón "Buscar" en el componente VerVuelos.
- Filtrado y Orden de Vuelos: Se pueden aplicar filtros y ordenar los vuelos según el precio, la duración, la disponibilidad de vuelos directos, etc.
- Interacción con Vuelos: Se pueden aplicar filtros y ordenar los vuelos según el precio, la duración, la disponibilidad de vuelos directos, etc.
