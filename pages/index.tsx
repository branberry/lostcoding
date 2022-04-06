import { Center, Box, useColorMode } from '@chakra-ui/react';
import { Canvas, extend, MeshProps, useFrame, useLoader, useThree } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Text, SpotLight, Shadow, Stars, Cloud, Sky, Scroll } from '@react-three/drei';
import { MutableRefObject, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { motion as motion3d } from 'framer-motion-3d';
import { motion, Variants } from 'framer-motion';
import { Euler, Material, TextureLoader, Vector3 } from 'three';
import { useEffect } from 'react';

extend({ TextGeometry });

const Banner: React.FC = () => {
	const [lostColorToggle, setLostColorToggle] = useState(false);
	const [codingColorToggle, setCodingColorToggle] = useState(false);
	const font = useLoader(FontLoader, '/static/fonts/bold.blob');
	const material = useLoader(TextureLoader, '/static/materials/textmatcap.png');

	const config = useMemo(
		() => ({
			font,
			size: 40,
			height: 30,
			curveSegments: 64,
			bevelEnabled: true,
			bevelThickness: 6,
			bevelSize: 2.5,
			bevelOffset: 0,
			bevelSegments: 16,
		}),
		[font]
	);

	const lostRef = useRef<MeshProps>(null);
	const codingRef = useRef<MeshProps>(null);
	const groupRef = useRef<MeshProps>(null);

	useThree(({ camera }) => {
		camera.position.set(0, 0, 200);

		if (codingRef.current && lostRef.current) {
			const codingPosition: Vector3 = codingRef.current.position! as Vector3;

			(lostRef.current.position as Vector3).x = codingPosition.x - 150;
			(lostRef.current.position as Vector3).y = codingPosition.y;
			(lostRef.current.position as Vector3).z = codingPosition.z;
		}
	});

	useFrame(({ clock }) => {
		if (groupRef.current) {
			(groupRef.current.rotation! as Euler).x = Math.sin(clock.getElapsedTime() * 0.3) / 2;
			(groupRef.current.rotation! as Euler).y = Math.sin(clock.getElapsedTime() * 0.3) / 2;
			(groupRef.current.rotation! as Euler).z = Math.sin(clock.getElapsedTime() * 0.3) / 2;
		}
	});

	return (
		<>
			<group scale={[0.6, 0.6, 0.4]} ref={groupRef}>
				<motion3d.mesh
					ref={lostRef}
					receiveShadow
					castShadow
					whileHover={{ scale: 1.2 }}
					onClick={() => {
						setLostColorToggle(!lostColorToggle);
					}}>
					<textGeometry args={['LOST', config]} />
					<meshMatcapMaterial matcap={material} color={lostColorToggle ? 'red' : 'skyblue'} />
					<Shadow position-y={-0.79} rotation-x={-Math.PI / 2} opacity={0.6} scale={[0.8, 0.8, 1]} />
				</motion3d.mesh>
				<motion3d.mesh
					ref={codingRef}
					position={[-30, -10, 0]}
					whileHover={{ scale: 1.2 }}
					onClick={() => {
						setCodingColorToggle(!codingColorToggle);
					}}>
					<textGeometry args={['CODING', config]} />
					<meshMatcapMaterial matcap={material} color={codingColorToggle ? 'red' : 'skyblue'} />
				</motion3d.mesh>
			</group>
			<ambientLight intensity={1} />
			<pointLight position={[-100, 0, 0]} />
			<Stars radius={100} count={10000} fade />
		</>
	);
};

export const IntroductionSection: React.FC = () => {
	return (
		<motion.h1
			initial={{ opacity: 0 }}
			animate={{ y: 20, opacity: 1.0 }}
			transition={{ delay: 1.0, x: { type: 'spring', stiffness: 100 } }}>
			Hello! My name is Brandon.
		</motion.h1>
	);
};

const ScrollContainer: React.FC = ({ children }) => {
	const scrollContainerVariants: Variants = {
		offscreen: {
			y: 300,
		},
		onscreen: {
			y: 50,
			rotate: -10,
			transition: {
				type: 'spring',
				bounce: 0.4,
				duration: 0.8,
			},
		},
	};
	return (
		<motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
			<motion.div variants={scrollContainerVariants}>{children}</motion.div>
		</motion.div>
	);
};

export default function Home() {
	const { colorMode, toggleColorMode } = useColorMode();

	useEffect(() => {
		if (colorMode === 'light') {
			toggleColorMode();
		}
	}, [colorMode, toggleColorMode]);

	return (
		<Box
			css={{
				width: '100vw',
				height: '100vh',
				minWidth: '500px',
				minHeight: '800px',
			}}>
			<Canvas>
				<Physics>
					<Banner />
				</Physics>
			</Canvas>
			<Center sx={{ position: 'absolute', top: '10vh', left: '40vw', fontSize: '6em' }}></Center>
		</Box>
	);
}
