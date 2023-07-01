import { useEffect } from "react";
import AOS from "aos";
import "animate.css";
import "aos/dist/aos.css";
import "./cv.scss";
import { Cv } from "./Cv";

export const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, easing: "ease", delay: 16 });
  }, []);
  return (
    <section
      id='about'
      className=' w-fulltext-slate-100  md:p-10 p-5 pt-10 md:space-y-10 space-y-5  md:pt-20   overflow-hidden'>
      <h1
        className='text-center md:text-3xl text-2xl p-2 font-fraunces text-stone-100 snap-center  '
        data-aos='fade-up'
        data-aos-anchor-placement='center-bottom'>
        About
      </h1>
      <div className='w-full flex flex-wrap gap-10 justify-center items-center  '>
        <picture
          data-aos='fade-right'
          data-aos-offset='300'
          data-aos-easing='ease-in-sine'>
          <img
            className='md:w-64 md:h-80 w-60 h-72 '
            src='/src/assets/image/about.jpg'
            alt='Img'
          />
        </picture>
        <article
          className='flex flex-col  items-center md:w-2/6 space-y-3'
          // ref={textScroll}
          data-aos='fade-left'
          data-aos-offset='300'
          data-aos-easing='ease-in-sine'>
          <h1 className='md:text-left text-center text-xl font-fraunces'>
            About me
          </h1>
          <p className='font-catamaran md:text-left text-center text-[18.5px]'>
            Committed collaborator, always willing to learn and contribute to
            the success of the team. I keep up to date with the latest trends
            and practices in web development, and I&apos;m constantly looking
            for opportunities to improve my skills.
          </p>
          <Cv />
        </article>
      </div>
    </section>
  );
};
