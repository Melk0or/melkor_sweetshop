import { AppDispatch } from './../redux/store';
import { IProduct } from './../routes/index.lazy';
import { setProduct } from '@/redux/slices/card.slice';
import { useDispatch } from 'react-redux';
import { Dispatch, UnknownAction } from 'redux';


export const useLoadProducts: (st: IProduct[], dispatch: AppDispatch) => void = (st, dispatch) => {
    const products: string | null = localStorage.getItem('products');
    if (st.length < 1 && products) {
        dispatch(setProduct(JSON.parse(products)));
    }
}