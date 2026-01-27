import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Quem Somos</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Fundada em 2020 em São Paulo/SP, a IFS Eletrônica é especializada em análise, reparo e manutenção de equipamentos industriais multimarcas. 
            Oferecemos reparos, projetos, peças de reposição e manutenção preventiva, com foco em eficiência, segurança e qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 hover:border-primary transition-colors duration-300">
            <CardContent className="pt-8 pb-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Prover soluções técnicas ágeis e seguras, contribuindo para o desempenho e competitividade das indústrias brasileiras.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors duration-300">
            <CardContent className="pt-8 pb-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser referência nacional em eletrônica industrial, destacando-se pela inovação e excelência técnica.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors duration-300">
            <CardContent className="pt-8 pb-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Valores</h3>
              <p className="text-muted-foreground leading-relaxed">
                Valorizamos nossos colaboradores e clientes, buscando crescimento mútuo e relações duradouras.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
