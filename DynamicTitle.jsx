import { useEffect, useState } from "react";

export const DynamicTitle = () => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    document.title = title;
  }, [title]);
  const handleChange = (e) => {
    setTitle(([e.target.name] = e.target.value));
  };

  return (
    <>
      <input type="text" name="inputTitle" onChange={handleChange} />
    </>
  );
};
