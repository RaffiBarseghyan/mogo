import style from "./weAre.module.scss";
import admin1 from "../../Assets/Images/admin1.png";
import admin2 from "../../Assets/Images/admin2.png";
import admin3 from "../../Assets/Images/admin3.png";
import { ImFacebook } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";
import { TfiPinterest } from "react-icons/tfi";
import { ImInstagram } from "react-icons/im";

function OurStories() {
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
          <div className={style.BigBox}>
            <div className={style.imgDiv}>
              <img src={admin1} alt="" className={style.aboutImg1} />
            </div>
            <h3>Matthew Dix</h3>
            <p>Graphic Design</p>
          </div>
          <div className={style.BigBox}>
            <div className={style.imgDiv}>
              <img src={admin2} alt="" className={style.aboutImg} />
            </div>
            <h3>Christopher Campbell</h3>
            <p>Branding/UX design</p>
          </div>
          <div className={style.BigBox}>
            <div className={style.imgDiv}>
              <img src={admin3} alt="" className={style.aboutImg} />
            </div>
            <h3>Michael Fertig </h3>
            <p>Developer</p>
          </div>
        </div>
      </div>

      <div className={style.weAreFooter}>

      </div>
    </>
  );
}

export default OurStories;
