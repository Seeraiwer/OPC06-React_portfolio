import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="md:min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">

        {/* Fond décoratif */}
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        />

        {/* Wrapper transparent — même zone que le fond, positionné au-dessus de l'image */}
        <div className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bottom-0 overflow-hidden pointer-events-none">
          <h1
            className="hero-rotated rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA] select-none"
          >
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
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
        <div className="md:h-[37rem] h-96 w-full md:w-auto">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt={`${hero.firstName} ${hero.LastName}`}
            className="h-full w-full md:w-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;