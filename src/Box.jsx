import { useRef, useState, useEffect, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Box = ({ position, name }) => {
  const ref = useRef()
  const [count, setCount] = useState(0)
  const geometry = useMemo(
    () => [new THREE.BoxGeometry(), new THREE.SphereGeometry(0.65)], []
  )

  useEffect(() => {
    console.log(ref.current.geometry.uuid)
  })

  useFrame((_, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += 0.5 * delta
  })

  return (
    <mesh
      ref={ref}
      position={position}
      name={name}
      geometry={geometry[count]}
      onPointerDown={() => setCount((count + 1) % 2)}
    > 
      <meshBasicMaterial color='red' wireframe />
    </mesh>
  )
}

export default Box