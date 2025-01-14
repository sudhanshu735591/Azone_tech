import Card from "../Card";
function Body() {
  return (
    <div class="font-[sans-serif]  max-md:max-w-md mx-auto">
      <div>
        <div className="w-full relative h-screen ">
          <video
            src="./Background.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          ></video>

          <div className="bg-white">
              <div className="absolute top-0 lg:p-20 p-2">
            <div class="grid md:grid-cols-2 md:gap-10 gap-6">
              <div class="max-md:order-1 max-md:text-center">
                <p class="lg:text-4xl text-2xl font-bold text-white">
                  <span class="rotate-90 inline-block mr-2 mb-2">|</span> ALL IN
                  ONE MEETING SCHEDULER
                </p>
                <h2 class="text-white md:text-5xl lg:text-3xl lg:mt-10 mt-5 text-2xl font-extrabold mb-4 md:!leading-[55px]">
                  {" "}
                  Web Development Services
                </h2>
                <p class="lg:mt-10 lg:text-xl text-base text-white leading-relaxed">
                  Embark on a transformative digital journey with our expertly
                  crafted web solutions, meticulously designed to elevate your
                  online presence to new heights. Whether you're a budding
                  entrepreneur or an established business, we bring your vision
                  to life with innovative designs, cutting-edge technology, and
                  tailored strategies that resonate with your audience. Our team
                  is committed to understanding your unique needs, delivering
                  seamless functionality, and creating a lasting impression.
                  From conceptualization to execution, we ensure every detail
                  reflects excellence. Step into the future of digital
                  possibilities and transform your vision into reality today.
                  Let us help you shine in the digital realm!
                </p>
              </div>
              <div class="md:h-[400px] p-2">
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
        <div className="flex lg:gap-20 flex-wrap lg:flex-nowrap justify-center">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
export default Body;
