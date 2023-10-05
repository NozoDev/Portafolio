import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [isSent, setIsSent] = useState(false);
  const [successMessage, setSuccessMessage] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { from_name, email, message } = e.target.elements;

    if (!from_name.value || !email.value || !message.value) {
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLETE_ID,
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
    className="text-white p-2 px-x py-6 max-w-[600px] mx-auto relative z-20"
    >
    <div className="text-center text-3xl">Contactame</div>
      <form onSubmit={handleSubmit} className="grid gap-6 mt-4 " ref={formRef}>
        <div className="grid gap-1">
          <label className="text-sm" htmlFor="name">
            Nombre
          </label>
          <input
            className="bg-[#c9c9d8] p-2 outline-none text-black"
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
            className="bg-[#c9c9d8] p-2 outline-none text-black"
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
            className="bg-[#c9c9d8] p-2 outline-none text-black"
            id="Mensaje"
            rows="10"
            name="message"
          ></textarea>
        </div>

        <button className="bg-[#7895CB] hover:bg-gray-d  transition-colors py-4 font-bold">
          Empecemos
        </button>
      </form>
      {isSent && <p className="text-white text-center ">{successMessage}</p>}
    </section>
  );
};

export default Contact;
