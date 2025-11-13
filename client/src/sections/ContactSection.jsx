import { useEffect, useRef, useState, forwardRef } from "react";
import gsap from "gsap";
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";

const FloatingIcon = ({ children, className = "" }) => {
  const iconRef = useRef();

  useEffect(() => {
    gsap.to(iconRef.current, {
      y: -10,
      rotationY: 60,
  scale: 1.1,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: Math.random(), // randomize bounce timing
    });
  }, []);

  return (
    <div
      ref={iconRef}
      className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-white transition-transform duration-300 ${className}`}
      style={{ transformStyle: "preserve-3d" }} // Enable 3D transforms
    
    >
      {children}
    </div>
  );
};

const ContactSection = forwardRef((props, ref) => {
  const cardRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  useEffect(() => {
    gsap.to(cardRef.current, {
      rotateY: isFlipped ? 180 : 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, [isFlipped]);

  return (
    <section
      id="contact"
      ref={ref}
      className="flex flex-col items-center justify-center min-h-screen py-16 px-6 mt-20 bg-black text-white"
    >
      <h1 className="font-semibold md:text-5xl text-3xl mb-10 text-center">
        Get in Touch
      </h1>

      <div className="relative w-full max-w-md perspective">
        <div
          ref={cardRef}
          className="relative w-full h-[550px] transition-transform duration-700 preserve-3d"
        >
          {/* Front side - Contact Form */}
          <div className="absolute w-full h-full backface-hidden bg-gray-800 rounded-xl p-6 shadow-xl">
            <form>
              <div className="mb-4">
                <label className="text-gray-300 text-sm">Name</label>
                <input
                  type="text"
                  className="w-full p-2 mt-1 rounded-md bg-gray-700 border border-gray-600 text-white"
                />
              </div>
              <div className="mb-4">
                <label className="text-gray-300 text-sm">Email</label>
                <input
                  type="email"
                  className="w-full p-2 mt-1 rounded-md bg-gray-700 border border-gray-600 text-white"
                />
              </div>
              <div className="mb-4">
                <label className="text-gray-300 text-sm">Message</label>
                <textarea
                  rows="4"
                  className="w-full p-2 mt-1 rounded-md bg-gray-700 border border-gray-600 text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
            <button
              onClick={handleFlip}
              className="mt-4 text-blue-400 underline text-sm hover:text-blue-500"
            >
              See Quick Links 🔄
            </button>
            <p className="text-sm text-gray-400 mt-4 text-center">
              Feel free to reach out for collaborations, projects, or just a chat!
            </p>
          </div>


{/* Back side - Quick Links */}
<div className="absolute w-full h-full backface-hidden rotateY-180 bg-gray-900 rounded-xl p-6 shadow-xl flex flex-col justify-between">
  <h2 className="text-2xl font-bold text-center text-white mb-4">Quick Links</h2>

  <ul className="grid grid-cols-2 gap-6 justify-items-center">
    <li className="group flex flex-col items-center">
      <a href="mailto:mani@omarmani.com" className="hover:text-teal-400 text-center">
        <FloatingIcon className="bg-gradient-to-br from-pink-500 to-yellow-400 text-2xl">
          <FaEnvelope size={24} />
        </FloatingIcon>
        <span className="mt-2 text-white text-sm">Email</span>
      </a>
    </li>

    <li className="group flex flex-col items-center">
      <a href="https://www.linkedin.com/in/omarmani/" target="_blank" rel="noreferrer" className="hover:text-blue-400 text-center">
        <FloatingIcon className="bg-gradient-to-br from-blue-500 to-indigo-600 text-2xl">
          <FaLinkedin size={24} />
        </FloatingIcon>
        <span className="mt-2 text-white text-sm">LinkedIn</span>
      </a>
    </li>

    <li className="group flex flex-col items-center">
      <a href="https://github.com/MANIOMARDEV" target="_blank" rel="noreferrer" className="hover:text-gray-300 text-center">
        <FloatingIcon className="bg-gradient-to-br from-gray-700 to-black text-2xl">
          <FaGithub size={24} />
        </FloatingIcon>
        <span className="mt-2 text-white text-sm">GitHub</span>
      </a>
    </li>

    <li className="group flex flex-col items-center">
      <a href="#resume" className="hover:text-green-400 text-center">
        <FloatingIcon className="bg-gradient-to-br from-green-500 to-lime-400 text-2xl">
          <FaFileAlt size={24} />
        </FloatingIcon>
        <span className="mt-2 text-white text-sm">Resume</span>
      </a>
    </li>
  </ul>

  <button
    onClick={handleFlip}
    className="mt-8 text-blue-400 underline text-sm hover:text-blue-500 block mx-auto"
  >
    Go Back 🔁
  </button>
</div>

        </div>
      </div>
    </section>
  );
});

export default ContactSection;