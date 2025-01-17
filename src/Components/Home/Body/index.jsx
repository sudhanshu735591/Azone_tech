import Card from "../Card";
function Body() {
  return (
    <div className="relative lg:h-screen">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://media-public.canva.com/McoUM/MAEPSeMcoUM/1/s2.jpg"
        alt="Background"
      />
      <div className="relative p-5 w-full">
        <div className="">
          <section className="mt-10  px-8">
            <p class="lg:text-4xl text-2xl font-bold text-white">
              <span class="rotate-90 inline-block mr-2 mb-2">|</span> ALL IN ONE
              MEETING SCHEDULER
            </p>
            <h2 class="text-white md:text-5xl lg:text-3xl lg:mt-10 mt-5 text-2xl font-extrabold mb-4 md:!leading-[55px]">
              {" "}
              Web Development Services
            </h2>
          </section>

          <div className="lg:flex gap-40 w-[95%] m-auto">
            <div className="w-full">
              <p class="lg:text-xl text-base text-white leading-relaxed">
                Embark on a transformative digital journey with our expertly
                crafted web solutions, meticulously designed to elevate your
                online presence to new heights. Whether you're a budding
                entrepreneur or an established business, we bring your vision to
                life with innovative designs, cutting-edge technology, and
                tailored strategies that resonate with your audience. Our team
                is committed to understanding your unique needs, delivering
                seamless functionality, and creating a lasting impression. From
                conceptualization to execution, we ensure every detail reflects
                excellence. Step into the future of digital possibilities and
                transform your vision into reality today. Let us help you shine
                in the digital realm!
              </p>
            </div>
            <div class=" p-2">
              <img
                src="https://readymadeui.com/management-img.webp"
                class="w-full h-full object-contain rounded-lg"
                alt="Dining Experience"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;
