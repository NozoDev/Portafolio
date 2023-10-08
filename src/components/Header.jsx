import CV from "../Cv/Desarrollador kevin rojas recruit.pdf";
import "./styles.css";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const { t } = useTranslation();


const handleDownload = () => {
  const link = document.createElement("a");
  link.href = CV;
  link.download = "Desarrollador kevin rojas recruit.pdf";
  link.click();
};

const Header = () => {
  return (
    <section className="z-20 min-h-screen bg-dark font-sen">
      <section className="text-white  md:grid p-2 md:grid-cols-[1fr_2fr] md:min-h-[622px]  mx-auto">
        <div className="relative flex justify-center">
          <img
            className="w-[100%]  md:rounded-full md:absolute md:top-1/3 md:-translate-y-1/2 md:w-[75%] md:max-w-none"
            src="/images/header.png"
            alt=""
          />
        </div>
        <section className="px-4 py-10 text-center rounded-b-xl bg-blue md:grid md:place-content-center md:px-10 ">
          <h2 className="text-2xl  md:text-5xl md:relative md:z-20 font-extrabold">
          {t(descripcion)}
          </h2>

          <p className="mt-4 md:mt-10 md:relative md:z-20 ">
          {t(descripcionHeader)}
          </p>

          <div className="hover:animate-pulse relative z-20 flex justify-center py-4 font-bold">
            <button
              onClick={handleDownload}
              className="flex bg-winter w-30 h-10 p-2 transition-colors rounded-xl items-center gap-2 text-white "
              href="#"
            >
              {t(ButtonCv)}
              <i onClick={handleDownload} className="bx bxs-cloud-download"></i>
            </button>
          </div>
        </section>
      </section>

      <footer className="p-2  bottom-0 z-20 relative">
        <section className="flex bg-gray-d items-center justify-center">
          <section className="flex gap-2 ">
            <a
              href="https://www.linkedin.com/in/kevin-oswaldo-rojas-velandia-73a343241/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin py-4 hover:animate-pulse text-white text-3xl"></i>
            </a>
            <a
              href="https://github.com/NozoDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github py-4 hover:animate-pulse text-white text-3xl"></i>
            </a>
            <a
              href="https://twitter.com/kevinroj326"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-twitter py-4 hover:animate-pulse text-white text-3xl "></i>
            </a>
          </section>
        </section>
        <span className="grid text-center bg-gray-d text-white ">
          &copy; {t(descripcionFooter)} {new Date().getFullYear()}
        </span>
      </footer>
    </section>
  );
};

export default Header;
