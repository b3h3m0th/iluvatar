import * as THREE from "three";
import ThirdPersonCamera from "./ThirdPersonCamera";
import Ground from "./Ground";
import Hero from "./Hero";
import OrbitControls from "./OrbitControls";
import Renderer from "./Renderer";
import Scene from "./Scene";

export default class World {
  public scene: Scene = new Scene();
  public thirdPersonCamera: ThirdPersonCamera = new ThirdPersonCamera();
  public hero: Hero = new Hero(this.thirdPersonCamera);
  public renderer: Renderer = new Renderer();
  public pointLight: THREE.PointLight = new THREE.PointLight(0xffffff, 1.3);
  public ambientLight: THREE.AmbientLight = new THREE.AmbientLight(0xffffff, 1);
  public orbitControls: OrbitControls = new OrbitControls(
    this.thirdPersonCamera,
    this.renderer.domElement
  );
  public ground: Ground = new Ground();
  public axesHelper: THREE.AxesHelper = new THREE.AxesHelper();

  private _gridHelper: THREE.GridHelper = new THREE.GridHelper(200, 50);
  private _pointLightHelper: THREE.PointLightHelper =
    new THREE.PointLightHelper(this.pointLight);

  public init(): void {
    this.pointLight.position.set(40, 30, 0);
    this.scene.add(
      this._gridHelper,
      this._pointLightHelper,
      this.pointLight,
      this.axesHelper
    );

    this._addWindowResizeHandler();

    this.scene.add(this.ground);

    this.scene.add(this.hero);
    this.RAF();
  }

  public RAF: () => void = () => {
    requestAnimationFrame(() => {
      this.hero.currentSpeed = 0.0;

      if (this.hero.keys.w) this.hero.currentSpeed = this.hero.movementSpeed;
      else if (this.hero.keys.s)
        this.hero.currentSpeed = -this.hero.movementSpeed;

      this.hero.velocity += (this.hero.currentSpeed - this.hero.velocity) * 0.3;
      this.hero.translateZ(this.hero.velocity);

      if (this.hero.keys.a) this.hero.rotateY(0.05);
      else if (this.hero.keys.d) this.hero.rotateY(-0.05);

      this.hero.a.lerp(this.hero.position, 0.4);
      this.hero.b.copy(this.hero.goal.position);

      this.hero.dir.copy(this.hero.a).sub(this.hero.b).normalize();
      const dis =
        this.hero.a.distanceTo(this.hero.b) - this.hero.coronaSafetyDistance;
      this.hero.goal.position.addScaledVector(this.hero.dir, dis);

      this.thirdPersonCamera.lookAt(this.hero.position);
      this.RAF();
      this.renderer.render(this.scene, this.thirdPersonCamera);
    });
  };

  private _addWindowResizeHandler(): void {
    window.addEventListener("resize", (e: UIEvent) => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.thirdPersonCamera.aspect = window.innerWidth / window.innerHeight;
      this.thirdPersonCamera.updateProjectionMatrix();
    });
  }
}
