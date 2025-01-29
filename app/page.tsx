"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Giuliana Lamontanaro
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Creando experiencias web modernas y accesibles con React.Js.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/projects">
                <Button>
                  Ver proyectos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Contacto</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}