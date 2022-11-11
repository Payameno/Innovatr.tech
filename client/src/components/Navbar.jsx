import React from "react";
import "../assets/nav.css"

export default function Navbar() {

  return (

    <nav className="navbar">
        <div>
          <a>
            <img src="images/logo.png" alt="logo image" />
          </a>
          <button>
            <span></span>
          </button>
          <div>
            <ul>
              <li><a aria-current="page" href="#">Home</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Skills</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Connect</a>
              </li>
            </ul>
            <button type="button">
              +1 728365413
              <span>
                <i></i>
              </span>
            </button>
          </div>
        </div>
      </nav>
 
  )
  
}