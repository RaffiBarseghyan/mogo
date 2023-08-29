import style from "./ourWork.module.scss";
import PICTUREWHITE from "../../Assets/Images/PICTUREWHITE.png";
import OurWork1 from "../../Assets/Images/OurWork1.png";
import OurWork2 from "../../Assets/Images/OurWork2.png";
import OurWork3 from "../../Assets/Images/OurWork3.png";
import OurWork4 from "../../Assets/Images/OurWork4.png";
import OurWork5 from "../../Assets/Images/OurWork5.png";
import OurWork6 from "../../Assets/Images/OurWork6.png";
import OurWork7 from "../../Assets/Images/OurWork7.png";

function OurWork() {
  return (
    <>
      <div className={`${style.OurWork}`}>
        <h3>What we do</h3>
        <h2>some of our work</h2>
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
            <img src={PICTUREWHITE} alt="" className={style.user} />
            <p>creatively designed</p>
            <h2>Lorem ipsum dolor sit</h2>
            <img src={OurWork1} alt="" className={style.aboutImg} />
          </div>
          <div className={style.imgDiv}>
            <img src={PICTUREWHITE} alt="" className={style.user} />
            <p>creatively designed</p>
            <h2>Lorem ipsum dolor sit</h2>
            <img src={OurWork2} alt="" className={style.aboutImg} />
          </div>
          <div className={style.imgDiv}>
            <img src={PICTUREWHITE} alt="" className={style.user} />
            <p>creatively designed</p>
            <h2>Lorem ipsum dolor sit</h2>
            <img src={OurWork3} alt="" className={style.aboutImg} />
          </div>
        </div>
      </div>
    </>
  );
}

export default OurWork;
