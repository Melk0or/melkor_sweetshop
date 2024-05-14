import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ICartItem {
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
        addItems(state, action) {
            const findItem = state.items.find(
                (obj) => obj.productName === action.payload.productName
            );
            if (findItem) {
                findItem.count++;
            } else {
                action.payload.amount = 1;
                state.items.push(action.payload);
            }
            state.totalPrice = state.items.reduce(
                (acc, item) => item.price * item.count + acc,
                0
            );
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
        },
        eraseAllItems(state) {
            state.items = [];
            state.totalPrice = 0;
        },
    }
});

export const getCartSelector = (state: RootState): CartSlice => state.cartSlice;

export const { addItems, removeAllAmountOfItem, eraseAllItems, removeItem } =
    cartSlice.actions;

export default cartSlice.reducer;