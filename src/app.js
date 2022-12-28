import { createRoute, onRouteChange, routerLink } from "./router/router.js";

const appElt = document.getElementById("app");

const init = () => {
  const render = () => {
    const route = createRoute();
    appElt.innerHTML = route.render();
    routerLink();
  };

  render();
  onRouteChange(render);
};

init();
