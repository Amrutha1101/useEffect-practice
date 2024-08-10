import { useEffect, useState } from "react";
export const ToggleTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("isDark");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });
  useEffect(() => {
    const className = isDark ? "dark" : "light";
    document.body.className = className;
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);
  const toggle = () => {
    setIsDark((prevDark) => !prevDark);
  };
  return (
    <div>
      <button onClick={toggle}>
        {isDark ? "Wanna switch to light mode?" : "Wanna switch to dark mode?"}
      </button>
      <div className="content">
        <h1>{isDark ? "dark" : "light"} is On</h1>
        <p>This is an example of a {isDark ? "dark" : "light"} themed page.</p>
      </div>
    </div>
  );
};
