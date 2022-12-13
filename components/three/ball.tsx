import { MaterialProps, MeshProps } from '@react-three/fiber';
import { forwardRef } from 'react';
import { Mesh, Vector3 } from 'three';

export type BallProps = MeshProps & MaterialProps;

export default forwardRef<Mesh, BallProps>(function Ball(props, ref) {
	const { color, position, scale } = props;

	return (
		<mesh position={position || new Vector3(1, 1, -1)} scale={scale || 1} ref={ref}>
			<sphereGeometry />
			<meshLambertMaterial color={color || 'red'} />
		</mesh>
	);
});
