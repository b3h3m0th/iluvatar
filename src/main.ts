import "./style.scss";
import World from "./Elements/World";

const app: HTMLDivElement = document.querySelector<HTMLDivElement>("#app")!;

let APP: World;

window.addEventListener("DOMContentLoaded", () => {
  APP = new World();
  APP.init();
});
