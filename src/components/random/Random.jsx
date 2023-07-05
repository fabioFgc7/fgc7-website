import { useEffect, useRef, useState } from "react";

const array = [
  "./skillImg/css.jpg",
  "./skillImg/html.jpg",
  "./skillImg/js.jpg",
  "./skillImg/node.jpg",
  "./skillImg/reactJs.jpg",
];
export const Random = () => {
  const [texto, setTexto] = useState("");
  const [style, setStyle] = useState({
    x: "",
    y: "",
    opacity: 0,
  });
  const imgRef1 = useRef();
  const containerRef = useRef();
  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;

    const textFunction = () => {
      const x = Math.random() * (containerWidth - imgRef1.current.offsetWidth);
      const y =
        Math.random() * (containerHeight - imgRef1.current.offsetHeight);
      const opacity = Math.random() * 1.3;

      const addText = array[randomText()];
      setTexto(addText);
      setStyle({ x: x, y: y, opacity: opacity });
    };
    const reset = setInterval(textFunction, 3000);
    return () => {
      clearInterval(reset);
    };
  }, []);

  const randomText = () => {
    return Math.floor(Math.random() * array.length);
  };
  return (
    <div
      ref={containerRef}
      className='absolute w-full md:h-96 h-full  top-0'>
      <img
        ref={imgRef1}
        className='md:w-16 w-10 absolute left-0 top-0 ease-out select-none'
        src={texto}
        alt='Js'
        style={{
          transform: `translateX(${style.x}px) translateY(${style.y}px)`,
        }}
      />
    </div>
  );
};
