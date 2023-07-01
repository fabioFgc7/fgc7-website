import { useEffect, useState } from "react";
import { AnimatteLetters } from "../animateLetters/AnimateLetters";

export const Icon = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameWork = ["Fgc7"];
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("icon-animate-hover");
    }, 4000);
  }, []);
  return (
    <a href='#home'>
      {" "}
      <h1 className='text-center absolute flex  top-16 md:top-2  md:w-[15%] md:left-10 text-xl font-la_belle_aurore items-center z-40 left-0 right-0 justify-center  select-none text-sky-600 hover:text-sky-500 font-extrabold '>
        <AnimatteLetters
          letterClass={letterClass}
          strArray={nameWork}
          idx={1}
        />
      </h1>
    </a>
  );
};
