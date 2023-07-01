import { useEffect, useState } from "react";
import { ButtonNav } from "./ButtonNav";
import { Icon } from "./Icon";
// import "./nav.css";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
const listaNav = [
  {
    id: 1,
    title: "Home",
    link: "home",
  },
  {
    id: 2,
    title: "About",
    link: "about",
  },
  {
    id: 3,
    title: "Service",
    link: "service",
  },

  {
    id: 4,
    title: "Skill",
    link: "skill",
  },
  {
    id: 5,
    title: "Work",
    link: "work",
  },
  {
    id: 6,
    title: "Contact",
    link: "contact",
  },
];
export const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  const [icon, setIcon] = useState(faBars);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop - 10 &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        setActiveLink(section.id);
      }
    });
  };
  const handleClick = () => {
    if (!isActive) {
      setIcon(faTimes);
      setIsActive(true);
    } else {
      setIcon(faBars);
      setIsActive(false);
    }
  };

  return (
    <>
      <ButtonNav
        icon={icon}
        isActive={isActive}
        handleClick={handleClick}
      />

      <nav
        className={`stroke md:w-full  fixed md:h-12 h-screen w-32 flex z-30 justify-center md:translate-x-0 bg-[#02020a] bg-opacity-100 md:shadow-xl md:shadow-[#000031]   font-catamaran  md:pt-0 pt-40 md:items-center items-start md:border-none ${
          isActive
            ? "translate-x-0 duration-500 "
            : "-translate-x-full  duration-500"
        }  `}>
        <Icon />
        <ul className='flex md:gap-3  gap-1 md:flex-row md:justify-center md:text-lg text-base items-center flex-col md:items-center  md:pt-0 pt-10 justify-end'>
          {listaNav.map(({ id, link, title }) => (
            <li
              onClick={() => handleClick()}
              key={id}
              className={` md:w-auto   w-full p-2`}>
              <a
                href={`#${link}`}
                className={`text-slate-100 hover:opacity-100 ${
                  activeLink === link ? " text-sky-500" : "opacity-40"
                } inline-block md:block px-[6px]   relative before:absolute before:w-full z-10 ease-in overflow-hidden before:h-[1px] before:transition-all before:duration-700 before:-left-full before:-z-10   before:right-0  before:delay-200 before:bg-sky-500 hover:before:left-0 before:bottom-0 after:absolute after:w-full after:h-[1px] after:transition-all after:duration-700 after:left-full after:-z-10   after:right-0  after:delay-200 after:bg-sky-500 hover:after:left-0 after:top-0 `}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
