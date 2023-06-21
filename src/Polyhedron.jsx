import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Polyhedron(props) {
  const ref = useRef()


  return (
    <mesh {...props} ref={ref} castShadow receiveShadow>
      <boxGeometry args={[1.25, 2, 0.10]} />
    </mesh>
  )
}