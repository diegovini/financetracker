import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul>
          <li className={styles.title}>
            <Link to="/">My finances</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
