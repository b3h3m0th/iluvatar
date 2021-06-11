import * as THREE from "three";

export default class Renderer extends THREE.WebGLRenderer {
  constructor() {
    super({
      canvas: document.getElementById("iluvatar-cv")! as HTMLCanvasElement,
      antialias: true,
      alpha: true,
    });
    this.setSize(window.innerWidth, window.innerHeight);
    this.setPixelRatio(window.devicePixelRatio);
  }
}
