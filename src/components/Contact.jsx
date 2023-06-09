import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [isSent, setIsSent] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_APP_PUBLIC_KEY
      )
      .then((res) => {
        setIsSent(true);
        setSuccessMessage(
          "¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto."
        );
        formRef.current.reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <section
      className="text-white px-x py-6 grid sm:grid-cols-2 max-w-[1000px] mx-auto"
      id="Contact"
    >
      <section>
        <p className="text-gray-400 my-4">
          Contactame si te interesa trabajar conmigo
        </p>
      </section>
      <form onSubmit={handleSubmit} className="grid gap-6" ref={formRef}>
        <div className="grid gap-1">
          <label className="text-sm" htmlFor="name">
            Nombre
          </label>
          <input
            className="bg-[#c9c9d8] p-2 outline-none"
            id="name"
            type="text"
            name="from_name"
          />
        </div>
        <div className="grid gap-1">
          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <input
            className="bg-[#c9c9d8] outline-none "
            id="email"
            type="text"
            name="email"
          />
        </div>
        <div className="grid gap-1">
          <label className="text-sm" htmlFor="Mensaje">
            Mensaje
          </label>
          <textarea
            className="bg-[#c9c9d8] p-2  outline-none"
            id="Mensaje"
            rows="10"
            name="message"
          ></textarea>
        </div>

        <button className="bg-indigo-800 hover:bg-indigo-500  transition-colors py-4 font-bold">
          Empecemos
        </button>
      </form>
      {isSent && (
        <p className="text-indigo-500 text-center ">{successMessage}</p>
      )}
    </section>
  );
};

export default Contact;
