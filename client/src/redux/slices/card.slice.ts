import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from './../../routes/index.lazy';
import { RootState } from '../store';




interface ICard {
    items: IProduct[];
}


const initialState: ICard  = {
    items: [],
};

const cardSlice = createSlice({
    name: 'cardSlice',
    initialState,
    reducers: {
        setProduct(state, action) {
            console.log(action.payload)
            for(const item of action.payload.productList) {
                state.items.push(item);
            }
        },
    }
})

export const getMainItemsCardSelector = (state: RootState): IProduct[] => state.cardSlice.items;

export const { setProduct } =
    cardSlice.actions;

export default cardSlice.reducer;