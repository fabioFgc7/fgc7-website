import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialMedia } from "../socialMedia/SocialMedia";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  const handleScroll = () => {
    const element = document.getElementById("home");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const date = new Date();
  const years = date.getFullYear();
  return (
    <footer className='w-full md:h-28 h-20  bg-[#06111d] md:mt-5 mt-10 text-center flex flex-col items-center justify-center text-[16px] text-slate-100 relative space-y-2'>
      <SocialMedia />
      <h1 className='text-sm text-sky-500 font-prata'>
        © Fabio Guillen <span className='text-sm'>{years}</span>
      </h1>
      <button
        onClick={handleScroll}
        className=' text-sky-500  transition-all  rounded-full hover:text-slate-100 w-10 h-10 absolute -top-8 flex justify-center items-center after:absolute after:transition-all after:duration-700 after:content-[""] after:w-full after:h-full overflow-hidden   after:left-0 after:right-0 after:-top-full hover:after:top-0 after:bg-sky-500 after:opacity-50 after:delay-300 after:box-border before:box-border before:delay-200  before:opacity-50  before:absolute before:transition-all before:duration-700 before:content-[""] before:w-full before:h-full  before:left-0 before:right-0 before:top-full hover:before:top-0 before:bg-sky-500 hover:after:rotate-180 hover:before:rotate-180 hover:after:rounded-full hover:before:rounded-full  '>
        <FontAwesomeIcon
          icon={faAnglesUp}
          className=' text-xl    hover:cursor-pointer z-10  '
        />
      </button>
    </footer>
  );
};
