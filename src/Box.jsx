import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Box = ({ position, name }) => {
  const ref = useRef()

  // state can be imported instead of _
  useFrame((_, delta) => {
    ref.current.rotation.x += 1 * delta
    ref.current.rotation.y += 0.5 * delta
    //ref.current.position.y = Math.sin(state.clock.getElapsedTime() * 4 / 2)
  })

  useEffect(() => {
    console.log(ref) 
  }, [])

  return (
    <mesh ref={ref} position={position} name={name}>
      <boxGeometry />
      <meshBasicMaterial color="red" wireframe />
    </mesh>
  )
}

export default Box