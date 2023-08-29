import style from "./footer.module.scss";

function Footer() {
  return (
    <>
      <div className={`container ${style.footer}`}>
        <div>
          <div>
            {" "}
            <a className={`${style.logo} navbar-brand me-5`} href="#">
              MoGo
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim <br />
               ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut  aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{" "}
            </p>
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
