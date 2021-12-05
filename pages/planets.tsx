import { animated, useSpring } from '@react-spring/three'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh, Vector3 } from 'three'
import { OrbitControls } from '@react-three/drei'
import Ball, { BallProps } from '../components/three/ball'
import styles from '../styles/Home.module.css'

type OrbitingPlanetProps = BallProps & { targetPosition?: Vector3 }

const OrbitingPlanet = (props: OrbitingPlanetProps) => {
	const { color } = props
	const meshRef = useRef<Mesh>()

	useFrame(({ clock }) => {
		if (meshRef.current) {
			meshRef.current.rotation.x = clock.getElapsedTime()
		}
	})

	const { position } = useSpring({
		position: new Vector3(-10, -10, -10),
		rotation: '',
	})

	return (
		<animated.mesh position={position || [1, 1, -1]} ref={meshRef}>
			<sphereGeometry />
			<meshLambertMaterial color={color || 'red'} />
		</animated.mesh>
	)
}

const PlanetsElement = () => {
	const outerPlanetPosition: Vector3 = new Vector3(-1, -1, -10.00001)

	const mainPlanetRef = useRef<Mesh>(null!)

	useFrame(({ clock }) => {
		if (mainPlanetRef.current) {
			mainPlanetRef.current.rotation.x = clock.getElapsedTime() * 0.5
		}
	})

	return (
		<>
			<OrbitingPlanet position={outerPlanetPosition} color="green" />
			<Ball scale={3} ref={mainPlanetRef} />
		</>
	)
}
export default function Planets() {
	return (
		<div className={styles.container}>
			<Canvas gl={{ antialias: false, alpha: false }}>
				<color attach="background" args={['black']} />
				<OrbitControls />
				<ambientLight />
				<mesh></mesh>
				<pointLight color={[5, 5, 5]} position={[5, 5, 5]} />
				<PlanetsElement />
			</Canvas>
		</div>
	)
}
