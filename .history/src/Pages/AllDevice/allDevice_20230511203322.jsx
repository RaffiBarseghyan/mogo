import style from "./allDevice.module.scss";

function AllDevice() {
  return (
    <>
      <div className={`${style.allDevice}`}>
        <div className={style.allDevicebg}>
          <h3>We work with</h3>
          <h2>Amazing Services</h2>
          <div className={style.line}></div>
        </div>
      </div>
    </>
  );
}

export default AllDevice;
