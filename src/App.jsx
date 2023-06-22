import { Stats, OrbitControls, Environment, Sphere } from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { useControls } from 'leva'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Env = () => {
  const { height, radius, scale } = useControls('Ground', {
    height: { value: 10, min: 0, max: 100, stop: 1 },
    radius: { value: 100, min: 0, max: 1000, stop: 1 },
    scale: { value: 15, min: 0, max: 1000, stop: 1 },
  })

  return (
    <Environment 
      files="./studio.exr" 
      ground={{ 
        height: height, 
        radius: radius, 
        scale: scale 
      }} 
      background blur={0.1} 
    />
  )
}

const Model = () => {
  // lever controls
  const model = useControls('Model', {
      visible: true
  })

  const backpack = useControls('Backpack', {
    visible: true
  })

  const kitty = useControls('Kitty', {
    visible: true
  })

  const lingerie = useControls('Lingerie', {
    visible: true
  })

  const shoes = useControls('Shoes', {
    visible: true
  })

  const { scene }= useLoader(GLTFLoader, './wednesday.glb')

  return (
      <primitive
        object={scene}
        visible={model.visible}
        children-0-children-0-visible={backpack.visible}
        children-0-children-1-visible={kitty.visible}
        children-0-children-2-visible={lingerie.visible}
        children-0-children-3-visible={shoes.visible}
        children-0-children-4-visible={shoes.visible}
        children-0-children-5-visible={shoes.visible}
        position={[0, 0, 0]}
        scale={0.2}
      />
  )
}

export default function App() {
  return (
    <Canvas camera={{ position: [2, 2, 3] }}>
      <Env />
      <ambientLight intensity={0.5} position={[0, 5, 10]}>
        <Sphere args={[0.25]} />
      </ambientLight>
      <Model />
      <OrbitControls target={[0, 1, 0]} maxPolarAngle={Math.PI/2}/>
      <axesHelper args={[5]} />
      <Stats />
    </Canvas>
  )
}