"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'

export const projects = [
  {
    title: 'Gestor de pruebas tecnicas',
    description: 'Pequña aplicación basada en gestión de pruebas tecnicas.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=400&fit=crop',
    technologies: ['React', 'MONGO Atlas-Mongoose', 'Node.js-express', 'Material-UI','AXIOS','Vercel', 'Git'],
    github: 'https://github.com/lamontanarog/pruebaTecnica',
    demo: 'https://prueba-tecnica-seven-rho.vercel.app/'
  },
  {
    title: 'Gestor de gastos',
    description: 'Aplicación de gestión de gastos.',
    image: 'https://portafolio-lamontanaro-giuliana.vercel.app/icons/iconoControlDegastos.webp',
    technologies: ['React', 'Firebase', 'Context', 'FireBase', 'Vercel', 'Git'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Vintage Golden Show',
    description: 'Sitio web de venta de productos con carrito de compras, busqueda, filtros y consumo de API.',
    image: 'https://portafolio-lamontanaro-giuliana.vercel.app/icons/iconoVintage.webp',
    technologies: ['Javascript', 'React.js', 'Bootstrap', 'Fetch', 'FireBase', 'netlify'],
    github: 'hhttps://github.com/lamontanarog/Lamontanaro-vintage-golden-show',
    demo: 'https://lamontanaro-vintage-golden-show-xmxc.vercel.app/'
  }
  ,
  {
    title: 'Splendora Cosmetics',
    description: 'Plataforma de comercio electrónico moderna con carrito de compras y consumo de API para conversion de moneda.',
    image: 'https://portafolio-lamontanaro-giuliana.vercel.app/icons/IconSplendora.webp',
    technologies: ['Javascript', 'Bootstrap', 'Fetch', 'gitHub pages'],
    github: 'https://github.com/lamontanarog/SplendoraCosmetics',
    demo: 'https://lamontanarog.github.io/SplendoraCosmetics/'
  },
  {
    title: 'Podiatry Love',
    description: 'Sitio web informativo de podiatría con sección de blog y formulario de contacto.',
    image: 'https://portafolio-lamontanaro-giuliana.vercel.app/icons/logoPodiatryLove.webp',
    technologies: ['HTML', 'CSS', 'BOOTSTRAP', 'SCSS','Git','Github Pages'],
    github: 'https://github.com/lamontanarog/PodiatryLove',
    demo: 'https://lamontanarog.github.io/PodiatryLove/'
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-8">Proyectos</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="relative w-full h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Código
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}