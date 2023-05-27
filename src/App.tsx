import "./App.css";
import Blogs from "./components/Blogs";
import { useEffect, useState } from "react";
import { BsSun, BsFillMoonStarsFill } from "react-icons/bs";

function App() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefer-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme(localStorage.getItem("theme") || "light");
    }
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  return (
    <>
      <div className="flex justify-between px-4 m-4 shadow-md h-20 items-center border-2 border-blue-200 gap-8  rounded-lg dark:bg-slate-800 dark:border-none dark:shadow-none">
        <div className="text-2xl text-center w-full font-semibold dark:text-white">
          Light / Dark Theme using Tailwind CSS
        </div>
        <div className="p-4 bg-slate-800 flex items-center justify-center rounded-full dark:bg-slate-600">
          <button
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          >
            {theme === "light" ? (
              <BsSun size={"1.5rem"} className="text-white" />
            ) : (
              <BsFillMoonStarsFill size={"1.5rem"} className="text-white" />
            )}
          </button>
        </div>
      </div>
      <div className="flex justify-between px-4 m-4 shadow-md items-center border-2 border-blue-200 gap-8  rounded-lg dark:bg-slate-800 dark:border-none dark:shadow-none">
        <Blogs />
      </div>
    </>
  );
}

export default App;
