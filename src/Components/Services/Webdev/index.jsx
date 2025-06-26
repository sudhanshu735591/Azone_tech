import React from "react";
const WebDevelopmentServices = () => {
  const data = [
    {
      heading: "Personalized Guidance",
      img: "https://i.gifer.com/origin/71/711557abfeed55bc0ebc5185168147c6.gif",
    },
    {
      heading: "Interview Preparation",
      img: "https://digitalscholar.in/wp-content/uploads/2022/06/Inbound-Marketing-Manager.gif",
    },
    {
      heading: "Skill-Based Responsibility",
      img: "https://cdn.dribbble.com/users/1519660/screenshots/9809330/media/6cac76b4cb5fdd9085989daecdfa1318.gif",
    },
  ];
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
          <p className="lg:text-6xl text-4xl font-SEMIbold text-white text-center uppercase">
            Why We Are
          </p>
          <div className="flex flex-wrap lg:flex-nowrap m-auto  md:gap-10 gap-6 text-white mt-10 text-2xl">
            <p>
              Our primary objective is not merely to ensure the completion of
              the course, but to empower each individual by assigning
              responsibilities aligned with their current skill level and
              knowledge. We carefully evaluate every student through a thorough
              assessment process before enrollment to ensure they are placed
              appropriately. Throughout the course, we provide personalized
              guidance to support their learning journey. Additionally, upon
              successful completion of the program, we offer dedicated
              assistance for interview preparation, equipping our students with
              the tools and confidence they need to succeed in their careers.
              Our commitment lies in holistic development and long-term success
              of every learner.
            </p>
          </div>
          <div className="flex gap-6 sm:gap-8 lg:gap-10 justify-between flex-wrap">
            {data.map((val) => {
              return (
                <div className="w-full sm:w-[300px] lg:w-[400px] text-start p-5 gap-5 flex flex-col">
                  <h1 className="text-xl sm:text-2xl font-bold text-yellow-300">
                    {val.heading}
                  </h1>
                  <img src={val.img} className="w-full rounded-2xl" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WebDevelopmentServices;
