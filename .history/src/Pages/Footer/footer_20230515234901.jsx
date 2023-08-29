import style from "./footer.module.scss";

function Footer() {
  return (
    <>
      <div className={`container ${style.footer}`}>
        <div>
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
