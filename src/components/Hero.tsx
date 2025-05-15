
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
            Kartik Jain
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Software Engineer with a passion for building innovative software products
          </p>
          <p className="text-lg text-gray-600 mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Pune, Maharashtra, India
          </p>
          <div className="flex justify-center space-x-4 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button variant="outline" size="icon" asChild>
              <a href="https://www.linkedin.com/in/kartik-jain-b6213-2b900" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/kartik128900" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:kartikjain366@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button className="bg-portfolio-primary hover:bg-portfolio-secondary">
              <a href="#projects">View My Projects</a>
            </Button>
            <Button variant="outline">
              <a href="#experience">My Experience</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
