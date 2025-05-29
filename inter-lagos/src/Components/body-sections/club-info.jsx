import Shop from "./shop";
import Table from "./table";

function ClubInfo() {
  return (
    <div className="club--info--container">
      <div className="title">
        <p>CLUB INFORMATION</p>
      </div>

      <div className="table">
        <Table />
      </div>

      <div className="shop--partners">
        <Shop></Shop>
      </div>
    </div>
  );
}

export default ClubInfo;
