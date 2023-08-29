import style from "./footer.module.scss";
import { ImFacebook } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";
import { TfiPinterest } from "react-icons/tfi";
import { ImInstagram } from "react-icons/im";
import { TiSocialGooglePlus } from "react-icons/ti";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineDribbble } from "react-icons/ai";
import { GrTumblr } from "react-icons/gr";
import footerBlog1 from "../../Assets/Images/footerBlog1.png";
import footerBlog2 from "../../Assets/Images/footerBlog2.png";
import footerBlog3 from "../../Assets/Images/footerBlog3.png";
import footerInstagram1 from "../../Assets/Images/footerInstagram1.png";
import footerInstagram2 from "../../Assets/Images/footerInstagram2.png";
import footerInstagram3 from "../../Assets/Images/footerInstagram3.png";
import footerInstagram4 from "../../Assets/Images/footerInstagram4.png";
import footerInstagram5 from "../../Assets/Images/footerInstagram5.png";
import footerInstagram6 from "../../Assets/Images/footerInstagram6.png";
import footerInstagram7 from "../../Assets/Images/footerInstagram7.png";
import footerInstagram8 from "../../Assets/Images/footerInstagram8.png";
import footerInstagram9 from "../../Assets/Images/footerInstagram9.png";

function Footer() {
  return (
    <>
      <div className={` ${style.footer}`}>
        <div className="container d-flex flex-wrap justify-content-between">
          <div className={style.footer1box}>
            <a className={`${style.logo} navbar-brand me-5`} href="#">
              MoGo
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim <br />
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              <br />
              aliquip ex ea commodo consequat.
            </p>
            <h2>
              15k <span>followers</span>{" "}
            </h2>
            <div className={style.follows}>
              <h2>Follow Us:</h2>
              <ImFacebook className="me-2" />
              <AiOutlineTwitter className="me-2" />
              <ImInstagram className="me-2" />
              <TfiPinterest className="me-2" />
              <TiSocialGooglePlus className="me-2" />
              <AiFillYoutube className="me-2" />
              <AiOutlineDribbble className="me-2" />
              <GrTumblr className="me-2" />
            </div>
            <div>
              <input type="email" name="" id="" placeholder="Your Email..." />
              <button>Subscribe</button>
            </div>
          </div>
          <div className={style.footer2box}>
            <h2>BLOGS</h2>
            <div className="d-flex">
              <img src={footerBlog1} alt="" />
              <div>
                <h3>
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                </h3>
                <p>Jan 9, 2016</p>
              </div>
            </div>
            <div className="d-flex">
              <img src={footerBlog2} alt="" />
              <div>
                <h3>
                  Consectetur adipiscing elit, <br />
                  sed do eiusmod tempor
                </h3>
                <p>Jan 9, 2016</p>
              </div>
            </div>
            <div className="d-flex">
              <img src={footerBlog3} alt="" />
              <div>
                <h3>
                  sed do eiusmod tempor <br />
                  incididunt ut labore
                </h3>
                <p>Jan 9, 2016</p>
              </div>
            </div>
          </div>
          <div className={style.footer3box}>
            <h2>instagram</h2>
            <div>
                <img src={footerInstagram1} alt="" />
            </div>
            <p>View more photos</p>
          </div>
        </div>
        <div className={`${style.footerFooter} container`}>
          © 2016 MoGo free PSD template by <span> Laaqiq</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
