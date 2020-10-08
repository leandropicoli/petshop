import { CartItem } from '../models/cart-item.model';
import { Cart } from '../models/cart.model';

export class CartUtil {
    public static get(): Cart {
        const data = localStorage.getItem('petshopcart');

        if (!data)
            return new Cart();

        return JSON.parse(data);
    }

    public static add(id: string, product: string, quantity: number, price: number, image: string) {
        let cart = this.get();

        const item = new CartItem(id, product, quantity, price, image);

        cart.items.push(item);

        localStorage.setItem('petshopcart', JSON.stringify(cart));
    }

    public static update(cart: Cart) {
        localStorage.setItem('petshopcart', JSON.stringify(cart));
    }

    public static clear() {
        localStorage.removeItem('petshopcart');
    }
}