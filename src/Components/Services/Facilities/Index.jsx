import Card from "../Card";

function Facilities() {
  const services = [
    {
      id: 1,
      heading: "Web Development",
      img: "🌐",
      text: "Crafting modern and responsive websites.",
    },
    {
      id: 2,
      heading: "App Development",
      img: "📱",
      text: "Building user-friendly mobile apps.",
    },
    {
      id: 3,
      heading: "UI/UX Design",
      img: "🎨",
      text: "Designing intuitive user interfaces.",
    },
    {
      id: 4,
      heading: "Digital Marketing",
      img: "📈",
      text: "Boosting online presence with SEO.",
    },
    {
      id: 5,
      heading: "Cloud Solutions",
      img: "☁️",
      text: "Scalable cloud services for businesses.",
    },
    {
      id: 6,
      heading: "E-commerce Solutions",
      img: "🛒",
      text: "Setting up online stores efficiently.",
    },
  ];
  return (
    <div className="relative">
      <div>
        <img
          className="h-screen w-full"
          src="https://media-public.canva.com/McoUM/MAEPSeMcoUM/1/s2.jpg"
          alt=""
        />
      </div>
      <div className="absolute top-0 w-full">
        <section className="py-16 px-8 m-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-white">OUR BEST <span className="text-[rgb(243,157,36)]">SERVICES</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {services.map((service) => (
              <Card heading={service.heading} img={service?.img} text={service.text}/>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
export default Facilities;
