import { createElement, useState } from "react";
import { content } from "../Content";

const Contact = () => {
  const { Contact } = content;
  const [formData, setFormData] = useState({ from_name: "", user_email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Formulaire contrôlé : chaque champ est lié à l'état React via value + onChange
  // Au submit, on construit une URL mailto: pour ouvrir le client mail natif de l'utilisateur
  // encodeURIComponent : encode les caractères spéciaux (accents, retours à la ligne) pour ne pas casser l'URL
  // Limite de cette approche : nécessite un client mail configuré sur l'appareil de l'utilisateur
  const sendEmail = (e) => {
    e.preventDefault();
    const { from_name, user_email, message } = formData;
    const subject = encodeURIComponent(`Message de ${from_name}`);
    const body = encodeURIComponent(`De : ${from_name}\nEmail : ${user_email}\n\n${message}`);
    // Contact.social_media[0].text contient l'adresse email définie dans Content.js
    window.location.href = `mailto:${Contact.social_media[0].text}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>

        <br />

        <div className="flex gap-10 md:flex-row flex-col">
          {/* Formulaire */}
          <form
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
              value={formData.from_name}
              onChange={handleChange}
              className="border border-slate-600 p-3 rounded w-full"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              autoComplete="email"
              value={formData.user_email}
              onChange={handleChange}
              className="border border-slate-600 p-3 rounded w-full"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              minLength={10}
              maxLength={2000}
              value={formData.message}
              onChange={handleChange}
              className="border border-slate-600 p-3 rounded h-44 w-full resize-none"
            />
            <button
              type="submit"
              className="btn self-start bg-white text-dark_primary transition-opacity hover:opacity-90"
            >
              Envoyer
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