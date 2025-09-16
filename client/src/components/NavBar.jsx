import { useState, useEffect, useRef } from "react"; // ✅ import useRef
import { navLinks } from "../constants";
import ContactSection from "../sections/ContactSection";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const contactRef = useRef(null); // ✅ add ref to point to contact section

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    setShowContact((prev) => {
      const newVal = !prev;

      // Scroll to ContactSection only after it's visible
      setTimeout(() => {
        if (newVal && contactRef.current) {
          contactRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // slight delay so ContactSection loads first

      return newVal;
    });
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
        <div className="inner">
          <a href="#hero" className="logo">
            Mani Omar
          </a>
          <nav className="desktop">
            <ul>
              {navLinks.map(({ link, name }) => (
                <li key={name} className="group">
                  <a href={link}>
                    <span>{name}</span>
                    <span className="underline" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="#contact"
            className="contact-btn group"
            onClick={handleContactClick}
          >
            <div className="inner">
              <span>{showContact ? "Close Contact" : "Contact Me"}</span>
            </div>
          </a>
        </div>
      </header>

      {showContact && <ContactSection ref={contactRef} />} {/* ✅ pass the ref */}
    </>
  );
};

export default NavBar;
