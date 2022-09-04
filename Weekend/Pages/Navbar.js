import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/">
            <li className=""> Home</li>{" "}
          </Link>

          <Link to="/create">
            <li className=""> Create</li>{" "}
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
