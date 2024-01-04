import { usePlane, useSphere } from "@react-three/cannon";
import { useThree } from "@react-three/fiber";
import { BufferGeometry, Material, Mesh, Object3DEventMap } from "three";

type PhysicsMesh = Mesh<
  BufferGeometry,
  Material | Material[],
  Object3DEventMap
>;

function Floor() {
  const [ref] = usePlane<PhysicsMesh>(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  return (
    <mesh ref={ref}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial />
    </mesh>
  );
}

function Player() {
  const [ref] = useSphere<PhysicsMesh>(() => ({
    mass: 0.1,
    position: [0, 5, 0],
  }));

  return (
    <mesh ref={ref}>
      <sphereGeometry />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}

export function Scene() {
  useThree(({ camera }) => {
    camera.rotation.set(-Math.PI / 16, 0, 0);
    camera.position.setY(5);
    camera.position.setZ(15);
  });
  return (
    <>
      <Floor />
      <Player />
      <pointLight position={[0, 0, 1]} />
      <ambientLight />
    </>
  );
}
