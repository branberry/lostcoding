import React, { useState, useRef } from 'react';
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'

interface BoxProps {
  meshProps: JSX.IntrinsicElements['mesh'];
  rotationSpeed?: number;
}
function Box(props: BoxProps) {

  const { meshProps, rotationSpeed } = props;

  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    mesh.current.rotation.x += (rotationSpeed || 0.01)
  });


  return (
    <mesh
      {...meshProps}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(_) => setActive(!active)}
      onPointerOver={(_) => setHover(true)}
      onPointerOut={(_) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'}  />
    </mesh>
  )
}

export default Box;