import { MaterialProps, MeshProps } from "@react-three/fiber";

type BallProps = MeshProps & MaterialProps;

export default function Ball(props: BallProps) {
  const { color, position } = props;

  return (
    <mesh position={position || [1,1,-1]}>
      <sphereGeometry/>
      <meshLambertMaterial color={color || "red"}/>
    </mesh>
  );
}