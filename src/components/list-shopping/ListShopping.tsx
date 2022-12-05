import { List as ListA } from '../../services/list-manager'
import List from '../list/List'

type ListProps = { lists: ListA[] }

const listShopping = ({ lists }: ListProps) => {
    return (
        <div>
            <h1>Shopping List</h1>
            {lists.map(l =>
                <List
                    name={l.name}
                    id={l.id}
                    price={l.price}
                    category={l.category}
                    status={l.status}
                />
            )}
        </div>
    )
}

export default listShopping
