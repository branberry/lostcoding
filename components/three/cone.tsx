import { useSpring, config, animated } from "@react-spring/three";
import { MeshProps, useFrame } from "@react-three/fiber";
import { useState, useRef } from "react";
import { Mesh } from "three";

interface ConeProps {
  changePage: () => void;
}

export default function Cone(props: ConeProps) {
  const [active, setActive] = useState(false);
  const coneMesh = useRef<Mesh>();

  const { changePage } = props;

  const { scale, color } = useSpring({
    scale: active ? 2 : 1,
    color: active ? "blue" : "orange",
    config: config.slow,
  });

  useFrame(({ clock }) => {
    if (coneMesh.current) {
      coneMesh.current!.rotation.y = clock.getElapsedTime();
    }
  });

  return (
    <animated.mesh
      onClick={() => changePage()}
      onPointerEnter={() => setActive(!active)}
      onPointerLeave={() => setActive(!active)}
      scale={scale}
      ref={coneMesh}
    >
      <coneGeometry />
      <animated.meshStandardMaterial color={color} />
    </animated.mesh>
  );
}
