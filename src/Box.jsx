const Box = ({ position, name }) => {
  return (
    <mesh position={position} name={name}>
      <boxGeometry />
      <meshBasicMaterial color="red" wireframe />
    </mesh>
  )
}

export default Box