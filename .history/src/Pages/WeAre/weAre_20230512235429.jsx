import style from "./weAre.module.scss";
import admin1 from "../../Assets/Images/admin1.png";
import admin2 from "../../Assets/Images/admin2.png";
import admin3 from "../../Assets/Images/admin3.png";
import { ImFacebook } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";
import { TfiPinterest } from "react-icons/tfi";
import { ImInstagram } from "react-icons/im";

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
          minim <br />
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>

        <div className="d-flex justify-content-center flex-wrap ">
          <div className={style.imgDiv}>
            <div className="d-flex justify-content-around">
              <div style={{marginRight:"56px"}}>
                <ImFacebook />
              </div>
              <div style={{marginLeft:"56px"}}>
                <AiOutlineTwitter />
              </div>
              <div style={{marginLeft:"165px"}}>
                <TfiPinterest />
              </div>
              <div style={{marginLeft:"191px"}}>
                <ImInstagram />
              </div>
            </div>
            <img src={admin1} alt="" className={style.aboutImg1} />
          </div>
          <div className={style.imgDiv}>
            <p>SUPER TEAM</p>
            <img src={admin2} alt="" className={style.aboutImg} />
          </div>
          <div className={style.imgDiv}>
            <p>SUPER TEAM</p>
            <img src={admin3} alt="" className={style.aboutImg} />
          </div>
        </div>
      </div>
    </>
  );
}

export default WeAre;
