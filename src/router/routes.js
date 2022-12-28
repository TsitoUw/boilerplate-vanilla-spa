import Home from "../home/home.js";

export const routes = {
  home: {
    name: "home",
    path: "/",
    render: Home
  },
  test: {
    name: "test",
    path: "/test",
    render: ()=>"<h1>Test</h1><div class='link' href='/'>home</div>"
  },
}