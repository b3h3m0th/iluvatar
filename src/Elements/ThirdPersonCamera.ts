import * as THREE from "three";

export default class ThirdPersonCamera extends THREE.PerspectiveCamera {
  public xOffset: number = 0;
  public yOffset: number = 1;
  public zOffset: number = 0;

  constructor(scene: THREE.Scene) {
    super(100, window.innerWidth / window.innerHeight, 0.01, 1000);
    this.position.set(this.xOffset, this.yOffset, this.zOffset);
    this.lookAt(scene.position);
    this.rotation.x = -Math.PI / 2;
  }
}
