
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stats, OrbitControls, Environment, useGLTF, Clone } from '@react-three/drei'
import { useControls } from 'leva'

const Models = [
  { title: 'Wednesday', url: './wednesday.glb' },
  { title: 'Hammer', url: './hammer.glb' }
]

function Model({ url }) {
  const { scene } = useGLTF(url)
  if (url === './hammer.glb')
    return <Clone scale={20} object={scene} />
  return <Clone scale={0.35} object={scene} />

}

export default function App() {
  const { title } = useControls({
    title: {
      options: Models.map(({ title }) => title),
    },
  })

  return (
    <>
      <Canvas camera={{ position: [-3, 8, 1]  }}>
        <Environment files="./studio.exr" background />
        <Suspense>
          <Model url={Models[Models.findIndex((m) => m.title === title)].url} />
        </Suspense>
        <OrbitControls autoRotate />
        <Stats />
      </Canvas>
      <span id="info">{title} is selected.</span>
    </>
  )
}