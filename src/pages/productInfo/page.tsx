import styles from './productInfo.module.css';
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Product} from "../../shared/api/api.ts";
import axios from "axios";
import {API_BASE_URL} from "../../shared/api/config.ts";
import {Loader} from "../../shared/loader/Loader.tsx";

export function ProductInfo () {

    const {id} = useParams<{id: string}>();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        async function fetchProduct(){
            try {
                const { data } = await axios.get(`${API_BASE_URL}/products/${id}`);
                setProduct(data);
            } catch (e) {
                console.log('Error fetching product:', e);
            }
        }
        fetchProduct();
    }, [id]);

    return (
        <div>
            {product
                ?
                <div className={styles.card}>
                    <div>
                        <Link to={'/products'}>
                            <img src="/back.svg" alt="Кнопка вернуться назад"/>
                        </Link>
                        <h1>{product.title}</h1>
                        <p>{product.text}</p>
                        <p>{product.price}$</p>
                    </div>
                </div>
                :
                <Loader/>
            }
        </div>
    )
}