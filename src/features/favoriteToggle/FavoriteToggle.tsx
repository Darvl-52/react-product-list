import styles from './favoriteToggle.module.css';

type FavoriteToggleProps = {
    showFavorites?: boolean;
    onChange: (show: boolean) => void;
}

export function FavoriteToggle ({showFavorites, onChange}: FavoriteToggleProps) {
    return (
        <button
            className={styles.favoriteButton}
            onClick={() => onChange(!showFavorites)}
        >
            Показать только избранное
            {showFavorites ? <img src="/favorite.svg" alt="иконка сердца" loading='lazy'/> :
                <img src="/no_favorite.svg" alt="иконка сердца" loading='lazy'/>}
        </button>
    )
}