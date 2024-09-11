import { NavLink } from "react-router-dom";
import { useTranslation } from "../../i18n";
import LanguageSelect from "../../components/LanguageSelect/LanguageSelect";
import styles from "./Header.module.scss";

function Header() {
    const { t } = useTranslation();

    return (
    <header className={styles.header}>
      <nav>
        <NavLink
          to="starters"
          className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
        >
          {t('starters.title')}
        </NavLink>
        <NavLink
          to="mains"
          className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
        >
          Mains
        </NavLink>
        <NavLink
          to="desserts"
          className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
        >
          {t('desserts.title')}
        </NavLink>
      </nav>
      <LanguageSelect />
    </header>
  );
}

export default Header;