import { DefaultXRControllers, VRCanvas } from '@react-three/xr'
import Ball from '../components/three/ball'

export default function VirtualRealityPage() {
  return <div>
    <h1>
      Welcome to the Virtual Reality page!
    </h1>
    <VRCanvas>
      <ambientLight/>
      <pointLight position={[10, 10, 10]} />
      <Ball/>
      <DefaultXRControllers/>
    </VRCanvas>
  </div>
}