Dame esta solución: Si necesitas esperar múltiples eventos o condiciones, puedes usar un enfoque más complejo con Promise.all o un estado que rastree varias condiciones.

Si necesitas esperar por múltiples eventos o condiciones antes de quitar la pantalla de carga, puedes gestionarlo usando un estado que rastree cada condición individualmente o utilizando `Promise.all` para esperar a que múltiples promesas se resuelvan. A continuación, te mostraré ambas estrategias:

### Estrategia con Estados para Rastrear Condiciones

Esta estrategia implica mantener un estado para cada condición que necesitas rastrear. Una vez que todas las condiciones sean verdaderas, puedes quitar la pantalla de carga.

```javascript
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';

const App = () => {
  // Estados individuales para cada condición
  const [condition1, setCondition1] = useState(false);
  const [condition2, setCondition2] = useState(false);
  const [condition3, setCondition3] = useState(false);

  // Calcula si todas las condiciones se han cumplido
  const allConditionsMet = condition1 && condition2 && condition3;

  useEffect(() => {
    // Simula el cumplimiento de las condiciones
    setTimeout(() => setCondition1(true), 1000); // Condición 1 se cumple después de 1s
    setTimeout(() => setCondition2(true), 2000); // Condición 2 se cumple después de 2s
    setTimeout(() => setCondition3(true), 3000); // Condición 3 se cumple después de 3s
  }, []);

  return (
    <>
      {!allConditionsMet && <div className="loading-screen">Cargando...</div>}
      <Canvas>
        {/* Componentes de Three.js aquí */}
      </Canvas>
    </>
  );
};
```

### Estrategia con Promise.all

Si las condiciones que estás esperando pueden ser representadas por promesas (por ejemplo, cargas de red, tiempos de espera, etc.), puedes usar `Promise.all` para esperar a que todas se resuelvan antes de quitar la pantalla de carga.

```javascript
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Crea promesas para cada condición que necesitas esperar
    const promise1 = new Promise((resolve) => setTimeout(resolve, 1000)); // Espera 1s
    const promise2 = new Promise((resolve) => setTimeout(resolve, 2000)); // Espera 2s
    const promise3 = new Promise((resolve) => setTimeout(resolve, 3000)); // Espera 3s

    // Espera a que todas las promesas se resuelvan
    Promise.all([promise1, promise2, promise3]).then(() => {
      setIsLoading(false); // Todas las condiciones se han cumplido, quita la pantalla de carga
    });
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

Ambas estrategias te permiten esperar múltiples condiciones o eventos antes de quitar la pantalla de carga. La elección entre una u otra depende de si tus condiciones pueden ser representadas fácilmente como promesas y de tu preferencia personal en cuanto a la estructura del código.