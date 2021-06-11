import * as THREE from "three";
import { OrbitControls as OC } from "three/examples/jsm/controls/OrbitControls";

export default class OrbitControls extends OC {
  constructor(
    camera: THREE.Camera,
    rendererDomElement: THREE.Renderer["domElement"]
  ) {
    super(camera, rendererDomElement);
  }
}
