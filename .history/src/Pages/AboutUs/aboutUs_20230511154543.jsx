import style from "./aboutUs.module.scss";
import aboutUs1 from "../../Assets/Images/aboutUs1.png";
import aboutUs2 from "../../Assets/Images/aboutUs2.png";
import aboutUs3 from "../../Assets/Images/aboutUs3.png";

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
        <div className="d-flex justify-content-ce flex-wrap ">
          <img src={aboutUs1} alt="" />
          <img src={aboutUs2} alt="" />
          <img src={aboutUs3} alt="" />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
