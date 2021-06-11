import * as THREE from "three";

export default class Skybox extends THREE.CubeTexture {
  public static loader: THREE.CubeTextureLoader = new THREE.CubeTextureLoader();
  public static texture: THREE.CubeTexture;

  private static _imagePrefix: string = "skybox";

  constructor() {
    super([
      `../assets/skyboxes/${Skybox._imagePrefix}/back`,
      `../assets/skyboxes/${Skybox._imagePrefix}/down`,
      `../assets/skyboxes/${Skybox._imagePrefix}/front`,
      `../assets/skyboxes/${Skybox._imagePrefix}/left`,
      `../assets/skyboxes/${Skybox._imagePrefix}/right`,
      `../assets/skyboxes/${Skybox._imagePrefix}/up`,
    ]);
    Skybox.loader.load([
      `../assets/skyboxes/${Skybox._imagePrefix}/back`,
      `../assets/skyboxes/${Skybox._imagePrefix}/down`,
      `../assets/skyboxes/${Skybox._imagePrefix}/front`,
      `../assets/skyboxes/${Skybox._imagePrefix}/left`,
      `../assets/skyboxes/${Skybox._imagePrefix}/right`,
      `../assets/skyboxes/${Skybox._imagePrefix}/up`,
    ]);
  }

  public static apply(): THREE.CubeTexture {
    return Skybox.texture;
  }
}
