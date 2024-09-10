import { useState, useEffect } from 'react';
import { useTranslation } from "../../../i18n";
import { startTimer } from './ConfirmButtonUtils';
import styles from "./ConfirmButton.module.scss";

type ConfirmButtonProps = {
    setShowConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
};

function ConfirmButton({ setShowConfirmation }: ConfirmButtonProps) {
    const { t } = useTranslation();
    const [isConfirming, setIsConfirming] = useState(false);
    const [counter, setCounter] = useState(7);

    useEffect(() => {
        let timer: number | undefined;

        if (isConfirming) {
            timer = startTimer(counter, setCounter, () => {
                clearInterval(timer);
                setShowConfirmation(true);
                setIsConfirming(false);
            });
        }

        return () => {
            clearInterval(timer);
        };
    }, [isConfirming, setShowConfirmation, counter]);

    const handleClick = () => {
        if (isConfirming) {
            setIsConfirming(false);
            setCounter(7);
        } else {
            setIsConfirming(true);
            setCounter(7);
        }
    };

    return (
        <button onClick={handleClick} className={styles.confirmButton}>
            <span className={styles.buttonText}>
                {isConfirming ? `Cancel (${counter}s)` : `${t("confirmOrder")}`}
            </span>
            {isConfirming && <div className={styles.progressBar}></div>}
        </button>
    );
}

export default ConfirmButton;