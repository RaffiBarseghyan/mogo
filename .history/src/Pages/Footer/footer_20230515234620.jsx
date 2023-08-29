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
