import { List as ListProps } from "../../services/list-manager"
import Status from "../status/Status"
import Category from "../category/Category"
import css from './List.module.scss'

const List = ({ name, id, price, category, status }: ListProps) => {
    return (
        <div className={css.list}>
            <h2>{name}</h2>
            <p>{id}</p>
            <p>{price}</p>
            <Category category={category} />
            <Status status={status} />
        </div>
    )
}

export default List