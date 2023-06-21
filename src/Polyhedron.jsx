import { useRef, useState, useEffect, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Polyhedron = ({ position, polyhedron }) => {
  const ref = useRef()
  const [count, setCount] = useState(0)

  useFrame((_, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += 0.5 * delta
  })

  return (
    <mesh
      ref={ref}
      position={position}
      polyhedron={polyhedron} 
      geometry={polyhedron[count]}
      onPointerDown={() => setCount((count + 1) % 3)}
    > 
      <meshBasicMaterial color='red' wireframe />
    </mesh>
  )
}

export default Polyhedron 