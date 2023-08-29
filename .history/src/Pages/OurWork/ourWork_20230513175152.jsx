import style from "./ourWork.module.scss";
import user from "../../Assets/Images/USERS.png";
import OurWork1 from "../../Assets/Images/OurWork1.png";
import OurWork2 from "../../Assets/Images/OurWork2.png";
import OurWork3 from "../../Assets/Images/OurWork3.png";
import OurWork1 from "../../Assets/Images/OurWork1.png";
import OurWork1 from "../../Assets/Images/OurWork1.png";
import OurWork1 from "../../Assets/Images/OurWork1.png";
import OurWork1 from "../../Assets/Images/OurWork1.png";

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
            <img src={user} alt="" className={style.user} />
            <p>SUPER TEAM</p>
            <img src={aboutUs1} alt="" className={style.aboutImg} />
          </div>
          <div className={style.imgDiv}>
            <img src={user} alt="" className={style.user} />
            <p>SUPER TEAM</p>
            <img src={aboutUs2} alt="" className={style.aboutImg} />
          </div>
          <div className={style.imgDiv}>
            <img src={user} alt="" className={style.user} />
            <p>SUPER TEAM</p>
            <img src={aboutUs3} alt="" className={style.aboutImg} />
          </div>
        </div>
      </div>
    </>
  );
}

export default OurWork;
