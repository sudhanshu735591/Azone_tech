import React from 'react';
const CreativeServices = () => {
 return(
  <div className="relative bg-white min-h-screen p-10 pt-0 text-white">
      <div>
           <svg
        className="absolute top-0 left-0 w-full h-full z-0"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="none"
          stroke="#6a0dad" 
          strokeWidth="20"
          d="M0,256 C480,32 960,480 1440,256" 
        />
      </svg>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row gap-10 md:gap-80">
        <div>
          <div className="md:sticky md:top-20">
            <h1 className="text-5xl md:text-6xl text-blue-800 mt-10">
              Our Offerings at a{" "}
              <span className="font-dancing text-6xl md:text-6xl text-yellow-300 font-semibold">
                Glance.
              </span>
            </h1>
          </div>
        </div>
        <div className="md:w-2/3 flex flex-col gap-10">
          <div className="flex flex-col gap-5 text-start font-montserrat">
            <h2 className="text-3xl md:text-4xl font-playwright text-blue-800 mt-10">
              Personalized Guidance
            </h2>
            <p className="text-lg md:text-2xl text-black">
            We provide personalized guidance tailored to each student's individual strengths, weaknesses, and career goals. Our mentors offer continuous support throughout the course, helping students stay on track, overcome challenges, and build the confidence needed to succeed in interviews and real-world scenarios.
            </p>
          </div>
          <div className="flex flex-col gap-5 text-start">
            <h2 className="text-3xl md:text-4xl font-playwright text-blue-800">
            Interview Preparation
            </h2>
            <p className="text-lg md:text-2xl text-black">
            We offer comprehensive interview preparation, including mock interviews, resume building, and personalized feedback. Our goal is to equip students with the confidence, communication skills, and technical knowledge needed to succeed in job interviews and secure their desired roles.
            </p>
          </div>
          <div className="flex flex-col gap-5 text-start">
            <h2 className="text-3xl md:text-4xl font-playwright text-blue-800">
            Skill-Based Responsibility
            </h2>
            <p className="text-lg md:text-2xl text-black">
            We assign responsibilities based on each student’s current skills and knowledge level, ensuring they work on tasks that match their capabilities. This approach promotes effective learning, builds confidence, and helps individuals grow at their own pace while gaining practical experience.
            </p>
          </div>
        </div>
      </div>
    </div>
 )
};
export default CreativeServices;