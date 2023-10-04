import CV from "../Cv/Desarrollador kevin rojas recruit.pdf";
import "./styles.css";
const handleDownload = () => {
  const link = document.createElement("a");
  link.href = CV;
  link.download = "Desarrollador kevin rojas recruit.pdf";
  link.click();
};

const Header = () => {
  return (
    <section id="Home" className="text-white  md:grid p-2 md:grid-cols-[1fr_2fr] md:min-h-[508px] max-w-[1200px] mx-auto">
      <div className="relative flex justify-center">
        <img
          className="w-[100%]  md:rounded-full md:absolute md:top-1/3 md:-translate-y-1/2 md:w-[75%] md:max-w-none"
          src="/images/header.png"
          alt=""
        />
      </div>
      <section className="px-4 py-10 text-center rounded-b-xl bg-blue md:grid md:place-content-center md:px-10 ">
        <h2 className="text-2xl  md:text-5xl md:relative md:z-20 font-extrabold">
          Desarrollador Front-end{" "}
        </h2>
        <p className="mt-4 md:mt-10 md:relative md:z-20 ">
          Apasionado con un enfoque creativo y una fascinación por el mundo del
          diseño y la tecnología. A través de mi carrera, he tenido el
          privilegio de trabajar en diversos proyectos donde he podido combinar
          mis habilidades artísticas y mi experiencia técnica para crear
          soluciones únicas y atractivas.
        </p>

        <div className="hover:animate-pulse flex justify-center py-4 font-bold">
          <button
            onClick={handleDownload}
            className="flex bg-winter w-30 h-10 p-2 transition-colors rounded-xl items-center gap-2 text-white "
            href="#"
          >
            DescargarCV
            <i onClick={handleDownload} className="bx bxs-cloud-download"></i>
          </button>
        </div>
      </section>

    </section>
  );
};

export default Header;
