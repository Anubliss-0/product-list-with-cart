import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "../../i18n";
import LanguageSelect from "../../components/LanguageSelect/LanguageSelect";
import styles from "./PhoneHeader.module.scss";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className={styles.phoneHeader}>
      <div className={styles.burger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </div>
      <nav className={isMenuOpen ? styles.navOpen : ''}>
        <NavLink
          to="starters"
          className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {t('starters.title')}
        </NavLink>
        <NavLink
          to="mains"
          className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Mains
        </NavLink>
        <NavLink
          to="deserts"
          className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {t('desserts.title')}
        </NavLink>
      </nav>
      <LanguageSelect />
    </header>
  );
}

export default Header;