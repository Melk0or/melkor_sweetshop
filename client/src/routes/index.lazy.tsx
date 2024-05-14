import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import styles from "@/styles/HomePage.module.scss"
import { useDispatch } from "react-redux";
import { setProduct } from "@/redux/slices/card.slice";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
  category: string;
  price: number;
}

export type TSignProps = {
  url: string;
  obj: { username: string; password: string };
};

export type TPostData = (
  url: string,
  obj: {
    username: string;
    password: string;
  }
) => Promise<{ jwt: string; body: string; httpStatus: string }>;

const HomePage = () => {
  const dispatch = useDispatch();
  
  
  const navigate = useNavigate();

  


  useEffect(() => {
    if (localStorage.getItem("access-token") && localStorage.getItem("access-token") !== "undefined" && localStorage.getItem("access-token") !== "") {
      navigate({to: "/catalog/"})
    }
  }, [])

 

  // const signInMutate = useMutation({
  //   mutationFn: ({ url, obj }: TSignProps) => {
  //     return postData(url, obj);
  //   },
  //   onSuccess: (d) => {
  //     if (
  //       (d.jwt !== "none" &&
  //         (!localStorage.getItem("access-token") ||
  //           localStorage.getItem("access-token") === "undefined")) ||
  //       localStorage.getItem("access-token") === ""
  //     ) {
  //       localStorage.setItem("access-token", d.jwt);
  //       console.log(d.jwt, "ddd");
  //     }
  //   },
  // });



  // fetching()
  // console.log(obj);

  // useEffect(() => {
  //   signInMutate.mutate({
  //     url: "/api/auth/sign-in",
  //     obj: { username: "cimchana", password: "1234" },
  //   });
  // }, []);


  return <div className={styles.root}>
    <p> Добро пожаловать в лучшую кондитерскую города Мугла. <Link to='/sign-up/'>Зарегистрируйтесь</Link> или <Link to='/sign-in/'>войдите</Link> в аккаунт для дальнейшего пользования</p>
  </div>;
};

export const Route = createLazyFileRoute("/")({
  component: HomePage,
});
