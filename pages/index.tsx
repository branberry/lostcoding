import { Center, Box } from '@chakra-ui/react';
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Text, SpotLight, Shadow, Stars, Cloud, Sky } from '@react-three/drei';
import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { motion as motion3d } from 'framer-motion-3d';
import { motion } from 'framer-motion';
import { ErrorBoundary } from 'react-error-boundary';

extend({ TextGeometry });

function ErrorFallback({ error, resetErrorBoundary }: any) {
	return (
		<div role="alert">
			<p>Something went wrong:</p>
			<pre>{error.message}</pre>
			<button onClick={resetErrorBoundary}>Try again</button>
		</div>
	);
}

const Banner: React.FC = () => {
	const font = useLoader(FontLoader, '/static/fonts/bold.blob');
	const config = useMemo(
		() => ({
			font,
			size: 4,
			height: 5,
			curveSegments: 32,
			bevelEnabled: true,
			bevelThickness: 0.1,
			bevelSize: 0.5,
			bevelOffset: 0,
			bevelSegments: 8,
		}),
		[font]
	);

	return (
		<group scale={[0.6, 0.6, 0.4]}>
			<motion3d.mesh receiveShadow castShadow position={[-15, -2, 0]} whileHover={{ scale: 1.2 }}>
				<textGeometry args={['LOST', config]} />
				<meshNormalMaterial />
				<Shadow position-y={-0.79} rotation-x={-Math.PI / 2} opacity={0.6} scale={[0.8, 0.8, 1]} />
			</motion3d.mesh>
			<motion3d.mesh position={[0, -2, 0]} whileHover={{ scale: 1.2 }}>
				<textGeometry args={['CODING', config]} />
				<meshNormalMaterial />
			</motion3d.mesh>
			<Stars radius={500} depth={50} count={5000} fade />
		</group>
	);
};

const IntroductionSection: React.FC = () => {
	const transition = {
		hidden: { opacity: 0 },
		show: { opacity: 1, delay: 5.0 },
	};
	return (
		<Center>
			<motion.h1 initial="hidden" animate="show" variants={transition}>
				Hello! My name is Brandon.
			</motion.h1>
		</Center>
	);
};
export default function Home() {
	return (
		<Box>
			<Box>
				<Canvas>
					<Physics>
						<ambientLight intensity={4} />
						<pointLight position={[0, 0, -2]} />
						<Banner />
					</Physics>
				</Canvas>
			</Box>
			<IntroductionSection />
		</Box>
	);
}
