import * as THREE from "three";
import { generateRandomHexColor } from "../util/color";

export type MovementKeys = { a: boolean; s: boolean; d: boolean; w: boolean };

export default class Hero extends THREE.Mesh {
  public size: number = 0.2;
  public movementSpeed: number = 0.02;
  public currentSpeed: number = 0.0;
  public stop: number = 1;
  public velocity: number = 0;
  public coronaSafetyDistance: number = 1;
  public newPosition: THREE.Vector3 = new THREE.Vector3();
  public matrix: THREE.Matrix4 = new THREE.Matrix4();
  public dir: THREE.Vector3 = new THREE.Vector3();
  public a: THREE.Vector3 = new THREE.Vector3();
  public b: THREE.Vector3 = new THREE.Vector3();
  public temp: THREE.Vector3 = new THREE.Vector3();
  public goal: THREE.Object3D = new THREE.Object3D();
  public follow: THREE.Object3D = new THREE.Object3D();
  public keys: MovementKeys = { a: false, s: false, d: false, w: false };

  constructor(thirdPersonCamera: THREE.PerspectiveCamera) {
    const size: number = 0.2;
    super(
      new THREE.BoxBufferGeometry(size, size, size),
      new THREE.MeshStandardMaterial({
        color: generateRandomHexColor(),
      })
    );

    this._addKeydownHandler();
    this._addKeyupHandler();
    this.goal.position.z = -this.coronaSafetyDistance;
    this.goal.add(thirdPersonCamera);
  }

  private _addKeydownHandler(): void {
    document.body.addEventListener("keydown", (e: KeyboardEvent) => {
      const key: string = e.code.replace("Key", "").toLowerCase();
      if (this.keys[key as keyof MovementKeys] !== undefined)
        this.keys[key as keyof MovementKeys] = true;
    });
  }

  private _addKeyupHandler(): void {
    document.body.addEventListener("keyup", (e: KeyboardEvent) => {
      const key = e.code.replace("Key", "").toLowerCase();
      if (this.keys[key as keyof MovementKeys] !== undefined)
        this.keys[key as keyof MovementKeys] = false;
    });
  }
}
