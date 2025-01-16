import React from 'react';
const CreativeServices = () => {
  return (
    <div className="lg:h-screen bg-gradient-to-r from-blue-500 via-black to-blue-900  text-white p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="text-start mb-10">
          <h1 className="text-6xl font-semibold">Creative Services</h1>
          <p className="mt-4">CHOOSE A PLAN THAT'S RIGHT FOR YOU.</p>
        </header>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white text-blue-900 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold">Design Essentials</h2>
            <p className="text-gray-700 mt-4">Quickly and easily meet your core design needs</p>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔</span> eBook & digital reports
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔</span> Illustration design
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔</span> Presentation design
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔</span> Motion design
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✖</span> Campaign concepting
              </li>
            </ul>
            <div className="mt-6 text-center">
              <p className="text-4xl font-bold text-purple-700">$800</p>
              <p className="text-gray-500">/month</p>
            </div>
          </div>
          <div className="bg-white text-blue-900 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold">End-to-End Creative</h2>
            <p className="text-gray-700 mt-4">Full-service creative for everything you need</p>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔</span> eBook & digital reports
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔</span> Illustration design
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔</span> Presentation design
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔</span> Motion design
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔</span> Campaign concepting
              </li>
            </ul>
            <div className="mt-6 text-center">
              <p className="text-4xl font-bold text-purple-700">$1500</p>
              <p className="text-gray-500">/month</p>
            </div>
          </div>
          <div className="bg-white text-blue-900 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold">Digital Advertising</h2>
            <p className="text-gray-700 mt-4">Creative service for growth and performance marketing</p>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔</span> eBook & digital reports
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔</span> Illustration design
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✖</span> Presentation design
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✖</span> Motion design
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✖</span> Campaign concepting
              </li>
            </ul>
            <div className="mt-6 text-center">
              <p className="text-4xl font-bold text-purple-700">$500</p>
              <p className="text-gray-500">/month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreativeServices;