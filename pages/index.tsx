import { useEffect } from "react";
import {
  Scene,
  WebGL1Renderer,
  PerspectiveCamera,
  SphereGeometry,
  TextureLoader,
  MeshPhongMaterial,
  Mesh,
  BackSide,
  AmbientLight,
  HemisphereLight,
} from "three";

function HomePage() {
  useEffect(() => {
    const scene = new Scene();
    const renderer = new WebGL1Renderer({
      antialias: true,
      canvas: document.getElementById("bg"),
    });
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // move camera
    camera.position.z = 6;

    // skybox
    const skyGeometry = new SphereGeometry(360, 25, 25);
    const skyLoader = new TextureLoader();
    const skyTexture = skyLoader.load("/sky.png");
    const skyMaterial = new MeshPhongMaterial({ map: skyTexture });
    const skybox = new Mesh(skyGeometry, skyMaterial);
    scene.add(skybox);
    skybox.material.side = BackSide;

    // ilumination
    scene.add(new AmbientLight(0x01e0ff, 0.8));
    scene.add(new HemisphereLight(0x01e0ff, 0.8));

    renderer.setSize(window.innerWidth, window.innerHeight);

    function animate() {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();
  }, []);
  return <canvas id="bg" />;
}

export default HomePage;
