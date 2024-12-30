import styles from "./productCard.module.css";
import {Key} from "react";
import {Link} from "react-router-dom";

export function ProductCard (
    {   id,
        title,
        text,
        price,
        isFavorite,
        handleFavorite,
        handleDelete,
    } : {
        id: number;
        title: string;
        text: string;
        price: number;
        isFavorite: boolean;
        handleFavorite: (id: number, isFavorite: boolean) => void;
        handleDelete: (id: number) => void;
        key: Key;
    }) {
    return (
        <div className={styles.card}>
            <div className={styles.first}>
                <img
                    src="/product.jpg"
                    className={styles.img}
                    alt="Картинка товара"
                    width={144}
                    height={144}
                />
                <button
                    className={styles.button}
                    onClick={() => handleFavorite(id, !isFavorite)}
                >
                    {isFavorite
                        ?
                        <img src="/favorite.svg" alt="Иконка лайка не отмеченная" loading='lazy'/>
                        :
                        <img src="/no_favorite.svg" alt="Иконка лайка не отмеченная" loading='lazy'/>}
                </button>
            </div>
            <div>
                <Link className={styles.title} to={`/products/${id}`}>
                    {title}
                </Link>
                <p className={styles.text}>
                    {text}
                </p>
                <p className={styles.price}>
                    {price}$
                </p>
            </div>
            <button onClick={() => handleDelete(id)} className={styles.delete}>
                <img src="/close.svg" alt="Иконка удалить" loading='lazy'/>
            </button>
        </div>
    )
}