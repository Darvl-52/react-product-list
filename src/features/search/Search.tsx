import styles from './search.module.css';
import {ProductFilters} from "../../shared/api/api.ts";
import {ChangeEvent} from "react";
import {Input} from "../../shared/input/Input.tsx";

type SearchProps = {
    value: ProductFilters['title'];
    onChange: (value: ProductFilters['title']) => void;
}

export function Search ({value, onChange} : SearchProps) {

    const onChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    }

    return (
        <div className={styles.first}>
            <Input
                type='text'
                value={value}
                onChange={onChangeEvent}
                placeholder='Название товара'
            />
        </div>
    )
}