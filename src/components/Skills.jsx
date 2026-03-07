import { createElement, useState } from "react";
import { content } from "../Content";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
// setAppElement : obligatoire pour l'accessibilité — indique au lecteur d'écran quel élément masquer quand la modale est ouverte
Modal.setAppElement("#root");

const Skills = () => {
  const { skills } = content;
  // modalIsOpen : booléen qui contrôle l'affichage de la modale
  // selectSkill : stocke la compétence cliquée pour afficher ses détails dans la modale
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel={`Détails — ${selectSkill?.name}`}
      >
        <div className="flex items-center gap-2">
          <img className="h-10" src={selectSkill?.logo} alt={selectSkill?.name} />
          <h6>{selectSkill?.name}</h6>
        </div>
        <br />
        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
          <li>Lorem ipsum dolor sit, ame.</li>
          <li>Lorem ipsum dolor sit, amet consectetur</li>
          <li>Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing.</li>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est beatae quos rem.</li>
        </ul>
        <br />
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn">
            Fermer
          </button>
        </div>
      </Modal>

      {/* Contenu */}
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="
                bg-white sm:cursor-pointer relative group
                w-full flex items-center gap-5
                p-5 rounded-md border-2 border-slate-200
              "
            >
              <div className="shrink-0">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-10 group-hover:scale-125 duration-200"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
                <div
                  role="button"
                  aria-label={`Voir les détails de ${skill.name}`}
                  onClick={() => {
                    setSelectSkill(skill);
                    openModal();
                  }}
                  className="text-xl absolute top-3 right-3 cursor-pointer"
                >
                  {createElement(skills.icon)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
