import styles from '../styles/Home.module.css'
import { Canvas } from '@react-three/fiber'
import Cone from '../components/three/cone'
import router, { useRouter } from 'next/router'

export default function Home() {

  const gotoArPage = () => {
    router.push('/ar')
  }
  return (
    <div className={styles.container}>
      <h1>
        In Progress...
      </h1>
      <Canvas>
        <ambientLight/>
        <pointLight color={[10,10,10]}/>
        <Cone
          changePage={gotoArPage}
        />
      </Canvas>
    </div>
  )
}
