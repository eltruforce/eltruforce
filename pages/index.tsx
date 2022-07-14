import { useEffect } from "react";
import { Scene, WebGL1Renderer, PerspectiveCamera } from "three";

function HomePage() {
  useEffect(() => {
    const scene = new Scene();
    const renderer = new WebGL1Renderer({
      antialias: true,
      canvas: document.getElementById("bg"),
    });
    const camera = new PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // move camera
    camera.position.z = 6;

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
