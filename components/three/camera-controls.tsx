import { extend, ReactThreeFiber, useThree, useFrame } from '@react-three/fiber';
import CameraControlDefault from 'camera-controls';
import { ForwardedRef, forwardRef, MutableRefObject, useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

CameraControlDefault.install({ THREE });
extend({ TextGeometry });
extend({ CameraControlDefault });

declare global {
	namespace JSX {
		interface IntrinsicElements {
			cameraControlDefault: ReactThreeFiber.Node<CameraControlDefault, typeof CameraControlDefault>;
		}
	}
}
const CameraController = forwardRef<CameraControlDefault, unknown>((_, ref) => {
	const cameraControls = useRef<CameraControlDefault | null>(null);
	const camera = useThree((state) => state.camera);
	const renderer = useThree((state) => state.gl);

	useFrame((_, delta) => cameraControls.current?.update(delta));
	useEffect(() => () => cameraControls.current?.dispose(), []);

	return (
		<cameraControlDefault
			ref={mergeRefs<CameraControlDefault>(cameraControls, ref)}
			args={[camera, renderer.domElement]}
		/>
	);
});

CameraController.displayName = 'Camera Controller';

function mergeRefs<T>(...refs: (MutableRefObject<T> | ForwardedRef<T>)[]) {
	return (instance: T): void => {
		for (const ref of refs) {
			if (typeof ref === 'function') {
				ref(instance);
			} else if (ref) {
				ref.current = instance;
			}
		}
	};
}

export type CameraControl = CameraControlDefault;
export { CameraController };
