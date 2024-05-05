
Version actual del proyecto: v0.1

La idea es crear web components para ponerlos en cualquier pagina web (incluido en los woocommerce que haga)


 - OK: Convertir proyecto a Typescript

 - OK: Ponerlo clean architecture para poder crear cualquier web componente pero solo compilando el codigo necesario para crear ese web componente y no todos los que esten definidos en el proyecto
   -- Comprobar por el tamaño del js generado en la carpeta widget, que solo se añade ese webcomponent y no todos.

- OK: Actualizar versiones de dependencias

- TODO: Migrar el proyecto de create-react-app a vite: https://dev.to/henriquejensen/migrating-from-create-react-app-to-vite-a-quick-and-easy-guide-5e72


====================================================================

 - OK: Eliminar router y replicar la misma funcionalidad con zustand
 - OK: Añadir atributos del producto tipicos de shopify para mostrarlos en la escena threejs junto a la imagen
 - TODO: Testear Gallery threejs webcomponent tiempo de carga en template shopify
 - OK: Poner script para crear componente desde js en el proyecto
 - OK (https://github.com/espisepi/sepinaco-webcomponents): Crear proyecto html,css,vanillajs para poner todos los web components que vaya creando como este. Y eso sera lo que presentare a los clientes. En cada componente web hago referencia en un txt a su repositorio.
 - TODO (ADDED README4 y README5): anadir evento que se ejecuta cuando termina de cargar la escena para asi controlar una pantalla de carga o poner pantalla de carga

 - TODO: Añadir en script el poder insertar el canvas threejs en un elemento dato, como hijo de ese elemento en la posicion que yo le pase por parametro (posicion 1, 2...)
