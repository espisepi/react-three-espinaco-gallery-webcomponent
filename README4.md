quiero que la solución sea ejecutar un evento y no quitar la pantalla de loading hasta que se capture el evento

Si deseas mantener la pantalla de carga hasta que ocurra un evento específico, en lugar de simplemente esperar a que se cargue un recurso, puedes utilizar un enfoque basado en eventos. React y React Three Fiber te permiten trabajar con eventos fácilmente. A continuación, te muestro cómo podrías estructurar tu aplicación para lograr esto.

### Paso 1: Establecer el Estado de Carga y el Manejador de Eventos

Primero, establece un estado que controle la visibilidad de la pantalla de carga. Luego, define una función que maneje el evento específico que estás esperando. Cuando este evento ocurra, actualizará el estado para ocultar la pantalla de carga.

```javascript
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleEvent = () => {
    // Lógica para manejar el evento aquí
    setIsLoading(false); // Esto ocultará la pantalla de carga
  };

  useEffect(() => {
    // Aquí te suscribes al evento. Esto es solo un ejemplo;
    // debes reemplazarlo con tu propio evento o fuente de evento.
    window.addEventListener('tuEventoEspecifico', handleEvent);

    // Asegúrate de limpiar el manejador de eventos para evitar fugas de memoria
    return () => window.removeEventListener('tuEventoEspecifico', handleEvent);
  }, []);

  return (
    <>
      {isLoading && <div className="loading-screen">Cargando...</div>}
      <Canvas>
        {/* Componentes de Three.js aquí */}
      </Canvas>
    </>
  );
};
```

### Paso 2: Disparar el Evento

Debes asegurarte de que el evento que esperas sea disparado en algún punto. Esto puede ser después de cargar un recurso, completar una animación, o cualquier otra lógica en tu aplicación. Aquí tienes un ejemplo de cómo podrías disparar un evento personalizado en JavaScript:

```javascript
// Función que dispara tu evento específico
const triggerEvent = () => {
  // Crear el evento
  const event = new Event('tuEventoEspecifico');

  // Disparar el evento
  window.dispatchEvent(event);
};

// Llamar a triggerEvent() en el momento adecuado en tu aplicación
```

### Consideraciones

- Asegúrate de que el evento se dispare después de que todos los recursos necesarios estén completamente cargados o después de que se haya completado cualquier otra condición que determina que tu aplicación está lista para ser mostrada.
- Si necesitas esperar múltiples eventos o condiciones, puedes usar un enfoque más complejo con `Promise.all` o un estado que rastree varias condiciones.
- La limpieza de los manejadores de eventos en el hook `useEffect` es crucial para evitar fugas de memoria, especialmente en aplicaciones complejas o que cambian frecuentemente de componentes.

Este enfoque te ofrece una gran flexibilidad para determinar exactamente cuándo está tu aplicación lista para interactuar con el usuario, mejorando la experiencia de usuario al proporcionar feedback visual mientras se cargan los recursos o se inicializa la aplicación.