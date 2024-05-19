import { Link, createLazyFileRoute } from "@tanstack/react-router";
import styles from "@/styles/Catalog.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getMainItemsCardSelector } from "@/redux/slices/card.slice";
import { useQuery } from "@tanstack/react-query";
import { IProduct } from "../index.lazy";
import { useLoadProducts } from "@/hooks/useLoadProducts";
import { AppDispatch } from "@/redux/store";

type TGetData = (url: string) => Promise<void | { productList: IProduct[] }>;

const getData: TGetData = async (url) => {
  const headers = new Headers();
  headers.set("ngrok-skip-browser-warning", "true");
  headers.set(
    "Authorization",
    `X-Auth ${localStorage.getItem("access-token")}`
  );
  let res = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  return res.json();
};

const Catalog = () => {

  const dispatch: AppDispatch = useDispatch()
  const st = useSelector(getMainItemsCardSelector);
  console.log(st);

  let setCat: string[] = Array.from(new Set(st.map((item) => item.category)));

  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => getData("/api/shop/products"),

    select: (data) => {
      if (data && "productList" in data) {
        localStorage.setItem("products", JSON.stringify(data));
        useLoadProducts(st, dispatch);
    }
  }
  });

  return (
    <div className={styles.root}>
      <h2>Категории</h2>
      <div className={styles.categories}>
        {setCat.map((item: string, index: number) => (
          <div className={styles.category} key={index}>
            <Link
              params={{ categoryId: item }}
              to="/categories/$categoryId"
              className={styles.category}
            >
              {item}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Route = createLazyFileRoute("/catalog/")({
  component: Catalog,
});
