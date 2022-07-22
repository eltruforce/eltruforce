import { AmbientLight, HemisphereLight } from "three";

export default class Lights {
  constructor(scene) {
    scene.add(new AmbientLight(0x01e0ff, 0.8));
    scene.add(new HemisphereLight(0x01e0ff, 0.8));
  }
}
