import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Intro from './three/scenes/intro'
export default function MyCanvas() {
	return (
		<Canvas>
			<Intro />
			<OrbitControls />
		</Canvas>
	)
}
