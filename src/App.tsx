import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./components/Scene";
import { Physics } from "@react-three/cannon";

function App() {
  return (
    <div
      id="canvas-container"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Canvas style={{ width: "100%", height: "100%" }}>
        <Physics>
          <Scene />
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;
