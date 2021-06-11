import * as THREE from "three";

export default class Ground extends THREE.Mesh {
  constructor() {
    super(
      new THREE.BoxGeometry(50, 50, 2),
      new THREE.MeshStandardMaterial({
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0,
      })
    );

    this.position.y = -1;
    this.castShadow = false;
    this.receiveShadow = true;
    this.rotation.x = -Math.PI / 2;
  }
}
