import React, {Suspense, useState} from 'react';
import {OrbitControls, Stars, ContactShadows} from '@react-three/drei';
import {Canvas} from '@react-three/fiber';
import {proxy, useSnapshot} from 'valtio';
import BananaCat from './BananaCat';
import Palette from './Palette';


const stateProxy = proxy({
    current: null,
    items: { 
        'material_7': '#fff', 
        'material_6': '#fff', 
        'material_5': '#fff', 
        'material_4': '#fff', 
        'material_3': '#fff', 
        'material_2': '#fff', 
        'material_1': '#fff', 
        'material_0': '#fff', 
    },
});

function App(){
    const tiklaSnap = useSnapshot(stateProxy);
    const [ustuneGel, setUstuneGel] = useState(null);

    const onPointerOver = (event) => {
        event.stopPropagation();
        setUstuneGel(event.object.material.name);
    }

    function onPointerOut(event) {
        event.intersections.length === 0 && setUstuneGel(null);
    }

    const onPointerDown = (event) => {
        event.stopPropagation();
        stateProxy.current = event.object.material.name;
    };

    const onPointerMiss = (event) => {
        stateProxy.current = null;
    };

    return(
        <>
            <Palette state={stateProxy}/>
            <Canvas>
                <Stars />
                <OrbitControls/>
                <ambientLight/>
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={null}>
                    <BananaCat state= {stateProxy}
                    onPointerOver={onPointerOver}
                    onPointerOut={onPointerOut}
                    onPointerDown={onPointerDown}
                    onPointerMiss={onPointerMiss} 
                    />
                    <ContactShadows 
                        rotateX={Math.PI/2}
                        position={[0,-2.3,0]}
                        opacity={0.7}
                        blur={2}
                        style={{
                            position: 'absolute',
                            zIndex: '2'
                        }}
                    />
                </Suspense>
                
            </Canvas>
        </>
    )
}

export default App;
