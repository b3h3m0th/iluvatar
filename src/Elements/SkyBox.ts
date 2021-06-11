import * as THREE from "three";

export default class Skybox extends THREE.CubeTexture {
  public static loader: THREE.CubeTextureLoader = new THREE.CubeTextureLoader();
  public static texture: THREE.CubeTexture;

  private static _imagePrefix: string = "skybox_";
  private static _fileExtension: string = ".png";

  constructor() {
    super();
  }

  public static apply(): THREE.CubeTexture {
    return Skybox.loader.load([
      `./assets/skyboxes/space/${Skybox._imagePrefix}left${Skybox._fileExtension}`,
      `./assets/skyboxes/space/${Skybox._imagePrefix}right${Skybox._fileExtension}`,
      `./assets/skyboxes/space/${Skybox._imagePrefix}up${Skybox._fileExtension}`,
      `./assets/skyboxes/space/${Skybox._imagePrefix}down${Skybox._fileExtension}`,
      `./assets/skyboxes/space/${Skybox._imagePrefix}front${Skybox._fileExtension}`,
      `./assets/skyboxes/space/${Skybox._imagePrefix}back${Skybox._fileExtension}`,
    ]);
  }
}
