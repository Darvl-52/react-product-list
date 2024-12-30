import styles from './modal.module.css';
import * as React from "react";
import { useState } from "react";

type ModalProps = {
    children?: React.ReactNode;
    isActive: boolean;
    onClose: () => void;
};

export function Modal({ children, onClose, isActive }: ModalProps) {
    if (!isActive) return null;

    return (
        <div className={`${styles.modal} ${isActive ? styles.active : ""}`} onClick={onClose}>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

type ModalWrapperProps = {
    buttonText?: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
    buttonClassName?: string;
};


export function ModalWrapper({ buttonText, icon, buttonClassName, children }: ModalWrapperProps) {
    const [active, setActive] = useState(false);

    const handleOpen = () => setActive(true);
    const handleClose = () => setActive(false);

    return (
        <>
            <button onClick={handleOpen} className={`${styles.button} ${buttonClassName}`}>
                {icon && icon}
                {buttonText}
            </button>

            <Modal isActive={active} onClose={handleClose}>
                {children}
            </Modal>
        </>
    );
}
