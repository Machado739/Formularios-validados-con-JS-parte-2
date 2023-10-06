
# Formularios-validados-con-JS-parte-2

# Fundamentos de JavaScript

## Arreglos en JavaScript
Los arreglos en JavaScript son estructuras de datos que permiten almacenar múltiples valores en una única variable. Los valores en un arreglo están indexados numéricamente y pueden ser de cualquier tipo de datos, incluyendo números, cadenas, objetos y otros arreglos. Para acceder a los valores en un arreglo, se utiliza su índice, comenzando desde 0 para el primer elemento. Los arreglos en JavaScript son objetos de alto nivel y proporcionan métodos para agregar, eliminar, modificar y acceder a elementos.

## Almacenamiento en el Navegador (localStorage y sessionStorage)
localStorage y sessionStorage son mecanismos para almacenar datos en el navegador web.
- localStorage almacena datos en el dispositivo del usuario de forma persistente incluso después de que el navegador se cierre y se reinicie. Tiene una capacidad de almacenamiento mayor en comparación con sessionStorage.
- sessionStorage almacena datos en la sesión actual del navegador y se borra cuando se cierra la pestaña o ventana del navegador.
Para almacenar datos en localStorage, puedes usar `localStorage.setItem(llave, valor)`, y para recuperar datos, puedes usar `localStorage.getItem(llave)`. Para eliminar datos, puedes usar `localStorage.removeItem(llave)` o borrar todos los datos con `localStorage.clear()`.
El acceso a sessionStorage es similar al de localStorage, pero los datos se eliminarán automáticamente al finalizar la sesión.
Para acceder a estos mecanismos de almacenamiento, simplemente utiliza los métodos proporcionados por JavaScript, como `localStorage.setItem()` y `sessionStorage.getItem()`.

## JSON (JavaScript Object Notation)
JSON es un formato ligero y legible por humanos utilizado para el intercambio de datos estructurados. Se basa en una colección de pares clave-valor y se utiliza ampliamente para transmitir datos entre una aplicación web y un servidor, así como para almacenar configuraciones y datos estructurados en archivos. JSON es independiente del lenguaje y se utiliza en una variedad de lenguajes de programación, incluyendo JavaScript.

## JSON.parse() y JSON.stringify()
- `JSON.parse()` es un método que se utiliza para analizar una cadena JSON y convertirla en un objeto JavaScript.
- `JSON.stringify()` es un método que se utiliza para convertir un objeto JavaScript en una cadena JSON.

## window.location.href
`window.location.href` es una propiedad utilizada para obtener o establecer la URL completa (Uniform Resource Locator) de la página actual en un navegador web. Puedes usar `window.location.href` para redirigir al usuario a otra página web al establecerlo con una nueva URL.

## Funcionamiento de scriptResultados.js
El archivo `scriptResultados.js` parece ser un script de JavaScript diseñado para manejar la lógica en la página de resultados (`resultados.html`). Se encarga de:
- Mostrar una tabla de resultados de envíos almacenados.
- Permitir la búsqueda de registros por ID.
- Borrar registros individuales al hacer clic en el botón "Borrar" en cada fila de la tabla.
- Borrar todos los registros al hacer clic en el botón "Borrar todos los registros".
- Redireccionar a la página principal (`index.html`) al hacer clic en el enlace "Volver a la página principal".
El script interactúa con el almacenamiento local (localStorage) para obtener y actualizar los registros de envíos y utiliza eventos y manipulación del DOM para lograr estas funcionalidades. También parece incluir la lógica para buscar registros por ID, aunque la implementación detallada de esa funcionalidad puede depender de cómo se crean y muestran las filas de la tabla.
