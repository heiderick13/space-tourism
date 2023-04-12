import "./Navbar.css";

import logo from "../../assets/shared/logo.svg";

function Navbar() {
  return (
    <nav class="navbar d-flex py-4 px-5 pe-0">
      <div class="nav-brand">
        <img src={logo} alt="logo" />
      </div>
      <ul class="navbar-links d-flex py-4 px-5">
        <li class="nav-link">
          <a href="../../index.html">
            <b class="pe-1">00</b> home
          </a>
        </li>
        <li class="nav-link">
          <a href="./destinations.html">
            <b class="pe-1">01</b> destination
          </a>
        </li>
        <li class="nav-link">
          <a href="#">
            <b class="pe-1">02</b> crew
          </a>
        </li>
        <li class="nav-link">
          <a href="./technologies.html">
            <b class="pe-1">03</b> technology
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
