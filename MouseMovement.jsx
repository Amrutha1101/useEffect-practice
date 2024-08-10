import { useEffect, useState } from "react";

export const MouseMovement = () => {
  const [isDraw, setIsDraw] = useState(false);
  const [isMove, setMove] = useState([]);
  useEffect(() => {
    const startDrawing = () => {
      setIsDraw(true);
    };
    const startMoving = (e) => {
      if (!isMove) return;
      const newDrawing = {
        x: e.clientX,
        y: e.clientY,
      };
      setMove((prevDrawing) => [...prevDrawing, newDrawing]);
    };

    const stopDrawing = () => {
      setIsDraw(false);
    };
    window.addEventListener("mousedown", startDrawing);
    window.addEventListener("mousemove", startMoving);
    window.addEventListener("mouseup", stopDrawing);
    window.addEventListener("mouseleave", stopDrawing);

    return () => {
      window.removeEventListener("mousedown", startDrawing);
      window.removeEventListener("mousemove", startMoving);
      window.removeEventListener("mouseup", stopDrawing);
      window.removeEventListener("mouseleave", stopDrawing);
    };
  }, [isDraw]);
  return <h1>hello</h1>;
};
