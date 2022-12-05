export enum Status {
    bought = 'Bought',
    notBought = 'Not Bought'
}

export enum Category {
    dairy = 'Dairy',
    cleaning = 'Cleaning Supplies',
    electronics = 'Electronics',
    fleshy = 'Fleshy',
    deli = 'Deli'
}

export class List {
    name: string;
    id: string;
    price: string;
    category: Category = Category.electronics;
    status: Status = Status.notBought;

    constructor(name: string, id: string, price: string, category?: Category, status?: Status) {
        this.name = name;
        this.id = id;
        this.price = price;
        if (category) { this.category = category; }
        if (status) { this.status = status; }
    }
}

class ListManager {
    list: List[] = []

    constructor() {
        this.list.push(new List('Milk', '1', '10 ILS', Category.dairy, Status.notBought))
        this.list.push(new List('Charger', '3', '30 ILS', Category.electronics, Status.bought))
    }

    add(list: List) {
        this.list.push(list);
    }
}

export default ListManager;