import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h2>
          <p className="text-xl text-secondary-foreground/80 max-w-3xl mx-auto">
            Estamos prontos para atender suas necessidades em eletrônica industrial
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-secondary-foreground/5 border-2 border-secondary-foreground/10">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-secondary-foreground">Telefone</h3>
                  <a href="tel:+5513981500330" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                    (13) 98150-0330
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-secondary-foreground">E-mail</h3>
                  <a href="mailto:ifs1.eletronica@gmail.com" className="text-secondary-foreground/80 hover:text-primary transition-colors break-all">
                    ifs1.eletronica@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-secondary-foreground">Endereço</h3>
                  <p className="text-secondary-foreground/80">
                    Rua Francisco Rebelo, 303<br />
                    São Paulo - SP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-secondary-foreground">Horário de Atendimento</h3>
                  <p className="text-secondary-foreground/80">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-center space-y-6">
            <Card className="bg-primary text-primary-foreground border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Solicite um Orçamento</h3>
                <p className="mb-6 text-primary-foreground/90">
                  Entre em contato conosco para receber uma avaliação gratuita e sem compromisso do seu equipamento.
                </p>
                <div className="space-y-3">
                  <Button 
                    size="lg" 
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    onClick={() => window.location.href = 'mailto:ifs1.eletronica@gmail.com'}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Enviar E-mail
                  </Button>
                  <Button 
                    size="lg" 
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    onClick={() => window.location.href = 'https://wa.me/5513981500330'}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary-foreground/5 border-2 border-secondary-foreground/10">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-3 text-secondary-foreground">Visite Nosso Site</h3>
                <a 
                  href="http://www.ifseletronica.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-lg font-medium"
                >
                  www.ifseletronica.com.br
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
