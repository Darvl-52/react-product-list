import style from './selectSort.module.css';
import {ChangeEvent} from "react";
import {ProductFilters} from "../../shared/api/api.ts";

type SelectSortProps = {
    value: ProductFilters['sortBy'];
    onChange: (value: ProductFilters['sortBy']) => void;
}

export function SelectSort ({value, onChange} : SelectSortProps) {

    const onChangeEvent = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as ProductFilters['sortBy']);
    };

    return (
        <select
            className={style.select}
            value={value}
            onChange={onChangeEvent}
        >
            <option value='title'>По названию</option>
            <option value='-price'>По цене(дорогие)</option>
            <option value='price'>По цене(дешевые)</option>
        </select>
    )
}