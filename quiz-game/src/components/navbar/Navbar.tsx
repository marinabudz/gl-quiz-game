import React from "react";
import { NavbarProps } from "../../types/index.ts";
import styles from "./Navbar.module.scss";
import burger from "../../assets/icons/burgerMenu.svg";
import close from "../../assets/icons/close.svg";

const Navbar = ({ showNavbar, setShowNavbar }: NavbarProps): JSX.Element => (
  <button
    type="submit"
    onClick={() => setShowNavbar(!showNavbar)}
    className={styles.burgerBtn}
  >
    {showNavbar ? (
      <img src={burger} alt="burger" className={styles.burgerImage} />
    ) : (
      <div className={styles.closeImage}>
        <img src={close} alt="close" />
      </div>
    )}
  </button>
);

export default Navbar;
