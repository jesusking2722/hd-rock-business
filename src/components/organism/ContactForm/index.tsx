import { Link } from "react-router";
import { Button, Input, TextArea } from "../../common";
import { useState } from "react";

const ContactForm = () => {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <div className="w-full bg-[#364C62] rounded-2xl p-8">
      <div className="w-full flex">
        <div className="w-1/2 flex flex-col items-start justify-between">
          <div className="space-y-4">
            <h1 className="text-white font-extrabold text-5xl font-titillium tracking-wider leading-tight">
              Get In Touch
            </h1>
            <p className="text-[#F2F2F2] text-2xl font-normal">
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

        <div className="w-1/2 bg-[#324659] p-6 rounded-2xl">
          <form className="w-full space-y-4">
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
            <div className="w-full flex items-center justify-end">
              <Button type="primary" label="Submit" />
            </div>
          </form>
        </div>
      </div>

      <div className="w-full grid grid-cols-3 gap-6 mt-8">
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
