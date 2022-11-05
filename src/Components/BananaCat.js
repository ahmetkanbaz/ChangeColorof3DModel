import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";


const BananaCat = ({state, onPointerOver, onPointerOut, onPointerDown, onPointerMiss, ...rest}) =>{
  const { nodes, materials } = useGLTF("glb_dosyalari/bananya_birbo.glb");
  const ref = useRef();
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.rotation.y = Math.sin(time / 2) / 4
    ref.current.position.y = Math.sin(time / 2) / 4
  })
  return (
    <group
    onPointerOver={onPointerOver}
    onPointerOut={onPointerOut}
    onPointerDown={onPointerDown}
    onPointerMiss={onPointerMiss} 
    {...rest} dispose={null} ref={ref}>
      <group
      rotation={[-1.2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.material_7}
          material-color = {state.items["material_7"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.material_6}
          material-color = {state.items["material_6"]}
          
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.material_6}
          material-color = {state.items["material_6"]}
          
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.material_5}
          material-color = {state.items["material_5"]}
          
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.material_5}
          material-color = {state.items["material_5"]}
          
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.material_5}
          material-color = {state.items["material_5"]}
          
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.material_4}
          material-color = {state.items["material_4"]}
          
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.material_4}
          material-color = {state.items["material_4"]}
          
          
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.material_3}
          material-color = {state.items["material_3"]}
          
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.material_3}
          material-color = {state.items["material_3"]}
          
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.material_2}
          material-color = {state.items["material_2"]}
          
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.material_2}
          material-color = {state.items["material_2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials.material_1}
          material-color = {state.items["material_1"]}
          
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials.material_0}
          material-color = {state.items["material_0"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("glb_dosyalari/bananya_birbo.glb");

export default BananaCat;