import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { Model } from './Kitty-draco-transformed'

export default function App() {
  return (
    <Canvas shadows camera={{ position: [5, 0, 2] }}>
      <Environment preset="forest" />
      <Model />
       <OrbitControls  target={[0, -1, 0]}/>
    </Canvas>
  )
}