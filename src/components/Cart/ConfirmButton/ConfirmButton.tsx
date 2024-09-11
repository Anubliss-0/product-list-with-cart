import { useState, useEffect } from 'react';
import { useTranslation } from "../../../i18n";
import { startTimer } from './ConfirmButtonUtils';
import styles from "./ConfirmButton.module.scss";

type ConfirmButtonProps = {
    setShowConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
    setShowCart?: React.Dispatch<React.SetStateAction<boolean>>;
};

function ConfirmButton({ setShowConfirmation, setShowCart }: ConfirmButtonProps) {
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
                
                if (setShowCart) {
                    setShowCart(false);
                }
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
        <button
            onClick={handleClick}
            className={styles.confirmButton}
            aria-label={isConfirming ? `Cancel order, ${counter} seconds remaining` : t("confirmOrder")}
            aria-live="polite"
            aria-busy={isConfirming}
        >
            <span className={styles.buttonText}>
                {isConfirming ? `Cancel (${counter}s)` : `${t("confirmOrder")}`}
            </span>
            {isConfirming && (
                <div
                    className={styles.progressBar}
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={7}
                    aria-valuenow={7 - counter}
                ></div>
            )}
        </button>
    );
}

export default ConfirmButton;