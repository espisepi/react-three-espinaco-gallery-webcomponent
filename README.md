
- Para hacer build y probar el widget:
 - yarn build
 - yarn build:widget
 - cd widget && serve
 - cd espinaco-test-microfrontend-html && serve

============================

Cuando añado este json string a json.parse() no me convierte los array a tipo array, sino que los deja como string. Yo quiero que los convierta a array: [
  {
      "src": "https://www.educaciontrespuntocero.com/wp-content/uploads/2019/10/music-978x652.jpg",
      "alt": "Descripcion 1",
      "position": "[0, 0, 1.5]",
      "rotation": "[0, 0, 0]"
  },
  {
      "src": "https://static.vecteezy.com/system/resources/previews/004/620/287/non_2x/accessible-or-free-education-linear-icon-open-hand-with-graduation-cap-thin-line-illustration-getting-diploma-contour-symbol-isolated-outline-drawing-vector.jpg",
      "alt": "Descripcion 2",
      "position": "[0, 0, 1.5]",
      "rotation": "[0, 0, 0]"
  }
  ]

  El problema que describes ocurre porque `JSON.parse()` interpreta correctamente los tipos de datos en la cadena JSON para objetos, arreglos, números, booleanos, `null`, pero no convierte automáticamente las cadenas que parecen arreglos (como `"[0, 0, 1.5]"`) en objetos de tipo arreglo en JavaScript. Esto se debe a que `"[0, 0, 1.5]"` es, desde el punto de vista del JSON, simplemente una cadena de texto que casualmente tiene una sintaxis similar a la de un arreglo en JavaScript.

Para convertir esas cadenas que representan arreglos en arreglos reales después de haber parseado el JSON, puedes recorrer los objetos resultantes y convertir manualmente esas cadenas a arreglos utilizando `JSON.parse()` otra vez en esas cadenas específicas. Aquí te muestro cómo hacerlo:

```javascript
// Tu cadena JSON
var jsonString = '[{ "src": "https://www.educaciontrespuntocero.com/wp-content/uploads/2019/10/music-978x652.jpg", "alt": "Descripcion 1", "position": "[0, 0, 1.5]", "rotation": "[0, 0, 0]" }, { "src": "https://static.vecteezy.com/system/resources/previews/004/620/287/non_2x/accessible-or-free-education-linear-icon-open-hand-with-graduation-cap-thin-line-illustration-getting-diploma-contour-symbol-isolated-outline-drawing-vector.jpg", "alt": "Descripcion 2", "position": "[0, 0, 1.5]", "rotation": "[0, 0, 0]" }]';

// Parsea la cadena JSON a un objeto de JavaScript
var objetos = JSON.parse(jsonString);

// Convierte las cadenas que representan arreglos a arreglos de JavaScript
objetos.forEach(objeto => {
    objeto.position = JSON.parse(objeto.position);
    objeto.rotation = JSON.parse(objeto.rotation);
});

// Ahora, objetos es un arreglo de objetos donde 'position' y 'rotation' son arreglos de JavaScript
console.log(objetos);
```

Este código convierte las propiedades `position` y `rotation` de cadenas que se ven como arreglos a arreglos reales de JavaScript para cada objeto en el arreglo. Así, después de ejecutar este código, las propiedades `position` y `rotation` de cada objeto serán arreglos, lo cual parece ser lo que estás buscando.