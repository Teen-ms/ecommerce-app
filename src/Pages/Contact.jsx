import React, { useState } from "react";
import Mymapcomponent from "./Mymapcomponent";

function Contact() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted Data:", formData); // Check in browser console

    // Clear form fields after submission
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Contact Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600">
          Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac
          massa orci. Suspendisse vulputate semper nunc eget rhoncus.
        </p>
      </div>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Left Section */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-gray-900 to-gray-900 p-6 rounded-xl text-white">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-sm opacity-90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id
                leo tempor, congue justo at, lobortis orci.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <svg
                    className="w-6 h-6 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">123 Fifth Avenue, New York, NY 10160</p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-100 rounded-full">
                  <svg
                    className="w-6 h-6 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">Contact@info.com</p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <svg
                    className="w-6 h-6 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">9-334-5678-8976</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-900 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition resize-none"
                rows="5"
              ></textarea>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-gray-900 to-gray-900 text-white font-semibold rounded-lg hover:from-gray-900 hover:to-gray-900 transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Component */}
      <div className="max-w-6xl mx-auto mt-12 rounded-2xl overflow-hidden shadow-2xl">
        <Mymapcomponent />
      </div>
    </div>
  );
}

export default Contact;