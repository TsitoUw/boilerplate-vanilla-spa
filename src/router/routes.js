import Home from "../views/home/home.js";

export const routes = {
  home: {
    name: "home",
    path: "/",
    render: Home().render,
    script: Home().script
  },

  test: {
    name: "test",
    path: "/test",
    render: ()=>"<h1>Test</h1><div class='link' href='/'>home</div>"
  },
}