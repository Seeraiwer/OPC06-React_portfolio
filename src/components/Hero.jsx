import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">

      {/* ======== LAYOUT MOBILE (caché sur md+) ======== */}
      <div className="md:hidden flex flex-col">

        {/* Zone visuelle : image + bandeau — positionnement absolu garanti */}
        <div className="relative h-80 overflow-hidden">
          <img
            src={hero.image}
            alt={`${hero.firstName} ${hero.LastName}`}
            className="absolute inset-0 h-full object-cover object-top"
            style={{ width: "calc(100% - 3rem)" }}
          />
          <div className="absolute top-0 right-0 bottom-0 w-12 bg-primaryLinear flex items-center justify-center">
            <span
              className="text-[#EAF2FA] font-bold font-Poppins text-sm whitespace-nowrap tracking-widest select-none"
              style={{ writingMode: "vertical-rl" }}
            >
              {hero.firstName}{" "}
              <span className="text-accent"> {hero.LastName}</span>
            </span>
          </div>
        </div>

        {/* Texte */}
        <div className="pb-16 px-6 pt-5">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            <button className="btn">{hero.btnText}</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((item, i) => (
              <div
                key={i}
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

      {/* ======== LAYOUT DESKTOP (caché sous md) ======== */}
      <div className="hidden md:block">
        <div className="md:min-h-screen relative flex md:flex-row md:items-end justify-center">

          {/* Fond décoratif */}
          <div
            data-aos="slide-left"
            data-aos-delay="1200"
            className="absolute h-full md:w-4/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
          />

          {/* Titre rotatif — séparé du fond pour éviter le problème de stacking context */}
          <div className="absolute h-full md:w-4/12 top-0 right-0 bottom-0 z-10 flex items-center justify-center pointer-events-none select-none">
            <h1 className="hero-rotated rotate-90 text-[#EAF2FA]">
              {hero.firstName}{" "}
              <span className="text-accent">{hero.LastName}</span>
            </h1>
          </div>

          {/* Colonne gauche — texte */}
          <div className="pb-16 px-6 pt-5" data-aos="fade-down">
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

          {/* Colonne droite — image */}
          <div className="md:h-[37rem]">
            <img
              src={hero.image}
              data-aos="slide-up"
              alt={`${hero.firstName} ${hero.LastName}`}
              className="h-full object-cover"
            />
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
