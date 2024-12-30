import axios from "axios";
import {API_BASE_URL} from "./config.ts";

export type Product = {
    id: number;
    title: string;
    text: string;
    price: number;
    isFavorite: boolean;
}

export type SendProduct = {
    title: string;
    text: string;
    price: number | undefined;
}

export type ProductFilters = {
    sortBy: 'title' | 'price' | '-price';
    title: string;
    showFavorites: boolean;
}

type GetProductsParams = Partial<ProductFilters>;

export async function getProducts(params?: GetProductsParams): Promise<Product[]> {
    try {
        const { data } = await axios.get<Product[]>(`${API_BASE_URL}/products`, {
            params: {
                sortBy: params?.sortBy,
                title: params?.title ? `*${params.title}*` : undefined
            }
        });
        return data;
    } catch (e) {
        console.error('Error fetching products:', e);
        throw e;
    }
}

export async function sendProduct(model: SendProduct) {
    try {
        await axios.post(`${API_BASE_URL}/products`, model);
    } catch (e) {
        console.log(e);
    }
}

export async function toggleProductFavorite(productId: number, isFavorite: boolean): Promise<boolean> {
    try {
        const {data} = await axios.patch<Product>(`${API_BASE_URL}/products/${productId}`, {
            isFavorite
        });
        return data.isFavorite;
    } catch (e) {
        console.error(e);
        throw e;
    }
}