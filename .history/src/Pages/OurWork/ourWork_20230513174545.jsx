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

       

      <div className={style.ourWorkFooter}></div>
    </>
  );
}

export default OurWork;
