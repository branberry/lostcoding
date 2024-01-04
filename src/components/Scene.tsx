import { useThree } from "@react-three/fiber";

export function Scene() {
  useThree(({ camera }) => {
    camera.rotation.set(-Math.PI / 8, 0, 0);
    camera.position.setY(1.5);
    camera.position.setZ(2.5);
  });
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2, 2]} />
        <meshStandardMaterial />
      </mesh>
      <pointLight position={[0, 0, 1]} />
      <ambientLight />
    </>
  );
}
