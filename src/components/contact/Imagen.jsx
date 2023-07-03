import AOS from "aos";
import "animate.css";
import "aos/dist/aos.css";
import ScrollReveal from "scrollreveal";

import { useEffect, useRef } from "react";

const Imagen = () => {
  const animateScroll = useRef();
  useEffect(() => {
    AOS.init({
      duration: 1600,
      easing: "ease-in-out-back",
      delay: 16,
      mirror: true,
    });
    ScrollReveal().reveal(animateScroll.current, {
      interval: 26,
      delay: 500,
      distance: "10px",
      opacity: 0,
      easing: "ease-in-out",
      reset: true,
      scale: 0.9,
      duration: 1000,
    });
  }, []);
  return (
    <img
      // ref={animateScroll}
      className='h-96 md:block hidden absolute -top-10  left-10     hover:-translate-y-40 duration-500 ease-out  hover:-translate-x-10 select-none '
      src='./assets/image/coete-removebg-preview.png '
      alt='Astronauta'
      data-aos='fade-up-right'
    />
  );
};

export default Imagen;
