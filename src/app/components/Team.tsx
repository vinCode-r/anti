import { MENTOR, TEAM } from "@/data/Team";
import React, { useEffect } from "react";
import Profile from "./Profile";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 250,
      once: true,
    });
  }, []);

  return (
    <section
      id="team"
      className="min-h-[80vh] max-w-[88rem] w-full py-16 z-[100] "
    >
      <h1
        className="text-white/90 bg-clip-text md:text-5xl text-4xl font-bold text-center mb-20"
        data-aos="fade-up"
      >
        Meet Our <span className="text-primary">Team</span>
      </h1>
      <div>
        <Profile
          image={MENTOR.image}
          name={MENTOR.name}
          role={MENTOR.role}
          link={MENTOR.link}
        />
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 mt-16 gap-y-12 md:gap-y-8 grid-cols-1">
        {TEAM.map((item) => (
          <Profile
            key={item.name}
            image={item.image}
            name={item.name}
            role={item.role}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
