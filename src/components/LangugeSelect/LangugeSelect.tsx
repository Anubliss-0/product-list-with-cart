import { ChangeEvent } from 'react';
import { i18n, useTranslation } from '../../i18n';

function LanguageSelect() {
    const { t } = useTranslation();

    const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <div>
            <label>{t('language')}
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