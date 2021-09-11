import styles from '../styles/Home.module.css';
import { Canvas } from '@react-three/fiber';
import Cone from '../components/three/cone';
import Ball from '../components/three/ball';
import router from 'next/router';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
export default function Home() {
  return (
    <div className={styles.container}>
      <Canvas>
        <color attach="background" args={["black"]} />
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
