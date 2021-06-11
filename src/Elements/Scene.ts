import * as THREE from "three";
import Skybox from "./SkyBox";

export default class Scene extends THREE.Scene {
  constructor() {
    super();
    this.background = Skybox.apply();
  }
}
