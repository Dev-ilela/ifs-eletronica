import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoOnly from "@/assets/logo-only.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img src={logoOnly} alt="IFS Eletrônica" className="h-14 w-14 rounded-lg" />
            <span className={`text-xl font-bold transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}>
              IFS ELETRÔNICA
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("sobre")} 
              className={`font-medium transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary"}`}
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection("servicos")} 
              className={`font-medium transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary"}`}
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection("produtos")} 
              className={`font-medium transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary"}`}
            >
              Produtos
            </button>
            <button 
              onClick={() => scrollToSection("marcas")} 
              className={`font-medium transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary"}`}
            >
              Marcas
            </button>
            <Button onClick={() => scrollToSection("contato")} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Contato
            </Button>
          </nav>

          <button 
            className={`md:hidden transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className={`md:hidden pb-6 flex flex-col gap-4 ${isScrolled ? "" : "bg-black/80 -mx-4 px-4 pt-4 rounded-b-lg"}`}>
            <button 
              onClick={() => scrollToSection("sobre")} 
              className={`text-left font-medium transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary"}`}
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection("servicos")} 
              className={`text-left font-medium transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary"}`}
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection("produtos")} 
              className={`text-left font-medium transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary"}`}
            >
              Produtos
            </button>
            <button 
              onClick={() => scrollToSection("marcas")} 
              className={`text-left font-medium transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary"}`}
            >
              Marcas
            </button>
            <Button onClick={() => scrollToSection("contato")} className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
              Contato
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
