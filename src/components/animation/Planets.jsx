const planets = [
  {
    id: 1,
    image: "./space/luna.jpg",
    style: " top-40 left-60   items-end w-10 scale-50",
  },
  {
    id: 2,
    image: "./image/removiendo-removebg-preview.png",
    style: "top-20 right-6   items-end md:w-20  w-14",
  },
  {
    id: 3,
    image: "./space/jupiters.jpg",
    style: "top-80 left-20   items-end md:w-16 w-10",
  },
  {
    id: 4,
    image: "./space/planeta_marte.jpg",
    style: "top-2/3 left-1/2   items-end md:w-12 w-8",
  },
  {
    id: 5,
    image: "./space/saturno.jpg",
    style:
      "bottom-40 right-10 md:-bottom-12 md:right-[25%]   items-end w-10 md:w-20",
  },
];
export const Planets = () => {
  return planets.map(({ id, image, style }) => (
    <img
      key={id}
      className={`absolute flex ${style} select-none`}
      src={image}
      alt='Planets'
    />
  ));
};
