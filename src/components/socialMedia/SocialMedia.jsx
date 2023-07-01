import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const redes = [
  {
    id: 1,
    icon: faGithub,
    text: "hover:text-[#000]",
    after: "after:bg-[#fff]",
    before: "before:bg-[#fff]",
    link: "https://github.com/fabioFgc7",
  },
  {
    id: 2,
    icon: faLinkedin,
    after: "after:bg-[#2b7efa]",
    before: "before:bg-[#2b7efa]",
    link: "https://www.linkedin.com/in/fabiofgc7/",
  },
  {
    id: 3,
    icon: faInstagram,
    after: "after:bg-[#dd2a7b]",
    before: "before:bg-[#dd2a7b]",
    link: "https://www.instagram.com/fabio_guillen7/",
  },
];
export const SocialMedia = () => {
  return (
    <ul className='flex  justify-center space-x-4 items-center mt-4 '>
      {redes.map(({ id, icon, link, text, after, before }) => (
        <li
          key={id}
          className={`h-6 w-6 md:w-8 md:h-8 inline-block text-slate-100     relative space-x-5`}>
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className={`icon absolute md:w-8 md:h-8 w-6  h-6 rounded-full bg-slate-600 flex items-center ease-in justify-center top-0 bottom-0 right-0 left-0 m-auto  ${text} hover:scale-[1.1]  after:absolute  after:-z-20 after:transition-all after:duration-500 after:content-[""] after:w-full after:h-full overflow-hidden   after:left-0 after:right-0 after:-top-full hover:after:top-0 ${after} after:opacity-50    after:delay-100 after:box-border before:box-border before:delay-300  before:-z-20  after:absolute    before:opacity-50  before:absolute before:transition-all before:duration-300 before:content-[""] before:w-full before:h-full  before:left-0 before:right-0 before:top-full hover:before:top-0 ${before} `}>
            <FontAwesomeIcon
              className='md:text-xl text-sm '
              icon={icon}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};
