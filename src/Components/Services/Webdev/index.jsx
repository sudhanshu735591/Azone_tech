import React from "react";

const WebDevelopmentServices = () => {
  return (
    <div>
        <div className="w-full relative h-screen ">
          <video
            src="https://www.netguru.com/hubfs/_N19%20Modules/Homepage/Videos/ng-com-header-background.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          ></video>

          <div className="bg-white">
              <div className="absolute top-0 lg:p-20 p-2">
            <div class="grid md:grid-cols-2 md:gap-10 gap-6">
              <div class="max-md:order-1 max-md:text-center">
                <p class="lg:text-6xl text-4xl font-bold text-white">Why We Are</p>
                <h2 class="text-white md:text-5xl lg:text-6xl lg:mt-20 mt-5 text-2xl  mb-4 md:!leading-[55px]">
                  {" "}
                  <span className="text-[rgb(0,210,98)]">Own</span> the change
                </h2>
                <p class="lg:mt-10 lg:text-xl text-base text-white leading-relaxed">
                At [Your Company Name], we specialize in creating digital solutions that go beyond expectations. With a deep understanding of the ever-evolving web development landscape, we combine creativity and technical expertise to deliver websites that are visually stunning, highly functional, and tailored to meet your unique business goals. Our team is committed to crafting responsive designs that provide seamless experiences across devices while ensuring every site is optimized for performance and visibility. By partnering with us, you gain a reliable ally dedicated to elevating your online presence and driving meaningful results for your brand.
                </p>
              </div>
              <div class=" p-2">
                <img
                  src="https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/Illustrations/02_design.png?width=1800&height=1800&name=02_design.png"
                  class="w-full h-full object-contain rounded-lg"
                  alt="Dining Experience"
                />
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
  );
};

export default WebDevelopmentServices;
