import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [token, setToken] = useState<string>("");
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [obj, setObj] = useState<boolean>(false);

  useEffect(() => {
    const fetching: () => Promise<void | { jwt: string }> = async () => {
      const headers = new Headers();
      headers.set("Content-Type", "application/json");
      const obj = {
        username: "cimchana",
        password: "1234",
      };
      let res = await fetch("/api/auth/sign-in", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(obj),
      });
      return await res
        .json()
        .then((r) => setToken(() => r.jwt))
        .then(() => setIsMounted(() => true));
    };
    setTimeout(fetching);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const headers = new Headers();
      headers.set("Content-Type", "application/json");
      if (
        (token !== "none" &&
          (!localStorage.getItem("access-token") ||
            localStorage.getItem("access-token") === "undefined")) ||
        localStorage.getItem("access-token") === ""
      ) {
        localStorage.setItem("access-token", token);
      }
      console.log(token);
      console.log(headers.get("Authorization"));
      const fetching = async () => {
        headers.set("Authorization", `X-Auth ${token}`);
        let res = await fetch("/api/auth/getinfo", {
          method: "GET",
          headers: headers,
        });
        return res.json();
      };
      fetching().then(console.log);
    }

    // setTimeout(fetching);
  }, [isMounted]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
