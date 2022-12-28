import someComponent from "../../components/someComponent.js";
import useUserStore from "../../store/exemple.js";

export default function Home() {
  const userStore = useUserStore();

  function script(){
    const userElt = document.getElementById("user");
    userElt.innerHTML = userStore.user
  }

  const render = () => 
  /*html*/
  `
    <h1 class="p-2">Hello <span id="user"></span></h1>
    <h4>imported component below</h4>
    ${someComponent().render()}
  `;

  return {
    render, script
  }
}