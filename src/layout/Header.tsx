import { WavyLink } from "../library/waves";
import Hamburger from "../components/Hamburger";
import { Menus } from "../layout/Menus";
import { Footer } from "./Footer";

export const Header = ({ data: { start, end, duration } }: any) => (
  <>
    <header className="header">

      <div className="header_container">

        <div className="navigation">

          <div className="menus">

            <div className="left_menus">

              <WavyLink to="/" beginColor={start} finishColor={end} duration={duration} id="home">

                <img className="logo" src="assets/pictures/logo.png" alt="logo" />

                <span className="name">PORTFOLIO<span className="title"> | thomaspsl</span></span>

              </WavyLink>

            </div>

            <div className="right_menus">

              <Menus data={{ start, end, duration }}></Menus>

              <Footer className=" effect" data={{ start, end, duration }}></Footer>

              <Hamburger></Hamburger>

            </div>

            <nav className="mobileNav">

              <div className="mobileMenus">
                
                <ul className="mobileName">

                  <Menus data={{ start, end, duration }}></Menus>

                </ul>

              </div>

            </nav>

          </div>

          <div className="date">

            <span className="location">CHAMBÉRY, </span>

            <span className="timer"></span>

            <span className="bille"></span>

          </div>

        </div>

      </div>

    </header>
  </>
);