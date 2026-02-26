import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />

        <div className="flex items-center md:flex-row flex-col-reverse">
          {/* Image desktop */}
          <img
            src={Hireme.image1}
            alt="Illustration hire me"
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          {/* Image mobile */}
          <img
            src={Hireme.image2}
            alt="Illustration hire me"
            data-aos="fade-up"
            className="max-w-[80vw] md:hidden"
          />

          <div
            data-aos="fade-left"
            className="
              border-2 border-dark_primary
              w-full sm:max-w-sm
              p-6 shadow-sm rounded-xl rounded-br-[8rem]
            "
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />
            <button className="btn bg-dark_primary text-white">
              {Hireme.btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
