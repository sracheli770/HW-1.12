import React from 'react'
import { Category as CategoryEnum } from '../../services/list-manager'
import css from './Category.module.scss'

type CategotryProps = {
    category: CategoryEnum
}

const Category = ({ category }: CategotryProps) => {
    let clz = '';
    switch (category) {
        case CategoryEnum.dairy:
            clz = css.dairy;
            break;
        case CategoryEnum.cleaning:
            clz = css.cleaning;
            break;
        case CategoryEnum.electronics:
            clz = css.electronics;
            break;
        case CategoryEnum.fleshy:
            clz = css.fleshy;
            break;
        case CategoryEnum.deli:
            clz = css.deli;
            break;
    }

    return (
        <p className={clz}>{category}</p>
    )
}

export default Category