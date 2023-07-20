import React from "react";
import CV from "../Cv/Kevin-rojas-Desarrollador.pdf";

export const DownloadCv = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Kevin-rojas-Desarrollador.pdf";
    link.click();
  };
  return (
    <div className="flex justify-center bg-indigo-800  hover:bg-indigo-500 transition-colors py-4 font-bold">
      <button onClick={handleDownload} className="flex items-center gap-2 text-white " href="#">DescargarCv
      <i onClick={handleDownload} className='bx bxs-cloud-download'
      ></i></button>
    </div>
  );
};
