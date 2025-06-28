import { WrenchScrewdriverIcon } from "@heroicons/react/20/solid";
function Performance() {
  const services = [
    {
      step: "GRADUATE SCHOLORS",
      imageUrl:
        "https://images.unsplash.com/photo-1632733711679-529326f6db12?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Our 100% practical program emphasizes logic-building abilities, covering front-end and back-end development, along with in-depth training in database management, ensuring students gain real-world coding experience and a strong foundation in software development.",
      backtext:
        "As the IT industry continues to grow rapidly, we are offering specialized courses for graduates, including B.Tech, M.Tech, BCA, and MCA students, who are eager to enhance their technical skills. This program is especially designed for passionate learners who face financial constraints. In support of inclusive education, we are proud to offer this course completely free for students from minority backgrounds.",
    },
    {
      step: "10+2 / POLYTECHNIC (CS/IT)",
      imageUrl:
        "https://images.unsplash.com/photo-1687462970787-61d953508926?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "We offer courses in Java, Python, C++, and C, aligned with CBSE/ICSE curriculum or ideal for anyone seeking to build strong programming fundamentals and gain practical knowledge in specific languages or concepts.",
      backtext:
        "We aim to empower senior secondary (10+2) students or diploma from underprivileged backgrounds by providing essential skill development before they pursue professional courses, whether under the CBSE or ICSE board. This specially designed program is completely free for students from minority communities with a family income below ₹2 LPA, ensuring that financial constraints do not hinder their educational growth and future opportunities.",
    },
  ];
  return (
    <div className="font-[sans-serif] text-blue-600  py-8 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="md:text-4xl text-3xl font-bold md:!leading-[55px] uppercase">
          Our Curriculum Pathways :-
        </h2>
        <p className="mt-6 text-md leading-relaxed text-black">
          Experience a symphony of knowledge as we curate tech-learning
          masterpieces designed to ignite your curiosity. Our courses,
          meticulously crafted with passion and precision, promise to transform
          your educational journey into a dynamic and empowering adventure at
          AZONE.
        </p>
      </div>
      <section className="mx-auto pb-10 mt-10">
        <div className="mx-auto flex px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="flex justify-center w-full flex-col gap-12">
            <div className="flex flex-wrap lg:flex-nowrap lg:gap-20 gap-6 w-full">
              {services.map((service, index) => (
                <div key={index} className="group min-h-[20rem] w-full">
                  <div className="relative bg-[#DEE2E5] h-full w-full rounded-2xl text-black shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                    {/* Front Side */}
                    <div className="absolute text-blue-600 font-semibold text-2xl sm:text-2xl md:text-3xl lg:text-2xl font-montserrat flex flex-col items-center justify-center inset-0 h-full w-full rounded-xl text-center px-4 sm:px-6 [backface-visibility:hidden]">
                      <span className="md:text-2xl">{service.step}</span>
                      <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl mt-4 text-[#1F2937] font-normal leading-relaxed">
                        {service.description}
                      </h1>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 h-full w-full rounded-2xl bg-[#111827] px-6 sm:px-10 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="flex min-h-full flex-col items-center justify-center py-6">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                          {service.name}
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-left mb-4 leading-relaxed">
                          {service.backtext}
                        </p>
                        <a href="tel:5555555555" className="inline-flex">
                          <button className="mt-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center">
                            <span>Enroll Now</span>
                            <WrenchScrewdriverIcon className="h-5 w-5 ml-2" />
                          </button>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
export default Performance;