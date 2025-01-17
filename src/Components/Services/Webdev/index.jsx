import React from "react";
const WebDevelopmentServices = () => {
  return (
    <div>
      <div className="relative lg:h-screen h-auto">
        <video
          src="https://www.netguru.com/hubfs/_N19%20Modules/Homepage/Videos/ng-com-header-background.mp4"
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></video>
        <div className="relative p-5 lg:p-10">
          <p className="lg:text-6xl text-4xl font-bold text-white text-center">
            Why We Are
          </p>
          <div className="flex lg:w-[80%] flex-wrap lg:flex-nowrap m-auto justify-center md:gap-10 gap-6">
            <div className="text-center lg:text-left lg:w-full p-5">
              <h2 className="text-white font-semibold md:text-5xl lg:text-6xl lg:mt-10 mt-5 text-2xl mb-4 md:leading-[55px]">
                <span className="text-[rgb(0,210,98)]">Own</span> the change
              </h2>
              <p className="lg:mt-10 lg:text-xl text-base text-white leading-relaxed">
                At <span className="text-yellow-400 font-semibold">AZONE</span>, we specialize in creating digital
                solutions that go beyond expectations. With a deep
                understanding of the ever-evolving web development landscape, we
                combine creativity and technical expertise to deliver websites
                that are visually stunning, highly functional, and tailored to
                meet your unique business goals. Our team is committed to
                crafting responsive designs that provide seamless experiences
                across devices while ensuring every site is optimized for
                performance and visibility. By partnering with us, you gain a
                reliable ally dedicated to elevating your online presence and
                driving meaningful results for your brand.
              </p>
            </div>
            <div className="lg:w-[80%] w-[70%]">
              <img
                src="https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/Illustrations/02_design.png?width=1800&height=1800&name=02_design.png"
                className="rounded-lg"
                alt="Design Illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WebDevelopmentServices;