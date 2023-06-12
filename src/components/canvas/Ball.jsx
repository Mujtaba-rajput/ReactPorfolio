import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
import Loader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  console.log("decal",props)
  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#3d3d3d"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
          color={props.title==='React Native' ? "#61DBFB" : props.title==='JavaScript' ? "#F0DB4F" : props.title ==='TypeScript'? "#007acc": props.title==='HTML 5'?"#E34C26": props.title==='CSS 3'?"#264de4":props.title==='React JS' ? "#61DBFB":props.title==='Redux Toolkit' ? "#764abc": props.title==='graphql' ? "#e535ab":props.title==='postgresql' ? "#0078A9":props.title==='git' ? "#f34f29":props.title==='figma' ? "#FF3B00":props.title==='docker' ? "#0db7ed":props.title==="Tailwind CSS"? "#07b0ce":"green"}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon,title }) => {
  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} position0={0} />
        <Ball imgUrl={icon} title={title}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
