//This is the intro of the application

// const shop = document.querySelector(".shop--container");
// shop.addEventListener("click", () => {
//   location.href = "https://linktr.ee/inter_lagos";
// });

import Content from "./content";
import Header from "./header-anim";

function Main() {
  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
    </div>
  );
}

export default Main;
