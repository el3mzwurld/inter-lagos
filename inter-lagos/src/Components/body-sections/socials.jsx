import twitter from "./social--icos/twt.svg";
import fb from "./social--icos/fb.svg";
import yt from "./social--icos/yt.svg";
import insta from "./social--icos/insta.svg";

export default function Socials() {
  return (
    <div className="social--links">
      <div className="title">
        <p>REACH US ON OUR SOCIALS</p>
      </div>
      <ul className="links--tray">
        <li className="link" id="insta">
          <img src={insta} alt="" />
        </li>
        <li className="link" id="twitter">
          <img src={twitter} alt="" />
        </li>
        <li className="link" id="fb">
          <img src={fb} alt="" />
        </li>
        <li className="link" id="yt">
          <img src={yt} alt="" />
        </li>
      </ul>
    </div>
  );
}
