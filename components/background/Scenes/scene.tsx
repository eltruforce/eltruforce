import { Scene as SceneThree } from "three";
import Camera from "../Class/camera";
import Lights from "../Class/lights";
import Loader from "../Class/loader";
import Skybox from "../Class/skybox";

export default class Scene extends SceneThree {
  private camera: Camera;

  constructor(renderer) {
    super();
    const loader = new Loader();
    this.camera = new Camera();
    new Lights(this);
    new Skybox(this);
    this.update(renderer);
  }
  private update(renderer) {
    renderer.render(this, this.camera);
    requestAnimationFrame(this.update.bind(this, renderer));
  }
}
