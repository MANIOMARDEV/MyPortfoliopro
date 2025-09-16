import { useEffect, useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import gsap from "gsap";

const ResumeSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const resumeRef = useRef(null);
    const headingRef = useRef(null);

  const toggleResume = () => setIsOpen(!isOpen);

  const fileId = "14WsiSbURovICbfCSbsyEwBoViXDROLTl";
  const previewLink = `https://drive.google.com/file/d/${fileId}/preview`;
  const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;

  useEffect(() => {
    if (isOpen && resumeRef.current) {
      gsap.fromTo(
        resumeRef.current,
        { opacity: 0, y: 50, rotateX: -5 },
        { opacity: 1, y: 0, rotateX: 0, duration: 1.2, ease: "power3.out" }
      );
    }
  }, [isOpen]);

  return (
  <section id="resume" className="flex flex-col items-center py-16 px-6 text-white">
  {/* Resume Heading */}
  <div ref={headingRef} className="text-center mb-4">
    <h1 className="font-semibold md:text-5xl text-3xl text-center">
      My Resume
    </h1>
  </div>

  {/* Centered Toggle Button */}
  <button
    onClick={toggleResume}
    className="group relative mb-10 px-6 py-3 font-semibold text-white rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg shadow-blue-500/20 hover:shadow-purple-600/40 transition-all duration-300 ease-in-out overflow-hidden hover:scale-[1.03]"
  >
    <span className="relative z-10">
      {isOpen ? "Hide Resume" : "Show Resume"}
    </span>
    <span
      className="absolute inset-0 z-0 blur-xl opacity-30 group-hover:opacity-80 transition-opacity duration-300"
      style={{
        background: "radial-gradient(circle at center, #00f0ff, #8000ff)",
      }}
    ></span>
  </button>

  {/* Resume Preview */}
  {isOpen && (
  <div
    ref={resumeRef}
    className="w-full flex flex-col items-center justify-center px-4 md:px-16"
  >
    {/* Hover effect only on the wrapper */}
    <div className="w-full md:w-4/5 rounded-xl overflow-hidden shadow-xl border border-white/10 bg-white transition-all duration-300">
      <iframe
        src={previewLink}
        title="Mani's Resume"
        allow="autoplay"
        className="w-full h-[75vh] rounded-xl"
      />
    </div>

    {/* Download Button */}
    <a
      href={downloadLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group my-6 px-6 py-3 font-semibold text-white rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg shadow-blue-500/20 hover:shadow-purple-600/40 transition-all duration-300 ease-in-out overflow-hidden hover:scale-[1.03]"
    >
      <span className="relative z-10">⬇️ Download</span>
    </a>

    <p className="text-sm text-gray-400 text-center mb-10">
      If the preview doesn't load,{" "}
      <a
        href={downloadLink}
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-400"
      >
        click here to download the resume.
      </a>
    </p>
  </div>
)}

</section>

  );
};

export default ResumeSection;
