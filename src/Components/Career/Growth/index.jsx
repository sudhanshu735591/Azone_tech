import GrowthCard from "../GrowthCard";
import data from "../Data";
function Growth() {
  return (
    <>
      <div className="flex text-black flex-wrap lg:flex-nowrap p-5 lg:p-20 pt-5 flex-grow">
        <div className="gap-5 border-black flex lg:w-1/2 flex-col">
          <h1 className="text-4xl text-start font-bold">Grow with Us:</h1>
          <h1 className="text-2xl text-start font-semibold text-[rgb(58,184,243)]">
            Flexibility, Support, and Endless Opportunities
          </h1>
          <p className="lg:text-xl md:text-3xl">
            At AZONE, we believe in creating an environment where you can truly
            thrive and unlock your full potential. Our commitment to flexibility
            ensures you have the freedom to balance your personal and
            professional life seamlessly, enabling you to work in ways that suit
            you best. Whether it's through remote work options, tailored
            schedules, or supportive workplace policies, we prioritize your
            well-being and peace of mind. At the heart of it all is a culture
            that values collaboration, innovation, and inclusivity. We celebrate
            your individuality and ensure you feel seen, heard, and appreciated.
            Join us, and together we’ll create a future where your aspirations
            aren’t just dreams—they’re achievable realities. Let’s grow,
            achieve, and succeed together.
          </p>
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2 flex items-center justify-center">
          <img
            className="w-full h-auto lg:h-[80%] object-cover"
            src="./azoneImage.jpg"
            alt="Business"
          />
        </div>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap lg:p-10 pt-0 lg:gap-10">
        {
            data.map((val)=>{
                return(
                    <GrowthCard heading = {val?.heading} description = {val?.description} img = {val?.img} backGroundColor={val?.backGroundColor} textColor={val?.textColor}/>
                )
            })
        }
      </div>
      <div className="flex flex-wrap lg:flex-nowrap lg:p-10 pt-0 lg:gap-10">
        {
            data.map((val)=>{
                return(
                    <GrowthCard heading = {val?.heading} description = {val?.description} img = {val?.img} backGroundColor={val?.backGroundColor} textColor={val?.textColor}/>
                )
            })
        }
      </div>
    </>
  );
}
export default Growth;