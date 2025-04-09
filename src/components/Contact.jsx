// import React from 'react'

// const Contact = () => {
//   return (
//     <div>
//       <h1>Contact</h1>
//     </div>
//   )
// }

// export default Contact


import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen  text-black px-6 md:px-16 py-12">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Contact Us</h1>
      <p className="text-lg mb-8">
        Have a question, suggestion, or just want to say hello? We’d love to hear from you! 👋
      </p>

      {/* Contact Info */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl text-green-500 font-semibold">📧 Email</h2>
          <p className="mt-2 text-lg">DevBuddy2025@gmail.com</p>
        </div>

        <div>
          <h2 className="text-xl text-green-500 font-semibold">💬 Socials</h2>
          <p className="mt-2 text-lg">GitHub: <a href="https://github.com/Dibya-majumdar/" className="text-green-400 hover:underline">https://github.com/Dibya-majumdar/</a></p>
          <p className="text-lg">LinkedIn: <Link to={"https://www.linkedin.com/in/dibya-majumdar-3879102a2/"} className="text-green-400 hover:underline">https://www.linkedin.com/in/dibya-majumdar-3879102a2/</Link></p>
        </div>

        <div>
          <h2 className="text-xl text-green-500 font-semibold">📍 Location</h2>
          <p className="mt-2 text-lg">Planet Earth 🌍 — Mostly online!</p>
        </div>
      </div>

      {/* Optional: Contact Form */}
      <div className="mt-12">
        {/* <h2 className="text-2xl font-bold text-green-400 mb-4">Send us a message</h2> */}
        {/* <form className="space-y-4 max-w-xl">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
          >
            Send
          </button>
        </form> */}
      </div>
    </div>
  );
};

export default Contact;
