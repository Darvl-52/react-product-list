import styles from './productList.module.css'
import {ProductCard} from "../../entities/productCard.tsx";
import {useProducts} from "../../hooks/useProducts.ts";
import {SelectSort} from "../../features/selectSort/SelectSort.tsx";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {Search} from "../../features/search/Search.tsx";
import {FavoriteToggle} from "../../features/favoriteToggle/FavoriteToggle.tsx";
import {Loader} from "../../shared/loader/Loader.tsx";

export function ProductList () {

    const {
        products,
        loading,
        filters,
        handleClickLike,
        updateFilters,
        handleClickDelete,
    } = useProducts();

    const [parent] = useAutoAnimate();

    return (
        <div className={styles.products}>
            <div className={styles.sort}>
                <Search
                    value={filters.title}
                    onChange={value => updateFilters({title: value})}
                />
                <SelectSort
                    value={filters.sortBy}
                    onChange={sortBy => updateFilters({ sortBy })}
                />
                <div>
                    <FavoriteToggle
                        showFavorites={filters.showFavorites}
                        onChange={showFavorites => updateFilters({showFavorites})}
                    />
                </div>
            </div>
            <div className={styles.list} ref={parent}>
                {loading ? <Loader/> : null}
                {products.map(item =>
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        text={item.text}
                        price={item.price}
                        isFavorite={item.isFavorite}
                        handleFavorite={handleClickLike}
                        handleDelete={handleClickDelete}
                    />
                )}
            </div>
        </div>
    )
}