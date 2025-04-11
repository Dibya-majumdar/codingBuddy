import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className="p-6 md:p-12 text-white  bg-[#1D232A]   mt-2 mb-2  lg:w-1/2 px-6 md:px-16 py-12 flex flex-col lg:ml-[350px] rounded-md overflow-hidden ">
  <h1 className="text-3xl md:text-5xl font-bold text-green-600 mb-4">About DevBuddy</h1>
  
  <p className="text-lg md:text-xl mb-6">
    DevBuddy is a platform made for developers who want to grow, collaborate, and build amazing things — together.
  </p>
  
  <h2 className="text-2xl font-bold text-green-600 mb-2">🚀 Our Mission</h2>
  <p className="mb-6">
    To help developers find their perfect dev partner — whether it's for projects, hackathons, learning, or just vibing with code.
  </p>

  <h2 className="text-2xl font-bold text-green-600 mb-2">💡 Why DevBuddy?</h2>
  <p className="mb-6">
    We noticed many developers struggle to find like-minded people to work with. DevBuddy is here to change that — no more solo coding when you want a teammate.
  </p>

  <h2 className="text-2xl font-bold text-green-600 mb-2">🧑‍💻 Meet the Creator</h2>
  <p className="mb-6">
    Hey! I’m Dibya, a Computer Science student and passionate web developer. I created DevBuddy because I personally felt the need to find coding partners who share the same vibe and ambition.
  </p>

  <h2 className="text-2xl font-bold text-green-600 mb-2">🌱 What's Next?</h2>
  <p className="mb-6">
    We're working on features like real-time chat, matching algorithms, and project collaboration tools. Stay tuned!
  </p>

  <h2 className="text-2xl font-bold text-green-600 mb-2">🤝 Join the DevBuddy Community</h2>
  <p>
    Ready to find your dev buddy? <Link to={"/login"}><span className="text-green-400 font-bold underline cursor-pointer">Sign up now</span></Link> and start connecting!
  </p>
</div>

    </div>
  )
}

export default About
