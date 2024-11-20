import Button from "@components/Button";
import SkillBox from "@components/SkillBox";
import ProjectCard from "@components/ProjectCard";
import ContactForm from "@components/ContactForm";
import Template from "@layouts/home/Template";
import heroImg from "@assets/img/hero-img.png";
import { SKILL_IMG, PROJECT_DATA } from "@static/constant";
import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const [status, setStatus] = useState("typing");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef<HTMLFormElement>(null);

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_GMAIL_SERVICE_KEY,
          import.meta.env.VITE_GMAIL_TEMPLATE_KEY,
          form.current,
          import.meta.env.VITE_GMAIL_PUBLIC_KEY
        )
        .then(
          (result) => {
            setStatus(result.text);
            setUsername("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            setStatus(error.text);
          }
        );
    }
  };

  return (
    <Template>
      <section id="home" className="scroll-mt-32 bg-hero-mobile lg:bg-hero-pattern bg-cover pt-32 template-home-style">
        <div className="lg:flex lg:items-center lg:justify-between w-full">
          <div className="lg:w-1/2">
            <span className="font-semibold text-orange text-xl mb-2 block">Hello, there, I am</span>
            <h1 className="text-3xl font-bold text-blue mb-1">Tubagus Dylan Rachmat</h1>
            <h2 className="font-semibold text-lg text-grey mb-5">IoT Engineer</h2>
            <p className="lg:text-lg">
              Fresh graduate in Electrical Engineering. Have a high enthusiastem in Internet of Things world. If you
              want to know me more, click the button below!
            </p>
            <Button href="#contact">Get in touch</Button>
          </div>
          <div className="lg:w-1/2">
            <img src={heroImg} alt="hero-img" className="mx-auto mt-10 shadow-2xl w-[300px] xl:w-[400px]" />
          </div>
        </div>
      </section>
      <section id="about" className="scroll-mt-28 template-home-style">
        <span className="block w-12 bg-orange h-[4px] rounded-lg mb-2 mx-auto"></span>
        <h1 className="text-2xl font-semibold text-blue mb-5 text-center">About Me</h1>
        <div className="w-full lg:flex lg:items-start lg:justify-between xl:gap-20 lg:gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-lg lg:text-xl font-semibold mb-2 text-orange">Backround</h2>
            <p className="text-grey lg:text-lg mb-3">
              Hello there! I am passionate about the dynamic world of technology, with a particular focus on web
              development and the exciting realm of the Internet of Things (IoT). Why am I interested in these two
              fields?
            </p>
            <p className="text-grey lg:text-lg">
              In the world of electrical engineering, I am often faced with collecting data from sensors and displaying
              it in a web or mobile application. However, the available platforms have limited visualization styles and
              are difficult to set up, so I also studied web knowledge to achieve my wish.
            </p>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-lg lg:text-xl font-semibold mb-2 text-orange mt-4 lg:mt-0">My Skills</h2>
            <h3 className="font-semibold text-grey mb-3">Hardware Skills</h3>
            <div className="w-full flex flex-wrap items-center gap-5 mb-6">
              {SKILL_IMG.filter((item) => item.category === "hardware").map((item, index) => (
                <SkillBox key={index} src={item.src}>
                  {item.text}
                </SkillBox>
              ))}
            </div>
            <h3 className="font-semibold text-grey mb-3">Programming Skills</h3>
            <div className="w-full flex flex-wrap items-center gap-5 mb-6">
              {SKILL_IMG.filter((item) => item.category === "programming").map((item, index) => (
                <SkillBox key={index} src={item.src}>
                  {item.text}
                </SkillBox>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="project" className="scroll-mt-28 template-home-style bg-slate-200 pt-20 rounded-t-[60px]">
        <span className="block w-12 bg-orange h-[4px] rounded-lg mb-2 mx-auto"></span>
        <h1 className="text-2xl font-semibold text-blue mb-5 text-center">Recent Projects</h1>
        <div className="w-full lg:flex lg:flex-wrap lg:items-start lg:justify-center lg:gap-10">
          {PROJECT_DATA.map((item, index) => (
            <ProjectCard key={index} title={item.title} src={item.src} href={item.href || "#"}>
              {item.description}
            </ProjectCard>
          ))}
        </div>
      </section>
      <section id="contact" className="scroll-mt-28 template-home-style bg-white -mt-10 pt-20 rounded-t-[60px]">
        <span className="block w-12 bg-orange h-[4px] rounded-lg mb-2 mx-auto"></span>
        <h1 className="text-2xl font-semibold text-blue mb-5 text-center">Contact</h1>
        <div className="w-full xl:w-1/2 xl:mx-auto">
          <ContactForm
            submit={handleSubmitForm}
            refForm={form}
            username={username}
            email={email}
            message={message}
            status={status}
            onNameChange={(e) => setUsername(e.target.value)}
            onEmailChange={(e) => setEmail(e.target.value)}
            onMessageChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </section>
    </Template>
  );
}

export default App;
