import { useEffect, useRef, useState } from "react";
function Features() {
  const [isThirdVisible, setIsThirdVisible] = useState(false);
  const thirdComponentRef = useRef(null);

  const handleScroll = () => {
    if (thirdComponentRef.current) {
      const rect = thirdComponentRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0; // Partially visible
      setIsThirdVisible(isVisible);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      requestAnimationFrame(handleScroll); // Use requestAnimationFrame for better performance
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="mt-20 font-sans max-w-6xl max-md:max-w-md mx-auto p-5">
      <div>
        <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
          <div className="max-md:order-1 max-md:text-center z-50 relative">
            <h2 className="text-gray-800 lg:text-5xl md:text-5xl text-3xl font-bold mb-4 md:!leading-[56px]">
              <span className="text-blue-600">Smart</span> Technology with{" "}
              <span className="text-blue-600">expert</span> Instructors
            </h2>
            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              At AZONE, we combine smart technology with expert instructors to
              deliver a powerful, future-ready learning experience. Our courses
              are designed to equip students with real-world skills, guided by
              industry professionals who bring hands-on expertise. Learn, grow,
              and succeed with cutting-edge tools and mentorship tailored for
              today’s competitive tech landscape.
            </p>
            <button
              type="button"
              className="mt-6 bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5"
            >
              Get Started
            </button>
          </div>

          <div className="lg:h-[550px] md:h-[550px] flex items-center relative max-md:before:hidden before:absolute before:bg-[#DEE2E5] before:h-[120%] before:w-[120%] before:right-0 before:z-0">
            <img
              src="https://cdn.dribbble.com/users/1124806/screenshots/4871258/ezgif.com-optimize.gif"
              className="rounded-md lg:w-full z-50 relative"
              alt="Dining Experience"
            />
          </div>
        </div>

        <div
          ref={thirdComponentRef} // Attach ref to the third component
          className="grid md:grid-cols-3 gap-4 z-50 relative md:px-4 max-md:mt-12 mb-12"
        >
          <div className="bg-white p-6 shadow rounded-md">
            <h3 className="text-gray-800 text-xl font-bold mb-2">
              Customization
            </h3>
            <p className="text-sm text-gray-600">
              Tailored solutions to fit your unique needs.
            </p>
          </div>
          <div className="bg-white p-6 shadow rounded-md">
            <h3 className="text-gray-800 text-xl font-bold mb-2">Support</h3>
            <p className="text-sm text-gray-600">
              10:00 AM to 06:00 PM support for all your inquiries. (Saturday- Sunday off)
            </p>
          </div>
          <div className="bg-white p-6 shadow rounded-md">
            <h3 className="text-gray-800 text-xl font-bold mb-2">
              Performance
            </h3>
            <p className="text-sm text-gray-600">
              Optimized results through speed, reliability, and efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Features;
