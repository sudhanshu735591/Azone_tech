import Card from "../Card";

function Body() {
  return (
    <div className="relative min-h-screen">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvC2-d8DaDJ-xTEsUznR9wdJ9O0pWU8sQsjA&s"
        alt="Background"
      />
      <div className="relative p-5 w-full bg-white/80 backdrop-blur-md">
        <section className="mt-10 px-4 sm:px-6 md:px-8">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800">
            <span className="rotate-90 inline-block mr-2 mb-2">|</span> AZONE INSTITUTE OF TECHNOLOGY
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-3xl font-extrabold mt-4 lg:mt-10 mb-4 leading-tight text-black">
            Web Development Program
          </h2>
        </section>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-6 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="w-full lg:w-1/2">
            <p className="text-base sm:text-lg lg:text-xl text-black leading-relaxed">
              At AZONE, we are committed to making high-quality education in software and technology accessible to everyone,
              regardless of their background or financial situation. That’s why we offer completely free programs for minorities.
              Our courses are carefully structured to cater to both beginners and aspiring experts, covering everything from
              basic programming to advanced development techniques.
              <br /><br />
              We aim to democratize tech education and create equal opportunities for all learners. Whether you’re just starting
              your journey in tech or looking to enhance your existing knowledge, AZONE provides industry-relevant, hands-on
              learning experiences at no cost. We focus on real-world skills that employers value, ensuring that every learner
              is well-prepared for the job market.
              <br /><br />
              Join AZONE and unlock your potential in the world of technology—without any cost holding you back.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex">
            <img
              src="./azoneImage.jpg"
              className="w-60 sm:w-72 md:w-80 lg:w-full h-auto object-contain rounded-2xl shadow-xl"
              alt="Azone"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;