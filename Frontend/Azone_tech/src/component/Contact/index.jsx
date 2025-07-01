import { useState, useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState({ message: "", isError: false });
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    // Your existing animation code
    const floatingElements = document.querySelectorAll(".floating");
    floatingElements.forEach((el) => {
      el.style.animation = `float 3s ease-in-out infinite`;
      el.style.animationDelay = `${Math.random() * 2}s`;
    });

    const formContainer = document.querySelector(".form-container");
    if (formContainer) {
      formContainer.style.opacity = "0";
      formContainer.style.transform = "translateY(20px)";
      setTimeout(() => {
        formContainer.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
        formContainer.style.opacity = "1";
        formContainer.style.transform = "translateY(0)";
      }, 300);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSending(true);
  setStatus({ message: "Sending message...", isError: false });

  try {
    const response = await fetch('http://localhost:3000/send-contact-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      })
    });

    const data = await response.json();
    if (response.ok) {
      setStatus({ message: "Message sent successfully!", isError: false });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      throw new Error(data.message || "Failed to send message");
    }
  } catch (error) {
    console.error('Error:', error);
    setStatus({ message: error.message, isError: true });
  } finally {
    setIsSending(false);
  }
};
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800">
      <Header />
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .glow-text {
          text-shadow: 0 0 10px rgba(99, 102, 241, 0.7);
        }
        .input-glow:focus {
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.5);
        }
        .status-message {
          transition: all 0.3s ease;
        }
        .status-message.success {
          color: #4ade80;
        }
        .status-message.error {
          color: #f87171;
        }
      `}</style>
      
      {/* Remove the FabForm action and use onSubmit with our handler */}
      <form onSubmit={handleSubmit}>
        {/* Your existing form JSX remains the same, just update the inputs */}
        <section className="py-10 px-4">
          {/* ... existing left side content ... */}
          
          {/* Right Side - Contact Form */}
          <div className="flex items-center justify-center form-container">
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-5">
                <div className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-indigo-500"></div>
              </div>
              <div className="relative bg-gray-900/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden p-8">
                <div className="text-center pb-8">
                  <h1 className="text-4xl font-bold text-white mb-2 glow-text">Get In Touch</h1>
                  <p className="text-indigo-200">
                    Fill up the form below to send us a message.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="relative">
                    <input
                      className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 input-glow transition-all duration-200"
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="relative">
                    <input
                      className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 input-glow transition-all duration-200"
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="relative">
                    <input
                      className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 input-glow transition-all duration-200"
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="relative">
                    <textarea
                      className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 input-glow transition-all duration-200 min-h-[150px]"
                      placeholder="Type your message here..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  {/* Status message */}
                  {status.message && (
                    <div className={`status-message ${status.isError ? 'error' : 'success'} text-center`}>
                      {status.message}
                    </div>
                  )}

                  <div className="flex justify-between pt-4">
                    <button
                      type="submit"
                      disabled={isSending}
                      className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 flex items-center disabled:opacity-70"
                    >
                      {isSending ? (
                        <>
                          Sending...
                          <svg className="animate-spin -mr-1 ml-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </>
                      )}
                    </button>
                    <button
                      type="reset"
                      className="px-6 py-3 bg-gray-700 text-gray-300 font-medium rounded-lg hover:bg-gray-600 transition-all duration-300"
                      onClick={() => setFormData({ name: "", email: "", subject: "", message: "" })}
                    >
                      Clear
                    </button>
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