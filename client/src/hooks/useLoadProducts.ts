import { setProduct } from '@/redux/slices/card.slice';
import { useDispatch } from 'react-redux';


export const useLoadProducts: () => void = () => {
    const dispatch = useDispatch()
    const products: string | null = localStorage.getItem('products');
    if (products) {
        dispatch(setProduct(JSON.parse(products)));
    }
}