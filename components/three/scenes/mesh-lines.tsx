import { extend } from '@react-three/fiber';
import THREE from 'three';
import { useControls } from 'leva';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

extend({ MeshLineGeometry, MeshLineMaterial });

interface LineProps {
	dash: number;
	count: number;
	colors: number[] | string;
	radius?: number;
	rand?: (x: number) => number;
}

function Lines({ dash, count, colors, radius = 50, rand = THREE.MathUtils.randFloatSpread }: LineProps) {}

export function MeshScene() {
	const { dash, count, radius } = useControls({
		dash: { value: 0.9, min: 0, max: 0.99, step: 0.01 },
		count: { value: 50, min: 0, max: 200, step: 1 },
		radius: { value: 50, min: 1, max: 100, step: 1 },
	});

	return (
		<>
			<color attach="background" args={['#101020']} />
		</>
	);
}
