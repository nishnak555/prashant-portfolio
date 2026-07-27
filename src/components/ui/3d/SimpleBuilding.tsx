import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box } from '@react-three/drei'

export function SimpleBuilding() {
  const ref = useRef<any>(null)
  
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002
    }
  })

  return (
    <group ref={ref}>
      {/* Main building structure */}
      <mesh position={[-1.5, 2, 0]}>
        <boxGeometry args={[2, 4, 2]} />
        <meshStandardMaterial color="#334155" opacity={0.8} transparent />
      </mesh>
      
      {/* Tower section */}
      <mesh position={[1.5, 3.5, 0]}>
        <boxGeometry args={[1, 2, 1]} />
        <meshStandardMaterial color="#64748b" opacity={0.8} transparent />
      </mesh>
      
      {/* Glass windows effect */}
      <mesh position={[-1.5, 2, 1.01]}>
        <boxGeometry args={[2, 4, 0.1]} />
        <meshStandardMaterial color="#ffffff" opacity={0.3} transparent />
      </mesh>
      
      <mesh position={[-1.5, 2, -1.01]}>
        <boxGeometry args={[2, 4, 0.1]} />
        <meshStandardMaterial color="#ffffff" opacity={0.3} transparent />
      </mesh>
    </group>
  )
}
