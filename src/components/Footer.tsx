import logoOnly from "@/assets/logo-only.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 border-t border-secondary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={logoOnly} alt="IFS Eletrônica" className="h-14 w-14 rounded-lg" />
            <span className="text-xl font-bold text-secondary-foreground">
              IFS ELETRÔNICA
            </span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-secondary-foreground/70">
              © {new Date().getFullYear()} IFS Eletrônica. Todos os direitos reservados.
            </p>
            <p className="text-xs text-secondary-foreground/60 mt-1">
              CNPJ: Consulte-nos para mais informações
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
