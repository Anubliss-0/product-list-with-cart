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
        <div>
            <label className={styles.languageSelect}>{t('language')}
                <select onChange={changeLanguage}>
                    <option value="en">English</option>
                    <option value="nl">Nederlands</option>
                    <option value="es">Español</option>
                    <option value="de">Deutsch</option>
                    <option value="fr">Français</option>
                </select>
            </label>
        </div>
    );
}

export default LanguageSelect;