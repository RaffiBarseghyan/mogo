import style from "./ourStories.module.scss";
import OurStories1 from "../../Assets/Images/OurStories1.png";
import OurStories2 from "../../Assets/Images/OurStories2.png";
import OurStories3 from "../../Assets/Images/OurStories3.png";
import OurStories3 from "../../Assets/Images/.png";


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
              <img src={OurStories1} alt="" className={style.aboutImg1} />
            </div>
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>
              Consectetur adipiscing elit, sed do eiusmod tempor <br />
              incididunt ut labore et dolore magna aliqua.
            </p>
            <div>
              <div>
                <img src="" alt="" />
              </div>
            </div>
          </div>
          <div className={style.BigBox}>
            <div className={style.imgDiv}>
              <img src={OurStories2} alt="" className={style.aboutImg} />
            </div>
            <h3>Christopher Campbell</h3>
            <p>Branding/UX design</p>
          </div>
          <div className={style.BigBox}>
            <div className={style.imgDiv}>
              <img src={OurStories3} alt="" className={style.aboutImg} />
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
