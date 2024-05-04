import React from 'react'
import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useCursor, MeshReflectorMaterial, Image, Text, Environment } from '@react-three/drei'
// import { useRoute, useLocation } from 'wouter'
import { easing } from 'maath'
import getUuid from 'uuid-by-string'
import useNavigationStore from '../store/navigationStore'; // Asume que el archivo se llama navigationStore.js


const GOLDENRATIO = 1.61803398875

export const App = ({ items }) => (
  <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
    <color attach="background" args={['#191920']} />
    <fog attach="fog" args={['#191920', 0, 15]} />
    <group position={[0, -0.5, 0]}>
      <Frames images={items} />
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
        />
      </mesh>
    </group>
    <Environment preset="city" />
  </Canvas>
)

function Frames({ images, q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
  const ref = useRef()
  const clicked = useRef()
  // const [, params] = useRoute('/item/:id')
  const location = useNavigationStore((state) => state.location); // Usamos el hook de Zustand aquí
  const navigate = useNavigationStore((state) => state.navigate); // Usamos el hook de Zustand aquí

  // const [, setLocation] = useLocation()

  useEffect(() => {
    clicked.current = ref.current.getObjectByName(location)
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true)
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25))
      clicked.current.parent.getWorldQuaternion(q)
    } else {
      p.set(0, 0, 5.5)
      q.identity()
    }
  })
  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt)
    easing.dampQ(state.camera.quaternion, q, 0.4, dt)
  })
  return (
    <group
      ref={ref}
      onClick={(e) => (e.stopPropagation(), navigate(clicked.current === e.object ? '/' : e.object.name))}
      onPointerMissed={() => navigate('/')}>
      {images.map((props, index) => <Frame key={`${index}-${props.url}`} {...props} /> /* prettier-ignore */)}
    </group>
  )
}

function Frame({ url, c = new THREE.Color(), name, description, price, urlpdp, ...props }) {
  const image = useRef()
  const frame = useRef()
  // const [, params] = useRoute('/item/:id')
  const location = useNavigationStore((state) => state.location); // Usamos el hook de Zustand aquí
  const [hovered, hover] = useState(false)
  const [rnd] = useState(() => Math.random())
  // const name = getUuid(url)
  const isActive = location === name
  useCursor(hovered)
  useFrame((state, dt) => {
    image.current.material.zoom = 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2
    easing.damp3(image.current.scale, [0.85 * (!isActive && hovered ? 0.85 : 1), 0.9 * (!isActive && hovered ? 0.905 : 1), 1], 0.1, dt)
    easing.dampC(frame.current.material.color, hovered ? 'orange' : 'white', 0.1, dt)
  })

  const handleClickPdp = () => {
    if(isActive) {
      // Especifica la URL a la que quieres redirigir
      window.location.href = urlpdp;
      // Para abrirlo en segunda ventana descomentar el codigo de abajo
      // window.open(urlpdp, '_blank');
    }
  };
  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.5} envMapIntensity={2} />
        <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={url} />
      </mesh>
      <Text maxWidth={0.5} anchorX="left" anchorY="top" position={[0.55, GOLDENRATIO, 0]} fontSize={0.025}>
        {name}
      </Text>
      <Text maxWidth={0.5} anchorX="left" anchorY="top" position={[0.55, GOLDENRATIO - 0.1, 0]} fontSize={0.025}>
        {description}
      </Text>
      <Text maxWidth={0.5} anchorX="left" anchorY="top" position={[0.55, GOLDENRATIO - 0.2, 0]} fontSize={0.025}>
        {price}
      </Text>
      <Text onClick={handleClickPdp} maxWidth={0.5} anchorX="left" anchorY="top" position={[0.55, GOLDENRATIO - 0.3, 0]} fontSize={0.025}>
        Ir a la pagina del producto
      </Text>
    </group>
  )
}
