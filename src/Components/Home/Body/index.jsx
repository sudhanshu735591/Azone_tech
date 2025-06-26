import Card from "../Card";
function Body() {
  return (
    <div className="relative lg:h-screen">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvC2-d8DaDJ-xTEsUznR9wdJ9O0pWU8sQsjA&s"
        alt="Background"
      />
      <div className="relative p-5 w-full">
        <div className="">
          <section className="mt-10  px-8">
            <p class="lg:text-4xl text-2xl font-bold text-blue-800">
              <span class="rotate-90 inline-block mr-2 mb-2">|</span> AZONE
              INSTITUTE OF TECHNOLOGY
            </p>
            <h2 class="text-black md:text-5xl lg:text-3xl lg:mt-10 mt-5 text-2xl font-extrabold mb-4 md:!leading-[55px]">
              {" "}
              Web Development Program
            </h2>
          </section>

          <div className="lg:flex gap-40 w-[95%] m-auto">
            <div className="w-full">
              <p class="lg:text-xl text-base text-black leading-relaxed">
                At AZONE, we are committed to making high-quality education in
                software and technology accessible to everyone, regardless of
                their background or financial situation, that's why we offer
                completely free programs for minorities.Our
                courses are carefully structured to cater to both beginners and
                aspiring experts, covering everything from basic programming to
                advanced development techniques.
                we aim to democratize tech education and create equal
                opportunities for all learners. Whether you’re just starting
                your journey in tech or looking to enhance your existing
                knowledge, AZONE provides industry-relevant, hands-on learning
                experiences at no cost. We focus on real-world skills that
                employers value, ensuring that every learner is well-prepared
                for the job market. Join AZONE and unlock your potential in the
                world of technology—without any cost holding you back.
              </p>
            </div>
            <div class="">
              <img
                src="./azoneImage.jpg"
                class="w-full h-full object-contain rounded-full"
                alt="Azone"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;