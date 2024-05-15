import Card from "@/components/Card";
import { getMainItemsCardSelector } from "@/redux/slices/card.slice";
import {
  createFileRoute,
  useNavigate,
} from "@tanstack/react-router";
import { useSelector } from "react-redux";
import styles from "@/styles/Category.module.scss";
import { useLoadProducts } from "@/hooks/useLoadProducts";

export const Route = createFileRoute("/categories/$categoryId")({
  component: Category,
});

function Category() {
  const { categoryId } = Route.useParams();
  const navigate = useNavigate();
  const st = useSelector(getMainItemsCardSelector);

  if (st.length < 1) useLoadProducts();
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
      <button onClick={() => navigate({ to: "/catalog/" })}>{"Назад"}</button>
      <div className={styles.root}>
        {newList.map((item, index) => (
          <Card props={item} key={index} />
        ))}
      </div>
    </div>
  );
}
