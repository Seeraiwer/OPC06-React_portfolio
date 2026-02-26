import { createElement, useRef, useState } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          form.current.reset();
          toast.success("Email envoyé avec succès !");
        },
        (error) => {
          console.error("EmailJS error:", error);
          toast.error("Une erreur est survenue. Veuillez réessayer.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <Toaster position="top-right" />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>

        <br />

        <div className="flex gap-10 md:flex-row flex-col">
          {/* Formulaire */}
          <form
            ref={form}
            onSubmit={sendEmail}
            noValidate
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Nom"
              required
              minLength={2}
              maxLength={100}
              autoComplete="name"
              className="border border-slate-600 p-3 rounded w-full"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              autoComplete="email"
              className="border border-slate-600 p-3 rounded w-full"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              minLength={10}
              maxLength={2000}
              className="border border-slate-600 p-3 rounded h-44 w-full resize-none"
            />
            <button
              type="submit"
              disabled={isSending}
              className={`btn self-start bg-white text-dark_primary transition-opacity ${
                isSending ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
              }`}
            >
              {isSending ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>

          {/* Liens sociaux */}
          <div className="flex-1 flex flex-col gap-5 justify-center">
            {Contact.social_media.map((item, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-3"
              >
                {/* Icône accessible */}
                <span className="text-2xl text-white" aria-hidden="true">
                  {createElement(item.icon)}
                </span>
                <a
                  className="font-Poppins text-slate-200 hover:text-white underline underline-offset-2 transition-colors break-all"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Contacter via ${item.text}`}
                >
                  {item.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;