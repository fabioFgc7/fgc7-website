import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import AOS from "aos";
import "animate.css";
import "aos/dist/aos.css";
import "./work.css";
const works = [
  {
    id: 1,
    title: "Qr Generator",
    img: "./image/qr_code_generator.png",
    description: "Qr code generator",
    github: "https://github.com/fabioFgc7/Qr-code-generator",
    link: "https://fabiofgc7.github.io/Qr-code-generator/",
  },
  {
    id: 2,
    title: "Password generator",
    img: "./image/password_generator.png",
    description: "Weather app ",
    github: "https://github.com/fabioFgc7/Password-generator",
    link: "https://fabiofgc7.github.io/Password-generator/",
  },
  {
    id: 3,
    title: "Calculator",
    img: "./image/age_calculator.png",
    description: "Age calculator App",
    github: "https://github.com/fabioFgc7/Age_Calculator_App",
    link: "https://fabiofgc7.github.io/Age_Calculator_App/",
  },
  {
    id: 4,
    title: "Solar System Planet",
    img: "./image/solar_system_planets.png",
    description: "Web site of the solar system planet. ",
    github: "https://github.com/fabioFgc7/Solar-system",
    link: "https://fabiofgc7.github.io/Solar-system/#",
  },
];
export const Work = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-in-out-cubic", delay: 16 });
  }, []);

  return (
    <section
      id='work'
      className='w-full h-full md:p-10 p-5  text-slate-100  md:rounded-tr-[25%] space-y-10 overflow-hidden rounded-none relative'>
      <h1
        className='text-center md:text-3xl text-2xl font-fraunces'
        data-aos='fade-up'
        data-aos-anchor-placement='center-bottom'>
        My Works
      </h1>
      <div className='w-full flex flex-wrap justify-center items-center gap-5 '>
        {works.map(({ id, title, img, description, github, link }) => (
          <div
            key={id}
            className=' relative overflow-hidden hover:firts:translate-y-full w-60 z-20'
            data-aos='fade-up'
            data-aos-anchor-placement='bottom-bottom'>
            <img
              className='md:w-60 md:h-80 w-full h-64 md:hover:scale-105 hover:scale-95 duration-500 rounded-md'
              src={img}
              alt='Img'
            />
            <article className='bg-[#00011a] bg-opacity-90 absolute top-0  p-3 w-full h-64 md:w-60 md:h-96 translate-y-full flex flex-col justify-center items-center md:space-y-3 space-y-1 duration-500 font-prata'>
              <h2 className='text-[18.5] font-martian_mono'>{title}</h2>
              <p className=' text-left font-catamaran text-[14.5px]'>
                {description}
              </p>
              <li className='flex space-x-5 justify-center  '>
                <a
                  href={link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='relative md:w-8 md:h-8 w-6  h-6 rounded-full bg-slate-600 flex items-center ease-in justify-center top-0 bottom-0 right-0 left-0 m-auto   hover:scale-[1.1]  after:absolute  after:-z-20 after:transition-all after:duration-500 after:content-[""] after:w-full after:h-full overflow-hidden   after:left-0 after:right-0 after:-top-full hover:after:top-0 after:opacity-50    after:delay-300 after:box-border hover:text-[#f8f8f8] after:bg-[#1facfd] before:bg-[#1facfd]   before:box-border before:delay-300  before:-z-20     before:opacity-50  before:absolute before:transition-all before:duration-500 before:content-[""] before:w-full before:h-full  before:left-0 before:right-0 before:top-full hover:before:top-0 '>
                  <FontAwesomeIcon
                    icon={faLink}
                    className='text-xl  z-20 '
                  />
                </a>
                <a
                  href={github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='relative md:w-8 md:h-8 w-6  h-6 rounded-full bg-slate-600 flex items-center ease-in justify-center top-0 bottom-0 right-0 left-0 m-auto   hover:scale-[1.1]  after:absolute  after:-z-20 after:transition-all after:duration-500 after:content-[""] after:w-full after:h-full overflow-hidden   after:left-0 after:right-0 after:-top-full hover:after:top-0 after:opacity-50    after:delay-300 after:box-border hover:text-[#000] after:bg-[#fff] before:bg-[#fff]  before:box-border before:delay-300  before:-z-20     before:opacity-50  before:absolute before:transition-all before:duration-500 before:content-[""] before:w-full before:h-full  before:left-0 before:right-0 before:top-full hover:before:top-0 '>
                  <FontAwesomeIcon
                    icon={faGithub}
                    className=' text-xl z-20  '
                  />
                </a>
              </li>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};
