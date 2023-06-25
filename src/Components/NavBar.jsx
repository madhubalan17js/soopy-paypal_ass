import React from "react"
import BrandImage from "./navbar/brand"
import { AiTwotoneSetting } from "react-icons/ai"
import { MdNotifications } from "react-icons/md"
// import "../css/navbar.css"

const NavBar = ({ bg }) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-dark"
        style={{ backgroundColor: bg }}
      >
        <div className="container">
          <a className="navbar-brand text-light" href="#!">
            <BrandImage bg={"#0A1172"} w={"92px"} h={"92px"} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link  mx-2 fw-bold"
                  aria-current="page"
                  href="#!"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link mx-2 fw-bold"
                  aria-current="page"
                  href="#!"
                >
                  Finaces
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link mx-2 fw-bold"
                  aria-current="page"
                  href="#!"
                >
                  Send and Request
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link mx-2 fw-bold"
                  aria-current="page"
                  href="#!"
                >
                  Deals
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link mx-2 fw-bold"
                  aria-current="page"
                  href="#!"
                >
                  Wallet
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link mx-2  active fw-bold"
                  aria-current="page"
                  href="#!"
                >
                  Activity
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link mx-2 fw-bold"
                  aria-current="page"
                  href="#!"
                >
                  Help
                </a>
              </li>
            </ul>
            <ul className="navbar-nav me-2 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link mx-2 fw-bold" href="#!">
                  <MdNotifications color="white" fontSize={"24px"} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 fw-bold" href="#!">
                  <AiTwotoneSetting color="white" fontSize={"24px"} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 fw-bold" href="#!">
                  LOG OUT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
