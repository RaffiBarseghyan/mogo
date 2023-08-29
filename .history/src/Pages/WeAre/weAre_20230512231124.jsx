import style from "./weAre.module.scss";
import service from "../../Assets/Images/service.png";
import PICTURE from "../../Assets/Images/PICTURE.png";
import EQUALIZER from "../../Assets/Images/EQUALIZER.png";
import BULLSEYE from "../../Assets/Images/BULLSEYE.png";
import serviceFooter from "../../Assets/Images/serviceFooter.png";

function WeAre() {
  return (
    <>
      <div className={`${style.WeAre}`}>
        <h3>Who we are</h3>
        <h2>Meet our team</h2>
        <div className={style.line}></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim br veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </>
  );
}

export default WeAre;
