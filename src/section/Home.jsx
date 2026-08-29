import FaultyTerminal from "@/components/FaultyTerminal";
import Nav from "./Nav";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BsGithub,BsEnvelope,BsDiscord,BsLinkedin,BsX, BsXCircle, BsTwitter, BsTwitterX } from 'react-icons/bs'
import DecryptedText from "@/components/DecryptedText";
const Teste = ({ projects }) => {
  const navigate = useNavigate();
  const Icons = [
          {
              "icone": <BsGithub />,"link": "https://github.com/ryankennedydev"
          },
          {
              "icone": <BsEnvelope />,"link": "https://github.com/ryankennedydev"
          },
          {
              "icone": <BsDiscord />,"link": "https://github.com/ryankennedydev"
          },
          {
              "icone": <BsLinkedin />,"link": "https://github.com/ryankennedydev"
          }
          ,
          {
              "icone": <BsTwitterX />,"link": "https://github.com/ryankennedydev"
          }
      ]
  return (
    <div className="flex justify-center w-screen relative min-h-screen">
      <div className="absolute inset-0 ">
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={0.5}
          pause={false}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.1}
          tint="#86efac"
          mouseReact
          mouseStrength={0.5}
          pageLoadAnimation
          brightness={0.6}
        />
      </div>
      <main className="flex z-5 gap-5 w-full p-5 justify-center items-center flex-col justify-center ">
        <div className="w-full">
          <Nav />
        </div>
        <div className="bg-stone-950 w-full p-7 flex  flex-col gap-5">
          <main className="flex text-stone-300 flex-col gap-5">
            <div>
                            <DecryptedText
                            text="About"
                            speed={70}
                            maxIterations={10}
                            characters="01#$%&@!?<>/"
                            revealDirection="start"
                            parentClassName="all-letters font-bold text-[30px] text-[#86efac]"
                            encryptedClassName="encrypted"
                            className="font-bold text-[30px] text-[#86efac]"
                            
                          />
                        </div>

            <div className="flex flex-col gap-4 leading-relaxed font-serif">
              <p>
                I'm Ryan Kennedy, a Computer Science student and developer based
                in Brazil.
              </p>

              <p>
                I enjoy building modern interfaces, web applications, and
                digital experiences using technologies like Python, JavaScript,
                React, and Node.js.
              </p>

              <p>Always learning, building and turning ideas into projects.</p>

              <div className="flex justify-between  items-center">
                <div className="flex items-center gap-1 group cursor-pointer">
                  <a href="https://github.com/ryankennedydev" className="">
                <p className="text-[#86efac]  group-hover:text-[#86efac]/50">
                  Open to work
                </p>
                </a>
                <ArrowRight className="text-[#86efac]  group-hover:text-[#86efac]/50 group-hover:translate-x-1"  size={15} />
                </div>
                <div className="flex gap-3 text-[#86efac] sm:hidden ">
                  {Icons.map((Icon) => (
                      <a href={Icon.link}>
                        {Icon.icone}
                      </a>
                  ))}
                </div>
              </div>
            </div>
          </main>

          <main className="flex text-stone-300 flex-col gap-5">
            <div className="flex justify-between items-center">
              <div>
                            <DecryptedText
                            text="Projects"
                            speed={70}
                            maxIterations={10}
                            characters="01#$%&@!?<>/"
                            revealDirection="start"
                            parentClassName="all-letters font-bold text-[30px] text-[#86efac]"
                            encryptedClassName="encrypted"
                            className="font-bold text-[30px] text-[#86efac]"
                            
                          />
                        </div>
              <button
                onClick={() => navigate("/projects")}
                className="flex items-center text-stone-500 hover:text-[#86efac] cursor-pointer gap-1"
              >
                <h1>view projects</h1>
                <ArrowRight size={15} />
              </button>
            </div>
            <div>
              <main className="flex flex-col gap-10">
                {projects.map((project) => (
                  <a
                    href={project.link}
                    className="flex gap-3 flex-col cursor-default"
                  >
                    <div className="flex justify-between gap-3 items-center">
                      <h1 className="hover:text-[#86efac] text-[20px] cursor-pointer font-bold">
                        {project.name}
                      </h1>
                      <h1 className="font-serif">{project.language}</h1>
                    </div>
                    <div>
                      <h1 className="font-serif">{project.description}</h1>
                    </div>
                  </a>
                ))}
              </main>
            </div>
            <div></div>
          </main>
        </div>
      </main>
    </div>
  );
};

export default Teste;
