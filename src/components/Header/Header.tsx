import { Link } from "react-router-dom";
import { useTranslation } from "../../i18n";
import LanguageSelect from "../../components/LangugeSelect/LangugeSelect";
import styles from "./Header.module.scss";

function Header() {
    const { t } = useTranslation();

    return (
        <header className={styles.header}>
            <nav>
                <Link to={`starters`}>{t("starters.title")}</Link>
                <Link to={`mains`}>Mains</Link>
                <Link to={`deserts`}>{t("desserts.title")}</Link>
            </nav>
            <LanguageSelect />
        </header>
    )
}

export default Header;