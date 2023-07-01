import { saveAs } from "file-saver";
import cvFile from "/src/assets/cv/MyCv.pdf";
export const Cv = () => {
  const handleDownload = () => {
    saveAs(cvFile, "Cv");
  };
  return (
    <div className=' flex justify-center'>
      <button
        data-aos='zoom-in'
        onClick={handleDownload}
        className='cv bg-slate-800'>
        Download Cv
      </button>
    </div>
  );
};
