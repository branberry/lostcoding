import { OrbitControls, Stars } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { Mesh, ShaderMaterial } from 'three';
import Intro from './three/scenes/intro';

interface ParticleProps {
	pointCount: number;
}
const ROWS = 50;
const COLUMNS = 50;
const NUM_POINTS = ROWS * COLUMNS;

function Particles({ pointCount }: ParticleProps) {
	const [coords, sizes] = useMemo(() => {
		const initialCoords = [];
		const initialSizes = [];

		let i = 0;
		for (let y = 0; y < ROWS; y++) {
			for (let x = 0; x < COLUMNS; x++) {
				initialCoords.push(x);
				initialCoords.push(y);
				initialCoords.push(i);
				initialSizes.push(Math.random() < 0.03 ? 15 : 6);
				i++;
			}
		}
		const coords = new Float32Array(initialCoords);
		const sizes = new Float32Array(initialSizes);
		return [coords, sizes];
	}, []);

	const geom = useRef<Mesh>();

	useFrame(({ clock }) => {
		if (geom.current) {
			console.log(geom.current.material);
			(geom.current.material as ShaderMaterial).uniforms.time.value = clock.getElapsedTime();
			(geom.current.geometry as any).verticesNeedUpdate = true;
		}
	});

	return (
		<points ref={geom} position={[0, 10, 0]} rotation={[-Math.PI / 4, 0, Math.PI / 6]}>
			<bufferGeometry>
				<bufferAttribute
					attachObject={['attributes', 'position']}
					count={coords.length / 3}
					array={coords}
					itemSize={3}
				/>
				<bufferAttribute attachObject={['attributes', 'size']} count={sizes.length} array={sizes} itemSize={1} />
			</bufferGeometry>
		</points>
	);
}

export default function MyCanvas() {
	return (
		<Canvas>
			<Intro />
			<Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
			<OrbitControls />
		</Canvas>
	);
}
