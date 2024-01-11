import { usePlane, useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
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
      <planeGeometry args={[200, 200]} />
      <meshStandardMaterial />
    </mesh>
  );
}

function Player() {
  const [ref, api] = useSphere<PhysicsMesh>(() => ({
    mass: 0.1,
    position: [0, 5, 0],
  }));
  useFrame(({ camera }) => {
    if (!ref.current) return;

    camera.lookAt(ref.current.position);
  });

  useEffect(() => {
    const unsubscribe = api.position.subscribe((pos) =>
      ref.current?.position.set(...pos)
    );
    return unsubscribe;
  });

  useEffect(() => {
    const eventHandler = (ev: KeyboardEvent) => {
      console.log(ev.key);

      switch (ev.key) {
        case "w":
          api.applyForce([0, 0, -5], [0, 0, 0]);
          break;
        case "a":
          api.applyForce([-5, 0, 0], [0, 0, 0]);
          break;
        case "s":
          api.applyForce([0, 0, 5], [0, 0, 0]);
          break;
        case "d":
          api.applyForce([5, 0, 0], [0, 0, 0]);
          break;
      }
    };

    window.addEventListener("keydown", eventHandler);

    return () => {
      window.removeEventListener("keydown", eventHandler);
    };
  }, []);
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
