"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Copy, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

import { Card, CardContent } from "@/components/ui/card"
import { useAnalytics } from "@/components/analytics-provider"

export function ContactSection() {
  const [copied, setCopied] = useState(false)
  const [mailto, setMailto] = useState("")

  const { trackEvent } = useAnalytics()

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
    trackEvent('contact_copy_email')
    setTimeout(() => setCopied(false), 2000)
  }

  const handleMailClick = (e: React.MouseEvent) => {
    e.preventDefault()
    trackEvent('contact_click_mailto')
    window.location.href = mailto.replace(/&amp;/g, '&');
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
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-secondary/5 border-border/50 backdrop-blur-sm">
              <CardContent className="flex flex-col md:flex-row items-center justify-between gap-8 p-8">
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
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
