import { useRef, useState, useEffect, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Box = ({ position, name }) => {
  const [rotate, setRotate] = useState(false)
  const ref = useRef()
  const geometry = useMemo(() => new THREE.BoxGeometry(), [])

  useEffect(() => {
    console.log(ref.current.geometry.uuid)
  }, [rotate])

  useFrame((_, delta) => {
    if (rotate) {
      ref.current.rotation.x += delta * rotate
      ref.current.rotation.y += delta * rotate
    }
  })

  return (
    <mesh
      ref={ref}
      position={position}
      name={name}
      geometry={geometry}
      onPointerDown={() => setRotate(!rotate)}
    > 
      <boxGeometry />
      <meshBasicMaterial color='red' wireframe />
    </mesh>
  )
}

export default Box