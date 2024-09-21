/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'am Pratham</p>
              <p className="grid-subtext text-justify">
                With the 3 years of experience, I have honed my skills in
                frontend and backend development, with a focus on MERN stack
                development.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/test.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext text-justify">
                I specialize in JavaScript/Typescript with a focus on React and
                Next.js ecosystem. With variety of frameworks, and tools that
                allow me to build robust and scalable applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
