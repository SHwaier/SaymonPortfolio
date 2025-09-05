import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { LinkPreview } from "./ui/link-preview"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">S</span>
              </div>
              <span className="font-serif text-xl font-bold">Saymon Hwaier</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Love creating solutions that bring value and happiness to users. Let's build something amazing together!
            </p>
          </div>
          <div></div>
          <div></div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/resume" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Resume
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/80">© 2025 Saymon Hwaier.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <LinkPreview url="https://github.com/SHwaier" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Github className="h-5 w-5" />
            </LinkPreview>
            <LinkPreview url="https://www.linkedin.com/in/saymon-hwaier/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </LinkPreview>
            <a href="mailto:saymon.hwaier@gmail.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
