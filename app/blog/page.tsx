"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    title: 'Optimizando el rendimiento en Next.js',
    excerpt: 'Aprende las mejores prácticas para optimizar el rendimiento de tus aplicaciones Next.js.',
    date: '2024-02-20',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
    tags: ['Next.js', 'Performance', 'Web Development']
  },
  {
    title: 'Introducción a TypeScript',
    excerpt: 'Una guía completa para comenzar con TypeScript en tus proyectos de React.',
    date: '2024-02-15',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
    tags: ['TypeScript', 'React', 'JavaScript']
  }
]

export default function Blog() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-8">Blog</h1>
          <div className="space-y-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="md:flex">
                    <div className="relative w-full md:w-48 h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                      <Link href="#" className="group">
                        <h2 className="text-xl font-semibold mb-2 group-hover:text-primary">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
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