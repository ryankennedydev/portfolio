import FaultyTerminal from "@/components/FaultyTerminal";
import Nav from "./Nav";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Projects = ({ projects }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center w-screen relative min-h-screen bg-stone-950">
      <div className="absolute inset-0">
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

      <main className="flex z-5 gap-5 w-full p-5 justify-center items-center flex-col">
        <div className="w-full">
          <Nav />
        </div>

        <div className="bg-stone-950 w-full  flex flex-col gap-5">
          <main>
            {projects.map((project) => (
              <div className="border-1 border-stone-500/30 group cursor-pointer hover:border-[#86efac]">
                <div className="p-7">
                  <a
                    href={project.link}
                    className="flex gap-3 flex-col cursor-default"
                  >
                    <div className="flex gap-5 flex-col ">
                      <h1 className="group-hover:text-[#86efac] text-[20px] text-stone-100 cursor-pointer font-bold">
                        {project.name}
                      </h1>
                      <h1 className="font-serif text-stone-500">{project.description}</h1>
                      <h1 className="font-serif text-stone-500">* {project.language}</h1>
                    </div>
                    
                  </a>
                </div>
              </div>
            ))}
          </main>
        </div>
      </main>
    </div>
  );
};

export default Projects;
