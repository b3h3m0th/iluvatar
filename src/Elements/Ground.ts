import * as THREE from "three";

export default class Ground extends THREE.Mesh {
  constructor() {
    super(
      new THREE.BoxGeometry(20, 20, 2),
      new THREE.MeshStandardMaterial({
        color: 0xeb4034,
        side: THREE.DoubleSide,
      })
    );

    this.position.y = -1;
    this.castShadow = false;
    this.receiveShadow = true;
    this.rotation.x = -Math.PI / 2;
  }
}
