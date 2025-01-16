function Facilities() {
  return (
    <div className="relative">
      <div>
        <img
          className="min-h-screen lg:h-screen w-full object-cover"
          src="https://media-public.canva.com/McoUM/MAEPSeMcoUM/1/s2.jpg"
          alt="Background"
        />
      </div>
      <div className="absolute top-0 w-full">
        <section className="mt-10 lg:mt-20 px-8">
          <h2 className="text-2xl lg:text-5xl font-bold text-center mb-5 text-white">
            OUR BEST <span className="text-[rgb(243,157,36)]">SERVICES</span>
          </h2>
          <div className="border w-40 border-[rgb(243,157,36)] m-auto"></div>
          <p className="text-white text-center mt-5 lg:text-2xl lg:w-1/2 m-auto">
            We always do our best in serving our customers and give them a satisfied impression.
          </p>
        </section>
        <div className="flex flex-col gap-10 mt-10 px-5 lg:px-0">
          <div className="m-auto lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="flex flex-col gap-2 items-center text-center">
              <img
                className="rounded-full lg:h-20 lg:w-20 h-10"
                src="https://png.pngtree.com/template/20191014/ourmid/pngtree-trade-market-logo-design-template-finance-logo-with-arrow-image_318280.jpg"
                alt="Marketing"
              />
              <p className="text-[rgb(243,157,36)] text-xl lg:text-2xl font-semibold">MARKETING</p>
              <p className="text-white">We have great market tactics.</p>
            </div>
            <div className="flex flex-col gap-2 items-center text-center">
              <img
                className="rounded-full lg:h-20 lg:w-20 h-10"
                src="https://png.pngtree.com/png-clipart/20230928/original/pngtree-handshake-icon-logo-design-success-friendship-relationship-vector-png-image_12898340.png"
                alt="Relation"
              />
              <p className="text-[rgb(243,157,36)] text-xl lg:text-2xl font-semibold">RELATION</p>
              <p className="text-white">Made relation to other people.</p>
            </div>
          </div>
          <div className="m-auto lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="flex flex-col gap-2 items-center text-center">
              <img
                className="rounded-full lg:h-20 lg:w-20 h-10"
                src="https://static.vecteezy.com/system/resources/thumbnails/046/300/242/small/strategy-logo-design-letter-mark-s-creative-modern-minimal-concept-vector.jpg"
                alt="Strategy"
              />
              <p className="text-[rgb(243,157,36)] text-xl lg:text-2xl font-semibold">STRATEGY</p>
              <p className="text-white">We have great market tactics.</p>
            </div>
            <div className="flex flex-col gap-2 items-center text-center">
              <img
                className="rounded-full lg:h-20 lg:w-20 h-10 w-10"
                src="https://e7.pngegg.com/pngimages/9/802/png-clipart-open-target-corporation-goals-company-logo.png"
                alt="Target"
              />
              <p className="text-[rgb(243,157,36)] text-xl lg:text-2xl font-semibold">TARGET</p>
              <p className="text-white">Made relation to other people.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Facilities;