//import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import { Canvas } from '@react-three/fiber'
import './styles.css'
import { StrictMode } from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Canvas camera={{ position: [0, 0, 2]}}>
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="red" wireframe />
      </mesh>
    </Canvas>
  </StrictMode>
)
