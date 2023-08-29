import style from "./ourStories.module.scss";
import admin1 from "../../Assets/Images/.png";
import admin2 from "../../Assets/Images/admin2.png";
import admin3 from "../../Assets/Images/admin3.png";


function OurStories() {
  return (
    <>
      <div className={`${style.OurStories}`}>
        <h3>Our stories</h3>
        <h2>Latest blog</h2>
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

      <div className={style.weAreFooter}></div>
    </>
  );
}

export default OurStories;
