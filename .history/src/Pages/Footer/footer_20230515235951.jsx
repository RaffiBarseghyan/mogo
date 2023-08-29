import style from "./footer.module.scss";

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
            <div >
              <h2>Follow Us:</h2>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className={style.footerFooter}>
          © 2016 MoGo free PSD template by Laaqiq
        </div>
      </div>
    </>
  );
}

export default Footer;
