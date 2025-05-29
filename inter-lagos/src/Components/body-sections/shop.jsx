const shop = document.querySelector(".shop--container");
shop.addEventListener("click", () => {
  location.href = "https://linktr.ee/inter_lagos";
});

function Shop() {
  return (
    <div className="shop--portal">
      <div className="title">
        <p>SHOP</p>
      </div>
      <div className="shop--container">
        <p className="shop--txt">BUY YOUR MERCH AND MATCHDAY TICKETS</p>
      </div>
    </div>
  );
}

export default Shop;
