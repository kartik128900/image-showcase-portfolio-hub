
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <a href="#" className="text-2xl font-heading font-bold text-portfolio-dark">
            Kartik<span className="text-portfolio-primary">Jain</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-600 hover:text-portfolio-primary font-medium transition-colors">About</a>
          <a href="#experience" className="text-gray-600 hover:text-portfolio-primary font-medium transition-colors">Experience</a>
          <a href="#skills" className="text-gray-600 hover:text-portfolio-primary font-medium transition-colors">Skills</a>
          <a href="#education" className="text-gray-600 hover:text-portfolio-primary font-medium transition-colors">Education</a>
          <a href="#projects" className="text-gray-600 hover:text-portfolio-primary font-medium transition-colors">Projects</a>
          <a href="#certifications" className="text-gray-600 hover:text-portfolio-primary font-medium transition-colors">Certifications</a>
        </nav>

        <Button className="hidden md:flex bg-portfolio-primary hover:bg-portfolio-secondary">
          <a href="mailto:kartikjain366@gmail.com">Contact Me</a>
        </Button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle Menu">
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <a href="#about" className="text-gray-600 hover:text-portfolio-primary font-medium transition-colors" onClick={toggleMobileMenu}>About</a>
            <a href="#experience" className="text-gray-600 hover:text-portfolio-primary font-medium transition-colors" onClick={toggleMobileMenu}>Experience</a>
            <a href="#skills" className="text-gray-600 hover:text-portfolio-primary font-medium transition-colors" onClick={toggleMobileMenu}>Skills</a>
            <a href="#education" className="text-gray-600 hover:text-portfolio-primary font-medium transition-colors" onClick={toggleMobileMenu}>Education</a>
            <a href="#projects" className="text-gray-600 hover:text-portfolio-primary font-medium transition-colors" onClick={toggleMobileMenu}>Projects</a>
            <a href="#certifications" className="text-gray-600 hover:text-portfolio-primary font-medium transition-colors" onClick={toggleMobileMenu}>Certifications</a>
            <Button className="bg-portfolio-primary hover:bg-portfolio-secondary w-full">
              <a href="mailto:kartikjain366@gmail.com">Contact Me</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
