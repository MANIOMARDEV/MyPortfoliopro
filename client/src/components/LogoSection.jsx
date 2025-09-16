import { logoIconsList } from "../constants";

const LogoIcon = ({ icon: Icon, label }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <Icon size={40} className="text-blue-500" />
      <p className="text-sm mt-2">{label}</p>
    </div>
  );
};

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} {...icon} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} {...icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;