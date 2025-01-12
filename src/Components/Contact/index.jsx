import Footer from "../Footer";
import Header from "../Header";

function Contact() {
  return (
    <div>
      <Header />
      <form action="https://fabform.io/f/xxxxx" method="post">
        <section className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-40">
              <div className="lg:mb-0 mb-10">
                <div className="group w-full h-full">
                  <div className="relative h-full">
                    <img
                      src="https://pagedone.io/asset/uploads/1696488602.png"
                      alt="ContactUs tailwind section"
                      className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700"
                    />
                    <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                      Contact us
                    </h1>
                    <div className="absolute bottom-0 w-full lg:p-11 p-5">
                      <div className="bg-white rounded-lg p-6 block">
                        <a
                          href="javascript:;"
                          className="flex items-center mb-6"
                        >
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z"
                              stroke="#4F46E5"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <h5 className="text-black text-base font-normal leading-6 ml-5">
                            470-601-1911
                          </h5>
                        </a>
                        <a
                          href="https://veilmail.io/irish-geoff"
                          className="flex items-center mb-6"
                        >
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {/* SVG Content */}
                          </svg>
                          <h5 className="text-black text-base font-normal leading-6 ml-5">
                            https://veilmail.io/irish-geoff
                          </h5>
                        </a>
                        <a href="javascript:;" className="flex items-center">
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {/* SVG Content */}
                          </svg>
                          <h5 className="text-black text-base font-normal leading-6 ml-5">
                            654 Sycamore Avenue, Meadowville, WA 76543
                          </h5>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                  <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="text-center pb-6">
                      <h1 className="text-3xl">Contact Us!</h1>
                      <p className="text-gray-300">
                        Fill up the form below to send us a message.
                      </p>
                    </div>

                    <form>
                      <input
                        className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Name"
                        name="name"
                      />

                      <input
                        className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        placeholder="Email"
                        name="email"
                      />

                      <input
                        className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Subject"
                        name="_subject"
                      />

                      <textarea
                        className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Type your message here..."
                        name="message"
                        style={{ height: "121px" }}
                      ></textarea>

                      <div className="flex justify-between">
                        <input
                          className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="submit"
                          value="Send ➤"
                        />
                        <input
                          className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="reset"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
      <Footer />
    </div>
  );
}

export default Contact;
