import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ButtonNav = ({ icon, isActive, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`fixed  left-2 z-40  top-2 md:hidden   block duration-700 ${
        isActive
          ? "left-24 text-red-500 animate__animated animate__backInDown"
          : "left-2 text-blue-500 animate__animated animate__backInLeft"
      }`}>
      <FontAwesomeIcon
        icon={icon}
        className='text-2xl'
      />
    </button>
  );
};
