import { Center, Box } from '@chakra-ui/react'
import { Canvas } from '@react-three/fiber'
import MyCanvas from '../components/my-canvas'
import Intro from '../components/three/scenes/intro'

export default function Home() {
	return (
		<Box bg="background">
			<Center height="100vh">
				<MyCanvas />
			</Center>
		</Box>
	)
}
