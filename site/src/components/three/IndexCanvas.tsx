import React from 'react';
import { Canvas } from '@react-three/fiber'
import Box from './objects/Box';

function HomeCanvas(): JSX.Element {
  return (
    <Canvas>
      <ambientLight intensity={0.1}/>
      <pointLight position={[10, 10, 10]} />
      <Box meshProps={{position: [-5, 0, 0]}} rotationSpeed={0.01} link="/fun" />
      <Box meshProps={{position: [0, -3, 0]}} rotationSpeed={-0.02} />
      <Box meshProps={{position: [5, 0, 0]}} rotationSpeed={0.03} />
    </Canvas>
  );
};

export default HomeCanvas;