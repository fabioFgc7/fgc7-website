import { useEffect, useRef, useState } from "react";

export const MoveImg = ({ picture }) => {
  const imagenMovil = useRef(null);
  const containerRef = useRef(null);
  const [style, setStyle] = useState({
    x: "",
    y: "",
    opacity: 0,
  });

  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;

    const moverImagen = () => {
      const x =
        Math.random() * (containerWidth - imagenMovil.current.offsetWidth);
      const y =
        Math.random() * (containerHeight - imagenMovil.current.offsetHeight);
      const opacity = Math.random() * 1.3;

      setStyle({ x: x, y: y, opacity: opacity });
    };
    const intervalId = setInterval(moverImagen, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className='absolute h-full w-full'>
      <img
        ref={imagenMovil}
        src={picture}
        alt=''
        style={{
          transform: `translateX(${style.x}px) translateY(${-style.y}px)`,
          opacity: style.opacity,
        }}
        className={`absolute h-40  top-0 left-0 duration-500 ease-in-out  `}
      />
    </div>
  );
};
