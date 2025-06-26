import { ContactForm } from "../../organism";

const Contact = () => {
  return (
    <div className="w-full mt-14 relative">
      <div
        className="w-full h-[1000px] bg-[#28394B]"
        style={{
          clipPath:
            "polygon(0% 0%, 35% 0%, 40% 15%, 60% 15%, 65% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <div className="translate-y-1/3 mx-auto w-[70%] px-10">
          <ContactForm />
        </div>
      </div>
      <div className="absolute top-10 w-full text-center">
        <h1 className="text-white font-extrabold text-5xl font-titillium tracking-wider leading-tight">
          Contact Us
        </h1>
      </div>
    </div>
  );
};

export default Contact;
