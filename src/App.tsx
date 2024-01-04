import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./components/Scene";

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
        <Scene />
      </Canvas>
    </div>
  );
}

export default App;
