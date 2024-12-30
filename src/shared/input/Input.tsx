import * as React from "react";
import styles from './input.module.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export function Input ({ ...props }: Props) {
    return (
        <input className={styles.input} {...props}/>
    )
}