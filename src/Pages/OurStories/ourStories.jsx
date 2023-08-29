import style from "./ourStories.module.scss";
import OurStories1 from "../../Assets/Images/OurStories1.png";
import OurStories2 from "../../Assets/Images/OurStories2.png";
import OurStories3 from "../../Assets/Images/OurStories3.png";
import VIEW from "../../Assets/Images/VIEW.png";
import COMENT from "../../Assets/Images/COMENT.png";
import map from "../../Assets/Images/map.png";

function OurStories() {
  return (
    <>
      <div className={`${style.OurStories}`}>
        <h3>Our stories</h3>
        <h2>Latest blog</h2>
        <div className={style.line}></div>

        <div className="d-flex justify-content-center flex-wrap ">
          <div className={style.BigBox}>
            <div className={style.imgDiv}>
              <div>
                <p>15</p>
                <h4>Jan</h4>
              </div>
              <img src={OurStories1} alt="" className={style.aboutImg1} />
            </div>
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>
              Consectetur adipiscing elit, sed do eiusmod tempor <br />
              incididunt ut labore et dolore magna aliqua.
            </p>
            <div className={style.view}>
              <img src={VIEW} alt="" />
              <p>542</p>
              <img src={COMENT} alt="" />
              <p>17</p>
            </div>
          </div>
          <div className={style.BigBox}>
            <div className={style.imgDiv}>
              <div>
                <p>14</p>
                <h4>Jan</h4>
              </div>
              <img src={OurStories2} alt="" className={style.aboutImg1} />
            </div>
            <h3>sed do eiusmod tempor</h3>
            <p>
              Adipiscing elit, sed do eiusmod tempor incididunt ut <br />
              labore et dolore magna aliqua.
            </p>
            <div className={style.view}>
              <img src={VIEW} alt="" />
              <p>992</p>
              <img src={COMENT} alt="" />
              <p>42</p>
            </div>
          </div>
          <div className={style.BigBox}>
            <div className={style.imgDiv}>
              <div>
                <p>12</p>
                <h4>Jan</h4>
              </div>
              <img src={OurStories3} alt="" className={style.aboutImg1} />
            </div>
            <h3>incididunt ut labore et dolore</h3>
            <p>
              Elit, sed do eiusmod tempor incididunt ut labore et dolore <br />
              magna aliqua.
            </p>
            <div className={style.view}>
              <img src={VIEW} alt="" />
              <p>1560</p>
              <img src={COMENT} alt="" />
              <p>98</p>
            </div>
          </div>
        </div>
      </div>

      <a
        target="_blank"
        href="https://www.google.com/maps/place/45+Artashesyan+St,+Yerevan/@40.1531088,44.4782083,18.92z/data=!4m6!3m5!1s0x406abc26aa92ed0b:0x5face05d990d39b2!8m2!3d40.1533711!4d44.4783479!16s%2Fg%2F11c24dzw6n"
        className={style.weAreFooter}
      >
        <div>
          <img src={map} alt="" />
        </div>
        <h2>Open Map</h2>
        <div className={style.footerLine}></div>
      </a>
    </>
  );
}

export default OurStories;
