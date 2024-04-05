como añadir una pantalla de loading a una escena react three fiber

Agregar una pantalla de carga (loading screen) a una escena en React Three Fiber es una excelente manera de mejorar la experiencia del usuario mientras se cargan los recursos necesarios, como modelos 3D, texturas, entre otros. Aquí te muestro cómo puedes hacerlo:

### Paso 1: Preparar el Estado de Carga

Primero, necesitas un estado en tu componente para rastrear si la escena está cargando o no. Esto se puede hacer utilizando el hook `useState` de React.

```javascript
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    // Tu código de Canvas aquí
  );
};
```

### Paso 2: Usar el Loader de Three.js

React Three Fiber trabaja con los loaders de Three.js para cargar diferentes tipos de recursos. Puedes usar el hook `useLoader` para cargar tus recursos y manejar el estado de carga. Un ejemplo común es cargar un modelo GLTF:

```javascript
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

const Model = () => {
  const gltf = useLoader(GLTFLoader, 'path/to/your/model.gltf');
  // Una vez cargado el modelo, puedes manejar el estado de carga aquí si es necesario
  return <primitive object={gltf.scene} />;
};
```

### Paso 3: Implementar una Pantalla de Carga

Para mostrar una pantalla de carga, puedes condicionalmente renderizar un componente o un elemento JSX basado en el estado de carga `isLoading`. Por ejemplo:

```javascript
return (
  <>
    {isLoading && <div className="loading-screen">Cargando...</div>}
    <Canvas>
      {/* Asegúrate de ajustar el estado de carga cuando tus recursos estén listos */}
      <Model />
    </Canvas>
  </>
);
```

### Paso 4: Ajustar el Estado de Carga

Necesitas una manera de ajustar el estado `isLoading` a `false` una vez que todos tus recursos estén cargados. Esto se puede hacer de varias maneras, dependiendo de cómo estés cargando tus recursos. Un enfoque es usar el evento `onLoad` de los loaders de Three.js, o si estás usando `useLoader`, puedes ajustar `setIsLoading(false)` después de que se cargue tu recurso.

### Ejemplo Completo

Aquí hay un ejemplo básico de cómo combinar todo:

```javascript
import React, { useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = ({ onLoaded }) => {
  const gltf = useLoader(GLTFLoader, 'path/to/your/model.gltf');
  onLoaded();
  return <primitive object={gltf.scene} />;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaded = () => setIsLoading(false);

  return (
    <>
      {isLoading && <div className="loading-screen">Cargando...</div>}
      <Canvas>
        <Model onLoaded={handleLoaded} />
      </Canvas>
    </>
  );
};
```

Este es un punto de partida básico. Dependiendo de tus necesidades, puedes querer implementar cargadores para múltiples recursos, manejar errores de carga, o crear pantallas de carga más sofisticadas con animaciones o barras de progreso.