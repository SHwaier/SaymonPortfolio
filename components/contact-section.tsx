import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Let's Work Together</h2>
        </div>
        <div className="grid gap-12 max-w-4xl mx-auto">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
              <CardDescription>I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to life.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground">saymon.hwaier@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground">Windsor, ON, CA</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
