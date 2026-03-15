import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="md:min-h-screen relative flex md:flex-row flex-col md:items-end items-start justify-center">

        {/* Fond décoratif */}
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-80 md:h-auto top-0 right-0 md:bottom-0 bg-primaryLinear -z-10 w-4/12 md:w-4/12"
        />

        {/* Wrapper transparent — même zone que le fond, visible au-dessus de l'image */}
        <div className="absolute h-80 md:h-auto top-0 right-0 md:bottom-0 overflow-hidden pointer-events-none w-4/12 md:w-4/12">
          <h1
            className="hero-rotated rotate-90 absolute
              top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              md:top-[30%] md:right-[-15%] md:left-auto md:translate-x-0 md:translate-y-0
              text-[#EAF2FA] select-none"
          >
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* Image — premier dans le DOM → haut sur mobile (flex-col), droite sur desktop (md:order-2) */}
        <div className="h-80 md:h-[37rem] w-8/12 md:w-auto md:order-2">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt={`${hero.firstName} ${hero.LastName}`}
            className="h-full w-full md:w-auto object-cover object-top"
          />
        </div>

        {/* Texte — deuxième dans le DOM → bas sur mobile, gauche sur desktop (md:order-1) */}
        <div className="pb-16 px-6 pt-5 w-full md:w-auto md:order-1" data-aos="fade-down">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            <button className="btn">{hero.btnText}</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((item, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-full max-w-xs gap-5 ${
                  i === 1 ? "flex-row-reverse text-right" : ""
                }`}
              >
                <h3>{item.count}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
