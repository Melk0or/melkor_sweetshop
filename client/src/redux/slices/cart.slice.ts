import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface ICartItem {
    productName: string
    count: number
    price: number
}

interface CartSlice {
    totalPrice: number;
    items: ICartItem[];
}


const initialState: CartSlice  = {
    totalPrice: 0,
    items: [],
};


const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        setCartState(state) {
            const cart = localStorage.getItem("cart");
            if (cart) {
                const items: ICartItem[] = JSON.parse(cart);
                state.items = [...items];
                state.totalPrice = state.items.reduce(
                    (acc, item) => item.price * item.count + acc,
                    0
                );
            }
        },
        addItems(state, action) {
            const findItem = state.items.find(
                (obj) => obj.productName === action.payload.productName
            );
            if (findItem) {
                findItem.count++;
            } else {
                action.payload.count = 1;
                state.items.push(action.payload);
            }
            state.totalPrice = state.items.reduce(
                (acc, item) => item.price * item.count + acc,
                0
            );
            localStorage.setItem("cart", JSON.stringify(state.items))
        },
        removeAllAmountOfItem(state, action) {
            const findItem = state.items.find(
                (obj) => obj.productName === action.payload.productName
            );
            if (findItem) {
                state.items = state.items.filter(
                    (obj) => obj.productName !== findItem.productName
                );
                state.totalPrice -= findItem?.price * findItem?.count;
            }
            localStorage.setItem("cart", JSON.stringify(state.items))
        },
        removeItem(state, action) {
            const findItem = state.items.find(
                (obj) => obj.productName === action.payload.productName
            );
            if (!findItem) return;
            if (findItem.count > 1) {
                findItem.count -= 1;
            } else {
                state.items = state.items.filter(
                    (obj) => obj.productName !== findItem.productName
                );
            }
            state.totalPrice -= findItem.price;
            localStorage.setItem("cart", JSON.stringify(state.items))
        },
        eraseAllItems(state) {
            state.items = [];
            state.totalPrice = 0;
            localStorage.removeItem("cart");
        },
    }
});

export const getCartSelector = (state: RootState): CartSlice => state.cartSlice;

export const { addItems, removeAllAmountOfItem, eraseAllItems, removeItem, setCartState} =
    cartSlice.actions;

export default cartSlice.reducer;