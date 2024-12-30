import {useEffect, useState} from "react";
import {getProducts, Product, ProductFilters, toggleProductFavorite} from "../shared/api/api.ts";
import axios from "axios";
import {API_BASE_URL} from "../shared/api/config.ts";

const DEFAULT_FILTERS: ProductFilters = {
    sortBy: 'title',
    title: '',
    showFavorites: false,
};

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [filters, setFilters] = useState<ProductFilters>(DEFAULT_FILTERS);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const data = await getProducts(filters);
            const filterData = filters.showFavorites
                ? data.filter(product => product.isFavorite)
                : data;

            setProducts(filterData);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const handleClickLike = async (productId: number, newFavoriteStatus: boolean) => {
        try {
            const updateStatus = await toggleProductFavorite(productId, newFavoriteStatus);

            setProducts(currentProduct =>
                currentProduct
                    .map(product =>
                    product.id === productId
                        ?
                        {...product, isFavorite: updateStatus}
                        :
                        product
                    )
                    .filter(product => !filters.showFavorites || product.isFavorite)
            );
        } catch (e) {
            console.log(e);
        }
    }

    const handleClickDelete = async (productId: number) => {
        try {
           await axios.delete(`${API_BASE_URL}/products/${productId}`);

           setProducts(currentProduct =>
               currentProduct.filter(product => product.id !== productId)
           )

        } catch (e) {
            console.log(e);
        }
    }

    const updateFilters = (newFilters: Partial<ProductFilters>) => {
        setFilters(current => ({
            ...current,
            ...newFilters
        }));
    };

    useEffect(() => {
        fetchProducts();
    }, [filters]);

    return {
        products,
        loading,
        filters,
        updateFilters,
        setFilters,
        handleClickLike,
        handleClickDelete,
    }
}