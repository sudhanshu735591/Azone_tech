import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import AnimatedLogoText from "./AnimationText";

function Body() {
  // Animation controls for each section
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [headingRef, headingInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [contentRef, contentInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const slideUpVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvC2-d8DaDJ-xTEsUznR9wdJ9O0pWU8sQsjA&s"
        alt="Background"
      />
      <div className="relative p-5 w-full bg-white/80 backdrop-blur-md">
        <motion.section
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-10 px-4 sm:px-6 md:px-8"
        >
          <AnimatedLogoText />

          <motion.h2
            ref={headingRef}
            initial="hidden"
            animate={headingInView ? "visible" : "hidden"}
            variants={slideUpVariants}
            className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold md:font-bold mt-4 lg:mt-10 mb-4 leading-tight text-black"
          >
            Web Development Digital Program (Online Class)
          </motion.h2>
        </motion.section>

        <motion.div
          ref={contentRef}
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-6 max-w-7xl mx-auto px-4 sm:px-6 md:px-8"
        >
          <motion.div
            variants={slideUpVariants}
            className="w-full lg:w-1/2"
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.3,
                  },
                },
              }}
              className="text-base sm:text-lg lg:text-xl text-black leading-relaxed"
            >
              {`At AZONE, we are committed to making high-quality education in software and technology accessible to everyone, regardless of their background or financial situation. That's why we offer completely free programs for minorities. Our courses are carefully structured to cater to both beginners and aspiring experts, covering everything from basic programming to advanced development techniques. We aim to democratize tech education and create equal opportunities for all learners. Whether you’re just starting your journey in tech or looking to enhance your existing knowledge, AZONE provides industry-relevant, hands-on learning experiences at no cost. We focus on real-world skills that employers value, ensuring that every learner is well-prepared for the job market.

Join AZONE and unlock your potential in the world of technology—without any cost holding you back.`
                .split('\n\n')
                .map((paragraph, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="block mb-4"
                  >
                    {paragraph}
                  </motion.span>
                ))}
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeInVariants}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={contentInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              src="./azoneImage.jpg"
              className="h-auto max-h-[500px] object-contain rounded-2xl shadow-xl"
              alt="Azone"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Body;