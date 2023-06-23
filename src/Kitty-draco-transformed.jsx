/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 ./public/kitty-draco-transformed.glb
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva'
import { Color } from 'three'

export function Model(props) {
  const [hovered, setHovered] = useState(false)
  const { nodes, materials } = useGLTF('/kitty-draco-transformed.glb')

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  })

  useControls('Kitty', () => {
    console.log('creating color pickers')

    const colorPickers = {}
    Object.keys(materials).forEach((m) => {
      colorPickers[m] = {
        value: '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0'),
        onChange: (v) => {
          materials[m].color = new Color(v)
        }
      }
    })
    return colorPickers

    // using reduce
  //   return Object.keys(materials).reduce(
  //     (acc, m) =>
  //       Object.assign(acc, {
  //         [m]: {
  //           value:
  //             '#' +
  //             ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0'),
  //           onChange: (v) => {
  //             materials[m].color = new Color(v)
  //           },
  //         },
  //       }),
  //     {}
  //   )
  })

  return (
    <group
      {...props}
      dispose={null}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={(e) => {
        e.stopPropagation()
        document.getElementById('Kitty.' + e.object.material.name).focus()
      }}
    >
      <mesh geometry={nodes.ClothShoes.geometry} material={materials['Cloth.white']} />
      <group position={[0.25, 0.319, 0.793]} rotation={[-1.641, -0.007, 0.104]} scale={0.145}>
        <mesh geometry={nodes.Eye001.geometry} material={materials['Eye.001']} />
        <mesh geometry={nodes.Eye001_1.geometry} material={materials['EyeReflection.001']} />
      </group>
      <mesh geometry={nodes.EyeBrow.geometry} material={materials['Eyebrows.001']} />
      <mesh geometry={nodes.Eyelashes.geometry} material={materials['EyeLashes.001']} />
      <mesh geometry={nodes.HairBraid.geometry} material={materials['Hair.001']} />
      <mesh geometry={nodes.Hairfront.geometry} material={materials['Hair.001']} position={[-0.332, 1.012, 0.613]} rotation={[0.173, -0.786, 0.36]} scale={[-0.463, 1.474, 1.474]} />
      <mesh geometry={nodes.HairCap.geometry} material={materials['Hair.002']} position={[0, 0.657, 0.152]} scale={1.025} />
      <mesh geometry={nodes.Hand.geometry} material={materials['Hand.001']} position={[-1.738, -5.406, -2.222]} rotation={[-2.229, -0.354, -0.261]} />
      <mesh geometry={nodes.Plane007.geometry} material={materials['mesh.002']} />
      <mesh geometry={nodes.Plane007_1.geometry} material={materials['cloth.mesh']} />
      <mesh geometry={nodes.Plane007_2.geometry} material={materials['Cloth.Dark.Stripes']} />
      <mesh geometry={nodes.Plane007_3.geometry} material={materials['Cloth.Black.Leather']} />
      <mesh geometry={nodes.Plane007_4.geometry} material={materials.Leather} />
      <mesh geometry={nodes.Plane007_5.geometry} material={materials.Metal} />
      <mesh geometry={nodes.GIrlBasemesh005.geometry} material={materials['Face.001']} />
      <mesh geometry={nodes.GIrlBasemesh005_1.geometry} material={materials['Skin.001']} />
      <mesh geometry={nodes.Teeth001.geometry} material={materials['Tongue.001']} />
      <mesh geometry={nodes.Teeth001_1.geometry} material={materials['White.001']} />
      <mesh geometry={nodes.Teeth001_2.geometry} material={materials['SPIT.001']} />
    </group>
  )
}

useGLTF.preload('/kitty-draco-transformed.glb')
