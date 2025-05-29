import lotus from "./LOTUS.svg";
import seon from "./seon.svg";
export default function Partners() {
  return (
    <div className="partners">
      <div className="title">
        <p>OUR PARTNERS</p>
      </div>
      <div className="lotus">
        <img src={lotus} alt="" />
      </div>
      <div className="seon--sports">
        <img src={seon} alt="" />
      </div>
      <div className="button">
        <button>
          <p>Our History</p>
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
}
