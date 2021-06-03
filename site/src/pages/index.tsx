import React, { useState, useRef } from 'react';
import { PageProps } from 'gatsby';
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'

import '../styles/index.scss';

function Box(props: JSX.IntrinsicElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}
const IndexPage: React.FC<PageProps> = props => {
  return (
    <main>
      <title>Welcome!</title>
      <div className="intro-container">
        <h1>Hello, world! My name is Brandon!</h1>
      </div>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-3, 0, 0]} />
        <Box position={[0, 0, 0]} />
        <Box position={[3, 0, 0]} />

      </Canvas>
    </main>
  )
};

export default IndexPage;
