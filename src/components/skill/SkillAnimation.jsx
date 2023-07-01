import { useEffect, useRef, useState } from "react";

export const Js = () => {
  const [style, setStyle] = useState({
    x: "",
    y: "",
    opacity: 0,
  });

  const imgRef1 = useRef(null);
  const containerRef = useRef(null);
  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;
    const moveImg = () => {
      const x = Math.random() * (containerWidth - imgRef1.current.offsetWidth);
      const y =
        Math.random() * (containerHeight - imgRef1.current.offsetHeight);
      setStyle({ x: x, y: y });
    };

    const intervalId = setInterval(moveImg, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className='absolute w-full h-full'>
      <img
        ref={imgRef1}
        className='w-20 absolute left-0 top-0 ease-out '
        src='/src/assets/skillImg/js-removebg-preview.png'
        alt='Js'
        style={{
          transform: `translateX(${style.x}px) translateY(${style.y}px)`,
        }}
      />
    </div>
  );
};
