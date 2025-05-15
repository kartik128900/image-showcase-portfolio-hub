
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Kartik Jain</h3>
              <p className="text-gray-300">Software Engineer</p>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/kartik-jain-b6213-2b900"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/kartik128900"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:kartikjain366@gmail.com"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400 text-sm">
            <p>&copy; {currentYear} Kartik Jain. All rights reserved.</p>
            <p className="mt-2">Pune, Maharashtra, India | kartikjain366@gmail.com | 7297993368</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
