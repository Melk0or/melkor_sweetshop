import { Link, createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import styles from "@/styles/HomePage.module.scss";

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

  const navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem("access-token") &&
      localStorage.getItem("access-token") !== "undefined" &&
      localStorage.getItem("access-token") !== ""
    ) {
      navigate({ to: "/catalog/" });
    }
  }, []);

  return (
    <div className={styles.root}>
      <p>
        {" "}
        Добро пожаловать в лучшую кондитерскую города Мугла.{" "}
        <Link to="/sign-up/">Зарегистрируйтесь</Link> или{" "}
        <Link to="/sign-in/">войдите</Link> в аккаунт для дальнейшего
        пользования
      </p>
    </div>
  );
};

export const Route = createLazyFileRoute("/")({
  component: HomePage,
});
