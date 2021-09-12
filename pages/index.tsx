import styles from '../styles/Home.module.css';
import { Canvas } from '@react-three/fiber';
import Cone from '../components/three/cone';
import Ball from '../components/three/ball';
import router from 'next/router';
import { OrbitControls } from '@react-three/drei';
import THREE from 'three';

const Stars = (numStars: number) => {
  const max = -5;
  const min = -10;

  const tempObject = new THREE.Object3D();

  for (let i = 0; i < numStars; i++) {
    const x = Math.random();
    const y = Math.random();
    const z = Math.random() * (max - min) + min;

  }
}
export default function Home() {
  return (
    <div className={styles.container}>
      <Canvas
        gl={{ antialias: false, alpha: false }}

      >
        <color attach="background" args={["black"]} />
        <OrbitControls/>
        <ambientLight/>
        <pointLight color={[10,10,10]}/>

        {/* <Cone
          changePage={() => router.push('/vr')}
        /> */}
        <Ball/>
        <Ball position={[-1, -1, -10]} />
      </Canvas>
    </div>
  )
}
