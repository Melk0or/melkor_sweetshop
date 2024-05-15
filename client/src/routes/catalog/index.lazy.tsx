import { Link, createLazyFileRoute } from '@tanstack/react-router'
import styles from "@/styles/Catalog.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import { getMainItemsCardSelector, setProduct } from '@/redux/slices/card.slice'
import { useQuery } from '@tanstack/react-query';
import { IProduct } from '../index.lazy';
import { useLoadProducts } from '@/hooks/useLoadProducts';

type TGetData = (url: string) => Promise<void | { productList: IProduct[] }>;


const Catalog = () => {

  const dispatch = useDispatch();

  
  
  let setCat: string[] = [];

  const d = localStorage.getItem('products');
  if (d && d !== null) setCat = Array.from(new Set((JSON.parse(d).productList.map((item: IProduct) => item.category))))
  console.log(setCat);

  const getData: TGetData = async (url) => {
    const headers = new Headers();
    headers.set("ngrok-skip-browser-warning", "true")
    headers.set("Authorization", `X-Auth ${localStorage.getItem('access-token')}`);
    let res = await fetch(url, {
      method: "GET",
      headers: headers,
    });
    return res.json();
  };

  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => getData("/api/shop/products"),
    select: (d) => {
      if (!d) return;
      if ('productList' in d) {
        localStorage.setItem('products', JSON.stringify(d));
        setCat = Array.from(new Set((d.productList.map(item => item.category))))
        useLoadProducts();
      }
      return d;
    }
  });


    return <div className={styles.root}>
      <h2>Категории</h2>
      <div className={styles.categories}>
        {setCat.map((item: string, index: number) => (
          <div className={styles.category} key={index}>
              <Link params={{categoryId: item}} to='/categories/$categoryId' className={styles.category}>
                {item}
              </Link>
          </div>
        ))}
      </div>
    </div>
}

export const Route = createLazyFileRoute('/catalog/')({
  component: Catalog
})