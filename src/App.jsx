import { Canvas } from '@react-three/fiber'
import Polyhedron from './Polyhedron'
import * as THREE from 'three'
import { Stats } from '@react-three/drei'

const App = () => {
  const polyhedron = [
    new THREE.BoxGeometry(),
    new THREE.SphereGeometry(0.65),
    new THREE.DodecahedronGeometry(0.65)
  ]

  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <Polyhedron position={[-0.75, -0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[0.75, -0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[-0.75, 0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[0.75, 0.75, 0]} polyhedron={polyhedron} />
      <Stats />
    </Canvas>
  )
}

export default App