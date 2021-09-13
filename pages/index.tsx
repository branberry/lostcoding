import styles from '../styles/Home.module.css';
import { Canvas, useFrame } from '@react-three/fiber';
import Cone from '../components/three/cone';
import Ball, { BallProps } from '../components/three/ball';
import router from 'next/router';
import { OrbitControls } from '@react-three/drei';
import THREE, { Mesh, Vector3 } from 'three';
import { useMemo, useRef } from 'react';
import { useSpring, animated } from '@react-spring/three';


interface StarProps {
  numStars: number;
}

const Stars = (props: StarProps) => {

  const { numStars } = props;

  const max = -5;
  const min = -10;

  const tempObject = new THREE.Object3D();
  const meshRef = useRef();

  for (let i = 0; i < numStars; i++) {
    const x = Math.random();
    const y = Math.random();
    const z = Math.random() * (max - min) + min;
    tempObject.position.set(x,y,z);
  }

  return (
    <instancedMesh ref={meshRef}>
      <boxGeometry args={[0.6, 0.6, 0.6]}>
        <instancedBufferAttribute />
      </boxGeometry>
      <meshPhongMaterial color='white' />
    </instancedMesh>
  )
}

type OrbitingPlanetProps = BallProps & { targetPosition?: Vector3 };

const OrbitingPlanet = (props: OrbitingPlanetProps) => {
  const { color } = props;
  const meshRef = useRef<Mesh>();

  useFrame(({ clock }) => {
    if(meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime();
    }
  });

  const { position } = useSpring({
    position: new Vector3(-10,-10,-10),
    rotation: ""
  });

  return (
    <animated.mesh position={position || [1,1,-1]} ref={meshRef}>
      <sphereGeometry/>
      <meshLambertMaterial color={color || 'red'} />
    </animated.mesh>
  );
}

const Planets = () => {
  const outerPlanetPosition: Vector3 = new Vector3(-1,-1,-10);

  const mainPlanetRef = useRef<Mesh>(null!);

  useFrame(({clock}) => {
    if (mainPlanetRef.current) {
      mainPlanetRef.current.rotation.x = clock.getElapsedTime();
    }
  });

  return (
    <>
      <OrbitingPlanet position={outerPlanetPosition} color='green'/>
      <Ball scale={3} ref={mainPlanetRef}/> 
    </>
  );
}
export default function Home() {
  return (
    <div className={styles.container}>
      <Canvas
        gl={{ antialias: false, alpha: false }}
      >
        <color attach='background' args={['black']} />
        <OrbitControls/>
        <ambientLight/>
        {/* <pointLight color={[10,10,10]}/> */}
        <pointLight color={[5,5,5]} position={[5,5,5]}/>

        <Planets />
        {/* <Stars numStars={32} /> */}
      </Canvas>
    </div>
  )
}
