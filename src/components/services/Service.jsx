import { faCode, faDesktop, faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const service = [
  {
    id: 1,
    title: "Web Design ",
    description:
      "I provide tailored web development services that meet your business needs, whether it's a website, blog, or e-commerce store, ensuring a solution that aligns with your brand and goals.",
    icon: faDesktop,
    dataAos: "fade-right",
  },
  {
    id: 2,
    title: "Development",
    description:
      "I offer full-stack web development services, creating customized solutions that range from simple websites to complex web applications.",
    icon: faCode,
    dataAos: "fade-left",
  },

  {
    id: 3,
    title: "Responsive Web Design ",
    description:
      "Develop websites that adapt smoothly to various screen sizes and devices, delivering consistent user experiences.",
    icon: faExpand,
    dataAos: "fade-up-right",
  },
];

export const Service = () => {
  return (
    <section
      id='service'
      className='w-full  h-auto md:p-10 p-5 md:pt-20 pt-10 text-slate-100 space-y-10 rounded-none overflow-hidden '>
      <h1
        className='text-center md:text-3xl text-2xl font-fraunces'
        data-aos='fade-up'
        data-aos-anchor-placement='center-bottom'>
        Services
      </h1>
      <div className='text-center text-slate-100 flex flex-wrap  justify-center w-full gap-5 font-catamaran text-[18.5px]'>
        {service.map(({ id, title, description, icon, dataAos }) => (
          <article
            data-aos={dataAos}
            key={id}
            className='md:w-96 w-full space-y-3    p-2 z-10  rounded-md  bg-[#1e293b] '>
            <FontAwesomeIcon icon={icon} />
            <h2 className='text-[22px]'>{title}</h2>
            <p className='text-[18px]'>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
