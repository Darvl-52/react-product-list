import styles from './loader.module.css';

export function Loader () {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.blob}>
                </div>
            </div>
        </>
    )
}