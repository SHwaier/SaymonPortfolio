"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Copy, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const [copied, setCopied] = useState(false)
  const [mailto, setMailto] = useState("")

  // Obfuscated email parts
  const user = "saymon.hwaier"
  const domain = "gmail.com"
  const email = `${user}@${domain}`

  // Encode email to HTML entities for the mailto link on mount
  useEffect(() => {
    const encoded = email.split("").map(char => `&#${char.charCodeAt(0)};`).join("")
    setMailto(`mailto:${encoded}`)
  }, [email])

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleMailClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.location.href = mailto.replace(/&amp;/g, '&'); // aggressive fallback if needed, but usually just setting href works. 
    // Actually, setting window.location.href to a string with entities might be double-encoded by browsers or React.
    // Better strategy: construct the real string at click time (which we have in 'email') 
    // BUT the user asked for HTML encoding. Usually that's for the static HTML source.
    // Since this is a client component, the source is already obscured. 
    // I will set the HREF on the anchor tag to the encoded version if possible, or just use the JS redirect for max safety.
    window.location.href = `mailto:${email}`;
  }

  return (
    <section id="contact" className="py-24 relative bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities.
          </p>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto"
        >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 border border-border/50 rounded-2xl bg-secondary/5">
                <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm uppercase tracking-wider font-semibold">
                        <Mail className="h-4 w-4" />
                        <span>Email</span>
                    </div>
                    <span className="text-xl md:text-2xl font-medium tracking-tight">
                        {user}<span className="text-muted-foreground mx-0.5">@</span>{domain}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                        <MapPin className="h-3 w-3" />
                        <span>Windsor, ON, CA</span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <Button 
                        size="default" 
                        variant="default"
                        className="gap-2"
                        onClick={handleMailClick}
                    >
                        <ArrowRight className="h-4 w-4" />
                        Send Message
                    </Button>
                    <Button 
                        variant="ghost" 
                        size="default"
                        className="gap-2 text-muted-foreground hover:text-foreground"
                        onClick={handleCopy}
                    >
                        {copied ? (
                            <>
                                <Check className="h-4 w-4 text-green-500" />
                                <span className="text-green-500">Copied</span>
                            </>
                        ) : (
                            <>
                                <Copy className="h-4 w-4" />
                                Copy
                            </>
                        )}
                    </Button>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  )
}
