
import { Stats, OrbitControls, Circle } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// hello

export default function App() {
  const gltf = useLoader(GLTFLoader, './shrine_of_the_oracle/scene.gltf')
  console.log(gltf)

  return (
    <Canvas camera={{ position: [0, 10, 20] }} shadows>
      <directionalLight position={[20, 2.0, 10.0]} castShadow />
      <primitive
        object={gltf.scene}
        position={[0, 0.5, 0]}
        scale={0.1}
        children-0-castShadow
        receiveShadow={true}
      />
      <Circle args={[100]} rotation-x={-Math.PI / 2} receiveShadow>
        <meshStandardMaterial />
      </Circle>
      <OrbitControls target={[0, 1, 0]} />
      <axesHelper args={[5]} />
      <Stats />
    </Canvas>
  )
}
