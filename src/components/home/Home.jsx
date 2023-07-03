import { useEffect, useState } from "react";
import { SocialMedia } from "../socialMedia/SocialMedia";
import AOS from "aos";
import "animate.css";
import "aos/dist/aos.css";
import "./home.css";
import { AnimatteLetters } from "../animateLetters/AnimateLetters";

export const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [
    "F",
    "a",
    "b",
    "i",
    "o ",
    "",
    " G",
    "u",
    "i",
    "l",
    "l",
    "e",
    "n",
  ];
  const jobArray = [
    "F",
    "r",
    "o",
    "n",
    "t",
    "-",
    "e",
    "n",
    "d",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];
  useEffect(() => {
    AOS.init({ duration: 1500, easing: "ease", delay: 16 });
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);
  return (
    <>
      <section
        id='home'
        className='w-full h-screen  flex p-10  justify-around gap-20 items-center md:flex-row flex-col md:rounded-ee-[40%] rounded-none shadow-md shadow-sky-900 overflow-hidden relative'>
        <h1
          className='animate-text md:text-5xl text-2xl font-fraunces flex flex-col  text-slate-200 text-center z-10'
          data-aos='fade-down-right'>
          <div className='space-x-1'>
            <span>
              {" "}
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
            </span>

            <span>
              <span className={`${letterClass} _13`}> I</span>
              <span className={`${letterClass} _14`}>&#39;m</span>
            </span>

            <AnimatteLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={16}
            />
          </div>

          <span className='md:text-xl text-lg'>
            {" "}
            <AnimatteLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </span>

          <SocialMedia />
        </h1>
        <picture
          className=''
          data-aos='zoom-in-left'>
          <img
            className='imagen md:w-80 md:h-96 w-60 h-72 border-separate border-pink-900 border-l-8 border-2 border-l-[#330367] hover:scale-105 duration-200 drop-shadow-2xl rounded-md border-none select-none z-20 '
            src='./assets/image/home.jpg'
            alt='Img'
          />
        </picture>
      </section>
    </>
  );
};
