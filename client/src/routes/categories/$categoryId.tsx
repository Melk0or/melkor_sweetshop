import Card from '@/components/Card';
import { getMainItemsCardSelector } from '@/redux/slices/card.slice';
import { createFileRoute, useNavigate, useParams } from '@tanstack/react-router'
import { useSelector } from 'react-redux';
import styles from "@/styles/Category.module.scss";



export const Route = createFileRoute('/categories/$categoryId')({
  component: Category
})



function Category() {
  const {categoryId} = Route.useParams();
  const navigate = useNavigate();
  const st = useSelector(getMainItemsCardSelector);
  const newList = Array.from(new Set(st.filter(item => item.category === categoryId)));
  console.log(newList)
  return <div className={styles.mainRoot}>
    <button onClick={() => navigate({to: '/catalog/'})}>{'Назад'}</button>
    <div className={styles.root}>
    {newList.map((item, index) => (
    <Card props={item} key={index} />
  ))}</div>
  </div>
}