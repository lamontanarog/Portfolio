"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {projects} from "../projects/page";

const skills = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Material-UI", "Hooks", "Redux", "Context", "Zustand"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Firebase", "Sql Server"],
  },
  { category: "Tools", items: ["Git", "VS Code", "Figma", "Jest", "Vercel", "Scrum", "GitFlow"] },
  {
    category: "Soft Skills",
    items: [
      "Trabajo en equipo",
      "Comunicación",
      "Resolución de problemas",
      "Adaptabilidad",
    ],
  },
];

export default function About() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="relative w-64 h-48">
              <Image
                src="/fotocv.png"
                alt="Profile"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-4">Sobre mí</h1>
              <p className="text-muted-foreground">
                Desarrolladora Frontend con experiencia en React.js, Redux y
                Tailwind CSS. Apasionada por la creación de interfaces
                eficientes y escalables, con habilidades en gestión de estado y
                consumo de APIs REST. Cuento con experiencia en metodologías
                ágiles (Scrum). Busco aportar mis conocimientos en proyectos
                desafiantes y de alto impacto.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Experiencia</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Frontend Developer</h3>
                  <p className="text-muted-foreground">
                    BeCode/Kiura • Sept 2024 - Dic 2024
                  </p>
                  <ul className="mt-2 list-disc list-inside text-muted-foreground">
                    <li>
                      Desarrollo de una plataforma educativa de idiomas
                      utilizando React.js y Redux Toolkit.
                    </li>
                    <li>
                      Creación de componentes reutilizables y personalización de
                      Material UI con ThemeProvider.
                    </li>
                    <li>
                      Configuración de enrutamiento dinámico con React Router
                      DOM.
                    </li>
                    <li>Consumo de APIs REST utilizando Axios.</li>
                    <li>
                      Implementación de GitFlow para mejorar la colaboración en
                      equipo y la revisión de código.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium">
                    Fullstack Developer Traineer
                  </h3>
                  <p className="text-muted-foreground">
                    WaveLab • Dic 2023 - Dic 2024
                  </p>
                  <ul className="mt-2 list-disc list-inside text-muted-foreground">
                    <li>Desarrollo de una aplicación web para la gestión de visitas
                    turísticas en Tucumán.</li>
                     <li>Desarrollo de API con Node.js y
                     Express, garantizando seguridad con Firewalls.</li>
                     <li>Consumo de
                     API REST con Axios y gestión de estado con Context API.</li>
                    <li>Configuración de enrutamiento dinámico con React Router DOM.</li>
                    <li>Personalización de interfaces con Tailwind CSS.</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Proyectos destacados</h2>
              <div className="space-y-4 flex-col ">
                {projects.slice(0,3).map((project) => (
                  <div key={project.title} className="flex items-center gap-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={48}
                      height={48}
                    />
                    <div>
                      <h3 className="text-lg font-medium">{project.title}</h3>
                      <p className="text-muted-foreground">{project.technologies.join(", ")}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Habilidades</h2>
              <div className="space-y-4">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h3 className="text-lg font-medium mb-2">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
