import style from "./header.module.scss";
import glass from "../../Assets/Images/GLASS.png";
import cart from "../../Assets/Images/CART.png";

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={style.big_header}>
        <div className={style.header}>
          <div className={style.logo}>MoGo</div>
          <div className={style.menu}>
            <ul>
              <li></li>
              <li></li>
              <li>work</li>
              <li>blog</li>
              <li>contact</li>
              <img src={glass} alt="" />
              <img src={cart} alt="" />
            </ul>
          </div>
        </div>

        <div className={style.header_text}>
          <h1>Creative Template</h1>
          <h2>
            Welcome <br /> to MoGo
          </h2>
          <div className={style.border_box}>
            <div className={style.border}></div>
          </div>

          <div className={style.btn_box}>
            <button className={style.btn}>Learn More</button>
          </div>

          <div className={style.lable_hover}>
            <div className={style.borders}>
              <div className={style.big_border_box_1}>
                <div className={style.div}>
                  <div className={style.b_box1}>
                    <div className={style.red}></div>
                    <div className={style.white}></div>
                  </div>
                  <p className={style.b_p}>01 intro</p>
                </div>

                <div className={style.div}>
                  <div className={style.b_box1}>
                    <div className={style.white_s}></div>
                    <div className={style.white}></div>
                  </div>
                  <p className={style.b_p}>02 work</p>
                </div>

                <div className={style.div}>
                  <div className={style.b_box1}>
                    <div className={style.white_s}></div>
                    <div className={style.white}></div>
                  </div>
                  <p className={style.b_p}>03 About</p>
                </div>

                <div className={style.div}>
                  <div className={style.b_box1}>
                    <div className={style.white_s}></div>
                    <div className={style.white}></div>
                  </div>
                  <p className={style.b_p}>04 Contacts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
