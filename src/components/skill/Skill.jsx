import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import AOS from "aos";
import "animate.css";
import "aos/dist/aos.css";
import { Random } from "../random/Random";

const skill = [
  {
    id: 1,
    name: "HTML",
    icon: faHtml5,
    color: "#E34C26",
    progress: 80,
    scroll: "fade-right",
  },
  {
    id: 2,
    name: "CSS",
    icon: faCss3,
    color: "#1572B6",
    progress: 85,
    scroll: "fade-left",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: faJs,
    color: "#F7DF1E",
    progress: 75,
    scroll: "fade-right",
  },
  {
    id: 4,
    name: "React",
    icon: faReact,
    color: "#61DAFB",
    progress: 70,
    scroll: "fade-left",
  },
  {
    id: 5,
    name: "NodeJs",
    icon: faNodeJs,
    color: "#8bbf3d",
    progress: 60,
    scroll: "fade-right",
  },
];
export const Skill = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, easing: "ease", delay: 16 });
  }, []);
  return (
    <section
      id='skill'
      className='w-full md:space-y-10 space-y-5 md:h-[80vh] md:p-10 p-5 md:pt-16 pt-10 shadow-2xl shadow-[#00011a] relative overflow-hidden h-auto  '>
      <h1
        className='text-center md:text-3xl text-2xl p-2 font-fraunces text-stone-100 snap-center  '
        data-aos='fade-up'
        data-aos-anchor-placement='center-bottom'>
        My Skill
      </h1>
      <Random />
      <div className='w-full flex   justify-around md:justify-center items-center flex-wrap  gap-5  z-10'>
        {skill.map(({ id, name, icon, color, progress, scroll }) => (
          <article
            key={id}
            className=' p-[3px] flex   flex-col items-center space-y-5 justify-center font-martian_mono'
            data-aos={scroll}>
            <div className='flex space-x-2 items-center'>
              <FontAwesomeIcon
                icon={icon}
                color={color}
                className=''
              />
              <p className='text-slate-100 md:text-lg text-xs'>{name}</p>
            </div>
            <div
              className={`radial-progress  text-primary-content `}
              style={{ "--value": progress, color: color }}>
              {progress}%
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
