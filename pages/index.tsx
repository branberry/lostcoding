/* eslint-disable react/no-unknown-property */
import { Center, Box, useColorMode } from '@chakra-ui/react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { useEffect } from 'react';

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
				WebkitTouchCallout: 'none' /* iOS Safari */,
				WebkitUserSelect: 'none' /* Safari */,
				KhtmlUserSelect: 'none' /* Konqueror HTML */,
				MozUserSelect: 'none' /* Old versions of Firefox */,
				msUserSelect: 'none' /* Internet Explorer/Edge */,
				userSelect: 'none' /* Non-prefixed version, currently
		                         supported by Chrome, Edge, Opera and Firefox */,
			}}>
			<Canvas>
				<Physics>
					<></>
				</Physics>
			</Canvas>
			<Center sx={{ position: 'absolute', top: '10vh', left: '40vw', fontSize: '6em' }}></Center>
		</Box>
	);
}
