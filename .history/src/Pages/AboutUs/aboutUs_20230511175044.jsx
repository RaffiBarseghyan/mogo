import style from "./aboutUs.module.scss";
import aboutUs1 from "../../Assets/Images/aboutUs1.png";
import aboutUs2 from "../../Assets/Images/aboutUs2.png";
import aboutUs3 from "../../Assets/Images/aboutUs3.png";
import user from "../../Assets/Images/USERS.png";

function AboutUs() {
  return (
    <>
      <div className={style.aboutUs}>
        <h3>What we do</h3>
        <h2>Story about us</h2>
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
            <img src={aboutUs1} alt="" className={style.aboutImg}/>
          </div>
          <div className={style.imgDiv}>
            <img src={user} alt="" className={style.user} />
            <p>SUPER TEAM</p>
            <img src={aboutUs2} alt="" className={style.aboutImg}/>
          </div>
          <div className={style.imgDiv}>
            <img src={user} alt="" className={style.user} />
            <p>SUPER TEAM</p>
            <img src={aboutUs3} alt="" className={style.aboutImg}/>
          </div>
        </div>
      </div>

      <div className={style.aboutUsFooter}>
        <div>
            <h2>42</h2>
            <p>Web Design Projects</p>
        </div>
        <div>
            <h2>123</h2>
            <p>happy client</p>
        </div>
        <div>
            <h2>15</h2>
            <p></p>
        </div>
        <div>
            <h2>99</h2>
            <p></p>
        </div>
        <div>
            <h2>24</h2>
            <p></p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
