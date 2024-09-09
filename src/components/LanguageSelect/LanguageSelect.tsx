import { ChangeEvent } from 'react';
import { i18n, useTranslation } from '../../i18n';
import styles from "./LanguageSelect.module.scss";

function LanguageSelect() {
    const { t } = useTranslation();

    const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

    return (
            <label className={styles.languageSelect} aria-label={t('language')}>
                <div className={styles.customSelectWrapper}>
                    <select onChange={changeLanguage} className={styles.customSelect}>
                        <option value="en">English</option>
                        <option value="nl">Nederlands</option>
                        <option value="es">Español</option>
                        <option value="de">Deutsch</option>
                        <option value="fr">Français</option>
                    </select>
                </div>
            </label>
    );
}

export default LanguageSelect;