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
        <h2 className="md:text-5xl text-3xl font-bold md:!leading-[55px] uppercase">
          Our Curriculum Pathways :-
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-black">
          Experience a symphony of knowledge as we curate tech-learning
          masterpieces designed to ignite your curiosity. Our courses,
          meticulously crafted with passion and precision, promise to transform
          your educational journey into a dynamic and empowering adventure at
          AZONE.
        </p>
      </div>
      <section className="mx-auto pb-10 mt-10">
        <div className="mx-auto flex px-4 lg:max-w-7xl">
          <div className="flex justify-center object-center w-full flex-col gap-12 ">
            <div className="flex flex-wrap lg:flex-nowrap lg:gap-20 space-y-5  w-full md:space-y-0 ">
              {services.map((service) => (
                <div key={service.name} className="group h-96 w-full ">
                  <div className="relative bg-[#DEE2E5] h-full w-full rounded-2xl text-black shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute text-blue-600 font-semibold text-3xl md:text-4xl font-montserrat flex flex-col items-center justify-center inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
                      {`${service.step}`}
                      <h1 className="text-2xl p-5 text-[#1F2937] font-normal text-center">
                        {service.description}
                      </h1>
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-2xl bg-[#111827] px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="flex min-h-full flex-col items-center justify-center">
                        <h2 className="text-2xl font-bold mb-4">
                          {service.name}
                        </h2>
                        <p className="text-lg text-pretty text-center mb-4 text-start">
                          {service.backtext}
                        </p>
                        <a href="tel:5555555555" className="inline-flex">
                          <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                            <span>Enroll Now</span>
                            <WrenchScrewdriverIcon className="h-6 w-6 ml-2" />
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