import style from "./footer.module.scss";
import { ImFacebook } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";
import { TfiPinterest } from "react-icons/tfi";
import { ImInstagram } from "react-icons/im";
import { TiSocialGooglePlus } from "react-icons/ti";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineDribbble } from "react-icons/ai";
import { GrTumblr } from "react-icons/gr";

function Footer() {
  return (
    <>
      <div className={` ${style.footer}`}>
        <div className="container">
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
            <div>
              <img src={footerBlog} alt="" />
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing</h3>
              <p>Jan 9, 2016</p>
            </div>
          </div>
          <div></div>
        </div>
        <div className={`${style.footerFooter} container`}>
          © 2016 MoGo free PSD template by <span> Laaqiq</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
