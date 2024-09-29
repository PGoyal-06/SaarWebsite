import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: "Rohit Goyal",
      from_name: `${formData.firstName} ${formData.lastName}`,
      message: formData.message,
      reply_to: formData.email,
    };

    emailjs
      .send(
        "service_10wpldt",
        "template_yl90pwa",
        templateParams,
        "33J_nhX94ic4rqhf_"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            message: "",
          });
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-8">
        {/* Get in touch section with gradient */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-extrabold">Get in touch</h2>
          <p className="mt-4 text-lg leading-6">
            Whether you have a question about our services, need assistance, or
            want to discuss a project, our team is ready to assist you. We look
            forward to hearing from you.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-2">
              <FiMapPin className="h-6 w-6" />
              <p className="text-lg">11 Balin Crescent, Brampton, L6X0V5</p>
            </div>
            <div className="flex items-center space-x-2">
              <FiPhone className="h-6 w-6" />
              <p className="text-lg">+1 (437) 779-8747</p>
            </div>
            <div className="flex items-center space-x-2">
              <FiMail className="h-6 w-6" />
              <p className="text-lg">rohit.goyal@saar.in</p>
            </div>
          </div>
        </div>

        <div className="mt-8 lg:mt-0 lg:ml-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Send us a message
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6">
              <div>
                <label htmlFor="firstName" className="sr-only">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="given-name"
                  className="block w-full px-5 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="sr-only">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  autoComplete="family-name"
                  className="block w-full px-5 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full px-5 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="sr-only">
                Phone number
              </label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                autoComplete="tel"
                className="block w-full px-5 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className="block w-full px-5 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
