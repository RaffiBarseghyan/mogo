import style from "./weAre.module.scss";
import admin1 from "../../Assets/Images/admin1.png";
import admin2 from "../../Assets/Images/admin2.png";
import admin3 from "../../Assets/Images/admin3.png";

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
            {/* <img src={user} alt="" className={style.user} /> */}
            <div></div>
            <img src={admin1} alt="" className={style.aboutImg1} />
          </div>
          <div className={style.imgDiv}>
            {/* <img src={user} alt="" className={style.user} /> */}
            <p>SUPER TEAM</p>
            <img src={admin2} alt="" className={style.aboutImg} />
          </div>
          <div className={style.imgDiv}>
            {/* <img src={user} alt="" className={style.user} /> */}
            <p>SUPER TEAM</p>
            <img src={admin3} alt="" className={style.aboutImg} />
          </div>
        </div>
      </div>
    </>
  );
}

export default WeAre;
