import { useEffect, useState } from "react";

export const Aliens = () => {
  const [posicion, setPosicion] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const actualizarPosicion = (event) => {
      const { clientX, clientY } = event;
      setPosicion({ x: clientX, y: clientY });
    };

    document.addEventListener("mousemove", actualizarPosicion);

    return () => {
      document.removeEventListener("mousemove", actualizarPosicion);
    };
  }, []);
  return (
    <div
      style={{
        position: "absolute",
        left: posicion.x,
        top: posicion.y,
      }}
      className='aliens w-10 h-10  rounded-full border-2 bg-transparent border-red-500 absolute  '></div>
  );
};
