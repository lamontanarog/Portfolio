"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Linkedin, Mail, MessageSquare, Phone } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    const { email, name, message } = values;
    const subject = encodeURIComponent(`Nuevo mensaje de ${name}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:giulianalamontanaro@gmail.com?subject=${subject}&body=${body}`
    form.reset()
  }

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-8">Contacto</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-6">Información de contacto</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-foreground">
                      giulianalamontanaro@gmail.com
                    </a>
                  </div>
                  {/* <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <span className="text-muted-foreground">+34 123 456 789</span>
                  </div> */}
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-muted-foreground" />
                    <a href="https://www.linkedin.com/in/giuliana-lamontanaro-432a2a223/" className="text-muted-foreground hover:text-foreground">LinkedIn</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-muted-foreground" />
                    <span className="text-muted-foreground">Disponible para nuevos proyectos</span>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="tu@email.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tu mensaje..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    Enviar mensaje
                  </Button>
                </form>
              </Form>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}