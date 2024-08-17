import { useEffect, useState } from "react";

export const RandomQuotes = () => {
  const [count, setCount] = useState(0);
  const [randomQuote, setRandomQuote] = useState("");
  useEffect(() => {
    fetch("https://api.quotable.io/random").then((response) =>
      response.json().then((json) => setRandomQuote(json.content))
    );
  }, [count]);

  const handleChange = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <>
      <button onClick={handleChange}>CLick me</button>
      <p>{randomQuote}</p>
    </>
  );
};
