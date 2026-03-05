import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { projects } = content;

  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {projects.subtitle}
          </h4>
          <br />
        </div>

        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src={projects.image}
            alt="Illustration projets"
            data-aos="fade-right"

            className="w-full max-w-sm lg:max-w-[45vw]"
          />

          <Swiper
            pagination={{ clickable: true }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}

            className="rounded-3xl pb-16 w-full sm:max-w-xs drop-shadow-primary self-start"
          >
            {projects.project_content.map((item, i) => (
              <SwiperSlide
                key={i}
                className="bg-dark_primary rounded-3xl p-5 border-b-8 border-dark_primary h-fit"
              >
                <img src={item.image} alt={item.title} className="w-full rounded-xl" />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{item.title}</h5>
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-gray self-end hover:text-accent transition"
                  >
                    GitHub →
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
