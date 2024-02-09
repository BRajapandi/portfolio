import { Link, Outlet, useLocation } from "react-router-dom";
import Resume from "../../asserts/Rajapandi_Resume_2024.pdf";
function Nav() {
  let { pathname } = useLocation();
  return (
    <div className="App">
      <div className="header">
        <div className="NavBar">
          <div className="navList">
            <Link
              to="/home"
              className={`navlink ${pathname === "/home" && "active"}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`navlink ${pathname === "/about" && "active"}`}
            >
              About
            </Link>
            <Link
              to="/about"
              className={`navlink ${pathname === "/about" && "active"}`}
            >
              Project
            </Link>
            <Link
              to="/about"
              className={`navlink ${pathname === "/about" && "active"}`}
            >
              Contact
            </Link>
            <Link
              to={Resume}
              target="_blank"
              download="Rajapandi_Resume_FrontEnd_Developer_2024"
            >
              Download CV
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
export default Nav;
