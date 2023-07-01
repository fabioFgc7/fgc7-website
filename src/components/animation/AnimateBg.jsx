import "./animateBg.css";
import "./alien.css";
import { Meteorito } from "./Meteorito";
import { Planets } from "./Planets";
const AnimateBg = () => {
  return (
    <>
      <div className='bg-animation'>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div id='stars4'></div>
        <Meteorito />
        <Planets />
      </div>
    </>
  );
};

export default AnimateBg;
