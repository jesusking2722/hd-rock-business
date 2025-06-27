import { Link } from "react-router";
import { Button, Input, TextArea } from "../../common";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [success, setSuccess] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const form = useRef<any>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);

    // Create template parameters that match your EmailJS template
    const templateParams = {
      title: "New Contact Form Submission",
      name: `${firstname} ${lastname}`,
      email: email,
      message: message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_qkatpem",
        "template_ve9tlre",
        templateParams,
        "6TszNiR5tE4jag6bZ"
      )
      .then(
        (result) => {
          setLoading(false);
          setSuccess(true);
          setFirstname("");
          setLastname("");
          setEmail("");
          setMessage("");

          // Hide success message after 10 seconds
          setTimeout(() => {
            setSuccess(null);
          }, 10000);
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          setSuccess(false);

          // Hide error message after 10 seconds
          setTimeout(() => {
            setSuccess(null);
          }, 10000);
        }
      );
  };

  return (
    <div className="w-full bg-[#364C62] lg:rounded-2xl xl:rounded-2xl rounded-lg lg:p-8 xl:p-8 p-4">
      <div className="w-full lg:flex xl:flex">
        <div className="lg:w-1/2 xl:w-1/2 w-full flex flex-col items-start justify-between lg:gap-0 xl:gap-0 gap-6">
          <div className="space-y-4">
            <h1 className="text-white font-extrabold lg:text-5xl xl:text-5xl text-[32px] font-titillium tracking-wider leading-tight">
              Get In Touch
            </h1>
            <p className="text-[#F2F2F2] lg:text-2xl xl:text-2xl text-lg font-normal">
              Please fill the form and will be happy assist you
            </p>
          </div>
          <div className="w-full space-y-4">
            <div className="w-full flex flex-row items-center gap-4">
              <img src="/assets/svgs/user.svg" alt="User" className="w-6 h-6" />
              <span className="text-xl font-light text-white">
                Łukasz Szymborski (CEO)
              </span>
            </div>
            <div className="w-full flex flex-row items-center gap-4">
              <span className="text-xl text-white font-bold font-titillium">
                Social:
              </span>
              <ul className="w-full flex items-center gap-2">
                <li className="transition-all duration-200 hover:scale-105">
                  <Link to="#" className="cursor-pointer ">
                    <img
                      src="/assets/svgs/facebook.svg"
                      alt="Facebook"
                      className="w-7 h-7"
                    />
                  </Link>
                </li>
                <li className="transition-all duration-200 hover:scale-105">
                  <Link to="#" className="cursor-pointer ">
                    <img
                      src="/assets/svgs/discord.svg"
                      alt="Discord"
                      className="w-7 h-7"
                    />
                  </Link>
                </li>
                <li className="transition-all duration-200 hover:scale-105">
                  <Link to="#" className="cursor-pointer ">
                    <img
                      src="/assets/svgs/twitter.svg"
                      alt="Twitter"
                      className="w-7 h-7"
                    />
                  </Link>
                </li>
                <li className="transition-all duration-200 hover:scale-105">
                  <Link to="#" className="cursor-pointer ">
                    <img
                      src="/assets/svgs/telegram.svg"
                      alt="Telegram"
                      className="w-7 h-7"
                    />
                  </Link>
                </li>
                <li className="transition-all duration-200 hover:scale-105">
                  <Link to="#" className="cursor-pointer ">
                    <img
                      src="/assets/svgs/youtube.svg"
                      alt="Youtube"
                      className="w-7 h-7"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 xl:w-1/2 w-full bg-[#324659] lg:p-6 xl:p-6 p-4 lg:mt-0 xl:mt-0 mt-6 rounded-2xl">
          <form ref={form} className="w-full space-y-4" onSubmit={sendEmail}>
            <div className="w-full flex flex-row items-center gap-4">
              <div className="w-1/2">
                <Input
                  type="text"
                  placeholder="First name"
                  value={firstname}
                  onChange={setFirstname}
                />
              </div>
              <div className="w-1/2">
                <Input
                  type="text"
                  placeholder="Last name"
                  value={lastname}
                  onChange={setLastname}
                />
              </div>
            </div>
            <div className="w-full">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={setEmail}
              />
            </div>

            <div className="w-full">
              <TextArea
                placeholder="Message"
                value={message}
                onChange={setMessage}
              />
            </div>
            {typeof success === "boolean" && (
              <div className="w-full">
                {success ? (
                  <p className="text-green-500 text-sm">
                    Message sent successfully, we will keep in touch with you
                    very soon.
                  </p>
                ) : (
                  <p className="text-red-500 text-sm">
                    Something went wrong, please reload the page and resubmit.
                  </p>
                )}
              </div>
            )}
            <div className="w-full flex items-center justify-end">
              <Button
                type="primary"
                label="Submit"
                submit={true}
                loading={loading}
              />
            </div>
          </form>
        </div>
      </div>

      <div className="w-full xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 flex flex-col gap-6 mt-8">
        <div className="bg-[#324659] rounded-xl flex flex-col gap-4 p-8">
          <div className="flex items-center gap-2">
            <img src="/assets/svgs/email.svg" alt="Email" className="w-7 h-7" />
            <span className="text-white font-titillium text-xl font-bold">
              Email Us
            </span>
          </div>
          <span className="text-white font-light">lukasz@frolandstein.no</span>
        </div>
        <div className="bg-[#324659] rounded-xl flex flex-col gap-4 p-8">
          <div className="flex items-center gap-2">
            <img src="/assets/svgs/phone.svg" alt="Phone" className="w-7 h-7" />
            <span className="text-white font-titillium text-xl font-bold">
              Call Us
            </span>
          </div>
          <span className="text-white font-light">+48 504 412 991</span>
        </div>
        <div className="bg-[#324659] rounded-xl flex flex-col gap-4 p-8">
          <div className="flex items-center gap-2">
            <img
              src="/assets/svgs/marker.svg"
              alt="Marker"
              className="w-7 h-7"
            />
            <span className="text-white font-titillium text-xl font-bold">
              Our location
            </span>
          </div>
          <span className="text-white font-light">Vestre Dale, Norway</span>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
