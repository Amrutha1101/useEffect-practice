import { useState } from "react";
export const SentenceCount = () => {
  const [para, setPara] = useState("");
  const [countSentences, setCountSentences] = useState(0);
  const handleChange = (e) => {
    setPara({ ...para, [e.target.name]: e.target.value });
    if (e.key === ".") {
      setCountSentences((prevCountSentences) => prevCountSentences + 1);
    }
  };

  return (
    <>
      <input type="text" name="para" onKeyPress={handleChange} />
      <p>{countSentences}</p>
    </>
  );
};
