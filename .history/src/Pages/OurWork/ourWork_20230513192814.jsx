import style from "./ourWork.module.scss";
import PICTUREWHITE from "../../Assets/Images/PICTUREWHITE.png";
import OurWork1 from "../../Assets/Images/OurWork1.png";
import OurWork2 from "../../Assets/Images/OurWork2.png";
import OurWork3 from "../../Assets/Images/OurWork3.png";
import OurWork4 from "../../Assets/Images/OurWork4.png";
import OurWork5 from "../../Assets/Images/OurWork5.png";
import OurWork6 from "../../Assets/Images/OurWork6.png";
import OurWork7 from "../../Assets/Images/OurWork7.png";
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
        <div
          className={`d-flex justify-content-center flex-wrap align-items-center ${style.column}`}
        >
          <div className={`${style.imgDiv} `}>
            <img src={PICTUREWHITE} alt="" className={style.user} />
            <p>creatively designed</p>
            <h2>Lorem ipsum dolor sit</h2>
            <img src={OurWork1} alt="" className={style.aboutImg} />
          </div>
          <div className={`${style.imgDiv} `}>
            <img src={PICTUREWHITE} alt="" className={style.user} />
            <p>creatively designed</p>
            <h2>Lorem ipsum dolor sit</h2>
            <img src={OurWork2} alt="" className={style.aboutImg} />
          </div>
          <div className={`${style.imgDiv} `}>
            <img src={PICTUREWHITE} alt="" className={style.user} />
            <p>creatively designed</p>
            <h2>Lorem ipsum dolor sit</h2>
            <img src={OurWork3} alt="" className={style.aboutImg} />
          </div>
          <div className={`${style.imgDiv} `}>
            <img src={PICTUREWHITE} alt="" className={style.user} />
            <p>creatively designed</p>
            <h2>Lorem ipsum dolor sit</h2>
            <img src={OurWork4} alt="" className={style.aboutImg} />
          </div>
          <div className={`${style.imgDiv} `}>
            <img src={PICTUREWHITE} alt="" className={style.user} />
            <p>creatively designed</p>
            <h2>Lorem ipsum dolor sit</h2>
            <img src={OurWork5} alt="" className={style.aboutImg} />
          </div>
          <div className={`${style.imgDiv} `}>
            <img src={PICTUREWHITE} alt="" className={style.user} />
            <p>creatively designed</p>
            <h2>Lorem ipsum dolor sit</h2>
            <img src={OurWork6} alt="" className={style.aboutImg} />
          </div>
          <div className={`${style.imgDiv} `}>
            <img src={PICTUREWHITE} alt="" className={style.user} />
            <p>creatively designed</p>
            <h2>Lorem ipsum dolor sit</h2>
            <img src={OurWork7} alt="" className={style.aboutImg} />
          </div>
        </div>
      </div>



      <div className={style.serviceFooter} >
        <div id="carouselExampleIndicators" className="carousel slide" >
          <div className="carousel-indicators ">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <div className="d-flex justify-content-center">
                <div>
                  <img src={OurWorkFooter} alt="" />
                </div>
                <div>
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod <br />
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, <br />
                    quis nostrud exercitation.”
                  </p>
                  <div className="d-flex align-items-center">
                    <div className={style.line}></div>
                    <h2>Jon Doe</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <div>
                  <img src={OurWorkFooter} alt="" />
                </div>
                <div>
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod <br />
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, <br />
                    quis nostrud exercitation.”
                  </p>
                  <div className="d-flex align-items-center">
                    <div className={style.line}></div>
                    <h2>Jon Doe</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <div>
                  <img src={OurWorkFooter} alt="" />
                </div>
                <div>
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod <br />
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, <br />
                    quis nostrud exercitation.”
                  </p>
                  <div className="d-flex align-items-center">
                    <div className={style.line}></div>
                    <h2>Jon Doe</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className={`carousel-control-prev-icon ${style.prev}`}
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className={`carousel-control-next-icon ${style.next}`}
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default OurWork;