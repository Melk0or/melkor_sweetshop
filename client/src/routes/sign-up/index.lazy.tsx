import { Link, createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import signUpPageStyle from "@/styles/SigInPage.module.scss";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { TPostData, TSignProps } from "../index.lazy";
import { useEffect, useState } from "react";

interface IInput {
  username: string;
  password: string;
}

const SignUpPage = () => {
  const navigate = useNavigate({ from: "/sign-up" });

  
  const [isExistAT, setISExistAT] = useState<boolean>(false);
  
  useEffect(() => {
    if (
      localStorage.getItem("access-token") &&
      localStorage.getItem("access-token") !== "undefined" &&
      localStorage.getItem("access-token") !== ""
    ) {
      navigate({ to: "/catalog/" });
    }
  }, [isExistAT])
  
  const postData: TPostData = async (url, obj) => {
    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    headers.set("ngrok-skip-browser-warning", "true")
    let res = await fetch(url, {
      headers: headers,
      method: "POST",
      body: JSON.stringify(obj),
    });
    return res.json();
  };

  const { register, handleSubmit } = useForm<IInput>();
  const mutation = useMutation({
    mutationFn: ({url, obj}: TSignProps) => {
      return postData(url, obj)
    },
    // async onSettled() {
    //   await client.invalidateQueries({ queryKey: ["session"] });
    // },
    onSuccess(d) {
      if (
        (d.jwt !== "none" &&
          (!localStorage.getItem("access-token") ||
            localStorage.getItem("access-token") === "undefined")) ||
        localStorage.getItem("access-token") === ""
      ) {
        localStorage.setItem("access-token", d.jwt);
        setISExistAT(prevState => !prevState);
        console.log(d.jwt, "ddd");
      }
    },
  });

  const submitData = (formData: IInput) => {
    mutation.mutate({url: "/api/auth/sign-up", obj: formData});
    console.log(mutation.isError);
  };
  return (
    <div className={signUpPageStyle.root}>
      <form
        className={signUpPageStyle.form}
        onSubmit={handleSubmit(submitData)}
      >
        <h1>Регистрация</h1>
        {mutation.error && <h5>Чел с таким логином или фио уже существует</h5>}
        {/* <label htmlFor="loginField">Логин</label> */}
        <input
          id="loginField"
          placeholder="Логин"
          type="text"
          {...register("username", { required: true })}
        />
        {/* <label htmlFor="passwordField">Пароль</label> */}
        <input
          id="passwordField"
          placeholder="Пароль"
          type="password"
          {...register("password", { required: true })}
        />
        <input type="submit" value="Войти" />
        <Link to="/sign-in/">Есть аккаунт?</Link>
      </form>
    </div>
  );
};



export const Route = createLazyFileRoute('/sign-up/')({
  component: SignUpPage
})