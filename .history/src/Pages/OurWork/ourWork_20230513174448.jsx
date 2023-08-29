import style from "./ourWork.module.scss";


function OurWork() {
  return (
    <>
      <div className={`${style.OurWork}`}>
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
              <div className="d-flex justify-content-around">
                <div
                  className={style.facebook}
                  style={{ marginRight: "168px" }}
                >
                  <ImFacebook />
                </div>
                <div className={style.facebook} style={{ marginRight: "56px" }}>
                  <AiOutlineTwitter />
                </div>
                <div className={style.facebook} style={{ marginLeft: "56px" }}>
                  <TfiPinterest />
                </div>
                <div className={style.facebook} style={{ marginLeft: "168px" }}>
                  <ImInstagram />
                </div>
              </div>
              <img src={admin1} alt="" className={style.aboutImg1} />
            </div>
            <h3>Matthew Dix</h3>
            <p>Graphic Design</p>
          </div>
          <div className={style.BigBox}>
            <div className={style.imgDiv}>
              <div className="d-flex justify-content-around">
                <div
                  className={style.facebook}
                  style={{ marginRight: "168px" }}
                >
                  <ImFacebook />
                </div>
                <div className={style.facebook} style={{ marginRight: "56px" }}>
                  <AiOutlineTwitter />
                </div>
                <div className={style.facebook} style={{ marginLeft: "56px" }}>
                  <TfiPinterest />
                </div>
                <div className={style.facebook} style={{ marginLeft: "168px" }}>
                  <ImInstagram />
                </div>
              </div>
              <img src={admin2} alt="" className={style.aboutImg} />
            </div>
            <h3>Christopher Campbell</h3>
            <p>Branding/UX design</p>
          </div>
          <div className={style.BigBox}>
            <div className={style.imgDiv}>
              <div className="d-flex justify-content-around">
                <div
                  className={style.facebook}
                  style={{ marginRight: "168px" }}
                >
                  <ImFacebook />
                </div>
                <div className={style.facebook} style={{ marginRight: "56px" }}>
                  <AiOutlineTwitter />
                </div>
                <div className={style.facebook} style={{ marginLeft: "56px" }}>
                  <TfiPinterest />
                </div>
                <div className={style.facebook} style={{ marginLeft: "168px" }}>
                  <ImInstagram />
                </div>
              </div>
              <img src={admin3} alt="" className={style.aboutImg} />
            </div>
            <h3>Michael Fertig </h3>
            <p>Developer</p>
          </div>
        </div>
      </div>

      <div className={style.ourWorkFooter}></div>
    </>
  );
}

export default OurWork;
