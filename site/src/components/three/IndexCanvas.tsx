import React from 'react';
import { Canvas } from '@react-three/fiber'
import Box from './objects/Box';

function HomeCanvas(): JSX.Element {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-3, -3, 0]} />
      <Box position={[0, 0, 0]} />
      <Box position={[3, 0, 0]} />
  </Canvas>
  );
};

export default HomeCanvas;