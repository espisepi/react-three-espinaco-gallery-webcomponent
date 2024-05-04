
// IMPORTANTE: Este valor tiene que ser el mismo que se puso en el index.js antes de hacer yarn widget del componente web
let WEBCOMPONENT_QUERY_SELECTOR_NAME = 'sepinaco-gallery-webcomponent';
 
 // Modificar si se quiere anadir en una posicion concreta
 let childrenPosition = -1; // dejar el valor en -1 para no usarlo

 // Container para agregar
 let containerQuerySelector = '.container-' + WEBCOMPONENT_QUERY_SELECTOR_NAME;
 let container = document.querySelector(containerQuerySelector);

 // Comienza la creacion del componente html
 // Crear el elemento div
 let div = document.createElement('div');

 // Verificar si el contenedor existe
 if(container) {
     if(childrenPosition >= 0 && container.children.length >= childrenPosition) {
        console.log('SI se encontró el contenedor con la clase especificada. Added to body en la posicion indicada :) ');
       // Agregar el div creado al contenedor encontrado en la posicion indicada
       container.insertBefore(div, container.children[childrenPosition]);
     } else {
        console.log('SI se encontró el contenedor con la clase especificada. Added to body :) ');
       // Agregar el div creado al contenedor encontrado en la ultima posicion
       container.appendChild(div);
     }
 } else if(childrenPosition >= 0) {
    console.log('No se encontró el contenedor con la clase especificada. Added to body en la posicion indicada :) ');
     // Agregar el div al cuerpo del documento en la posicion indicada
     let body = document.body;
     body.insertBefore(div,body.children[childrenPosition]);
 } else {
    console.log('No se encontró el contenedor con la clase especificada. Added to body :) ');
     // Agregar el div al cuerpo del documento
     document.body.appendChild(div);
 }

 // Establecer el ID del div
 // div.id = 'sepinaco-gallery-webcomponent';

 // Añadir una clase con el mismo nombre del ID al div
 div.classList.add(WEBCOMPONENT_QUERY_SELECTOR_NAME);

 // Establecer el estilo del div
 div.style.width = '100vw';
 div.style.height = '100vh';

 let dataItems = [
   {
       "name": "Producto 1",
       "description": "Descripcion producto 1",
       "price": "10€",
       "urlpdp": "https://www.nike.com/es/t/phantom-gx-2-elite-erling-haaland-botas-de-futbol-de-perfil-bajo-terreno-firme-mPR8Tw/HF6361-600",
       "position": "[0, 0, 1.5]",
       "rotation": "[0, 0, 0]",
       "url": "https://images.pexels.com/photos/310452/pexels-photo-310452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
   },
   {
       "name": "Producto 2",
       "description": "Descripcion producto 2",
       "price": "26€",
       "urlpdp": "https://www.nike.com/es/t/phantom-gx-2-elite-erling-haaland-botas-de-futbol-de-perfil-bajo-terreno-firme-mPR8Tw/HF6361-600",
       "position": "[-0.8, 0, -0.6]",
       "rotation": "[0, 0, 0]",
       "url": "https://images.pexels.com/photos/310452/pexels-photo-310452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
   },
   {
     "name": "Producto 3",
     "description": "Descripcion producto 3",
     "price": "36€",
     "urlpdp": "https://www.nike.com/es/t/phantom-gx-2-elite-erling-haaland-botas-de-futbol-de-perfil-bajo-terreno-firme-mPR8Tw/HF6361-600",
     "position": "[0.8, 0, -0.6]",
     "rotation": "[0, 0, 0]",
     "url": "https://images.pexels.com/photos/310452/pexels-photo-310452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
   },
   {
     "name": "Producto 4",
     "description": "Descripcion producto 4",
     "price": "46€",
     "urlpdp": "https://www.nike.com/es/t/phantom-gx-2-elite-erling-haaland-botas-de-futbol-de-perfil-bajo-terreno-firme-mPR8Tw/HF6361-600",
     "position": "[-1.75, 0, 0.25]",
     "rotation": "[0, 1.26, 0]",
     "url": "https://images.pexels.com/photos/327482/pexels-photo-327482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
   },
   {
     "name": "Producto 5",
     "description": "Descripcion producto 5",
     "price": "56€",
     "urlpdp": "https://www.nike.com/es/t/phantom-gx-2-elite-erling-haaland-botas-de-futbol-de-perfil-bajo-terreno-firme-mPR8Tw/HF6361-600",
     "position": "[-2.15, 0, 1.5]",
     "rotation": "[0, 1.26, 0]",
     "url": "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
   },
   {
     "name": "Producto 6",
     "description": "Descripcion producto 6",
     "price": "66€",
     "urlpdp": "https://www.nike.com/es/t/phantom-gx-2-elite-erling-haaland-botas-de-futbol-de-perfil-bajo-terreno-firme-mPR8Tw/HF6361-600",
     "position": "[-2, 0, 2.75]",
     "rotation": "[0, 1.26, 0]",
     "url": "https://images.pexels.com/photos/358574/pexels-photo-358574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
   },
   {
     "name": "Producto 7",
     "description": "Descripcion producto 7",
     "price": "76€",
     "urlpdp": "https://www.nike.com/es/t/phantom-gx-2-elite-erling-haaland-botas-de-futbol-de-perfil-bajo-terreno-firme-mPR8Tw/HF6361-600",
     "position": "[1.75, 0, 0.25]",
     "rotation": "[0, -1.26, 0]",
     "url": "https://images.pexels.com/photos/227675/pexels-photo-227675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
   },
   {
     "name": "Producto 8",
     "description": "Descripcion producto 8",
     "price": "86€",
     "urlpdp": "https://www.nike.com/es/t/phantom-gx-2-elite-erling-haaland-botas-de-futbol-de-perfil-bajo-terreno-firme-mPR8Tw/HF6361-600",
     "position": "[2.15, 0, 1.5]",
     "rotation": "[0, -1.26, 0]",
     "url": "https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
   },
   {
     "name": "Producto 9",
     "description": "Descripcion producto 9",
     "price": "96€",
     "urlpdp": "https://www.nike.com/es/t/phantom-gx-2-elite-erling-haaland-botas-de-futbol-de-perfil-bajo-terreno-firme-mPR8Tw/HF6361-600",
     "position": "[2, 0, 2.75]",
     "rotation": "[0, -1.26, 0]",
     "url": "https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
   }
 ];

 let dataItemsString = JSON.stringify(dataItems);

 // Asignar los datos de los ítems al atributo 'data-items' del div
 div.setAttribute('data-items', dataItemsString);

 // Asignar atributo debug
 div.setAttribute('data-debug', "false");



 // Descomentar para Anadir los scripts mediante codigo js ====================

 // // Crear el elemento <link> para el CSS
 // let link = document.createElement("link");
 // link.href = "http://localhost:3000/index.css"; // La URL del archivo CSS
 // link.rel = "stylesheet"; // El atributo rel

 // // Crear el elemento <script> para el JavaScript
//  let script = document.createElement("script");
//  script.src = "http://localhost:3000/index.js"; // La URL del archivo JavaScript
 // script.src = "https://sepinaco-webcomponents.vercel.app/webcomponents/gallery/index.js"; // La URL del archivo JavaScript


 // // Añadir los elementos creados al <head> de la página
 // document.body.appendChild(link); // Para el CSS
//  document.body.appendChild(script); // Para el JS
