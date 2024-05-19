import Card from "@/components/Card";
import { getMainItemsCardSelector } from "@/redux/slices/card.slice";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useDispatch, useSelector } from "react-redux";
import styles from "@/styles/Category.module.scss";
import { useLoadProducts } from "@/hooks/useLoadProducts";
import { AppDispatch } from "@/redux/store";

export const Route = createFileRoute("/categories/$categoryId")({
  component: Category,
});

function Category() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const st = useSelector(getMainItemsCardSelector);

  const { categoryId } = Route.useParams();

  useLoadProducts(st, dispatch);
  // st.filter()
  const newList = Array.from(
    new Set(
      st.filter((item) => {
        return item.category === categoryId;
      })
    )
  );
  console.log(newList);
  return (
    <div className={styles.mainRoot}>
      <div className={styles.title}>
        <button onClick={() => navigate({ to: "/catalog/" })}>{"Назад"}</button>
        <h1>{categoryId}</h1>
      </div>
      <div className={styles.root}>
        {newList.map((item, index) => (
          <Card cardProps={item} key={index} />
        ))}
      </div>
    </div>
  );
}
