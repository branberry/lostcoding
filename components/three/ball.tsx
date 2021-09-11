import { MeshProps } from "@react-three/fiber";



export default function Ball(props: MeshProps) {
  const { color, position } = props;

  return (
    <mesh position={position || [1,1,-1]}>
      <sphereGeometry/>
      <meshLambertMaterial color={color || "red"}/>
    </mesh>
  );
}