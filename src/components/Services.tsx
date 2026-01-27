import { Wrench, Shield, Zap, PenTool, Truck, TrendingDown, Clock } from "lucide-react";
import repairImg from "@/assets/repair-service.jpg";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Reparo de Equipamentos",
      description: "CLPs, IHMs, inversores, servo drives e mais"
    },
    {
      icon: Shield,
      title: "Manutenção Preventiva",
      description: "Cuidados regulares para equipamentos industriais"
    },
    {
      icon: Zap,
      title: "Orçamento Sem Compromisso",
      description: "Análise e avaliação gratuita"
    },
    {
      icon: PenTool,
      title: "Projetos Elétricos",
      description: "Desenvolvimento de soluções eletrônicas"
    },
    {
      icon: Truck,
      title: "Coleta e Entrega",
      description: "Logística sem custo adicional"
    },
    {
      icon: TrendingDown,
      title: "Economia de até 70%",
      description: "Comparado a equipamentos novos"
    },
    {
      icon: Clock,
      title: "Empréstimo de Equipamentos",
      description: "Disponível sob consulta"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Serviços Especializados</h2>
          <p className="text-xl text-secondary-foreground/80 max-w-3xl mx-auto">
            Oferecemos soluções completas em eletrônica industrial com foco em qualidade, rapidez e custo-benefício
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={index} className="flex gap-4 items-start bg-secondary-foreground/5 p-4 rounded-lg hover:bg-secondary-foreground/10 transition-colors">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
                  <p className="text-secondary-foreground/70">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <img src={repairImg} alt="Serviço de Reparo" className="rounded-lg shadow-2xl w-full" />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
              <p className="text-4xl font-bold">+4</p>
              <p className="text-sm">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
