import style from "./footer.module.scss";

function Footer() {
  return (
    <>
      <div className={`container ${style.}`}>
        <div></div>
        <div className={style.footerFooter}>
          © 2016 MoGo free PSD template by Laaqiq
        </div>
      </div>
    </>
  );
}

export default Footer;
