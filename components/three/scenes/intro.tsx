import { Text } from '@react-three/drei';
import { useBox, usePlane } from '@react-three/cannon';

function Floor() {
	const [ref, _] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));

	return (
		<mesh receiveShadow ref={ref}>
			<meshLambertMaterial color="tan" />
			<planeGeometry args={[100, 100]} />
		</mesh>
	);
}

export default function Intro() {
	const [ref, _] = useBox(() => ({ mass: 1 }));
	return (
		<>
			<Text castShadow receiveShadow ref={ref} fontSize={2}>
				Lost Coding
			</Text>
			<Floor />
		</>
	);
}
