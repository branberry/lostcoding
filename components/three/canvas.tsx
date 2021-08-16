import { Canvas, MeshProps, useFrame } from '@react-three/fiber'
import { useSpring, animated, config } from '@react-spring/three'
import React, { useState, useRef } from 'react'

function ThreeObject() {
  const [active, setActive] = useState(false);
  const coneMesh = useRef<MeshProps>();

  console.log(active);

  const { scale, color } = useSpring({
    scale: active ? 2 : 1,
    color: active ? "blue" : "orange",
    config: config.slow,
  });

  useFrame(({ clock }) => {
    if (coneMesh.current) {
      coneMesh.current.rotation.y = clock.getElapsedTime();
    }
  });

  return <animated.mesh 
    onClick={() => setActive(!active)}
    scale={scale}
    ref={coneMesh}
  >
  <coneGeometry />
  <animated.meshStandardMaterial color={color}/>
</animated.mesh>
}

export default function CanvasComponent() {
  return <Canvas>
    <ambientLight/>
    <pointLight color={[10,10,10]}/>
    <ThreeObject />
  </Canvas>
}