import { extend, ReactThreeFiber, useThree, useFrame } from '@react-three/fiber';
import CameraControl from 'camera-controls';
import { useMemo } from 'react';
import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

CameraControl.install({ THREE });
extend({ TextGeometry });
extend({ CameraControl });

declare global {
	namespace JSX {
		interface IntrinsicElements {
			cameraControlsDefault: ReactThreeFiber.Node<CameraControl, typeof CameraControl>;
		}
	}
}
export function CameraController() {
	const camera = useThree((state) => state.camera);
	const gl = useThree((state) => state.gl);

	const controls = useMemo(() => {
		return new CameraControl(camera, gl.domElement);
	}, []);

	useFrame((state, delta) => controls.update(delta));

	return null;
}
