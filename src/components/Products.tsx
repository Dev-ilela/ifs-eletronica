import { Card, CardContent } from "@/components/ui/card";
import clpImg from "@/assets/CLPs.jpeg";
import ihmImg from "@/assets/IHM.jpg";
import servoImg from "@/assets/servo-drives.jpg";
import inverterImg from "@/assets/Inversores-de-frequência.jpeg";
import softImg from "@/assets/Softstarters.jpg";
import pcImg from "@/assets/PC-Industrial.jpg";
import placaImg from "@/assets/placas.jpeg";
import fontesImg from "@/assets/Fontes-industriais.png";

const Products = () => {
  const products = [
    {
      title: "CLPs (Controladores Lógicos Programáveis)",
      image: clpImg,
      description: "Equipamentos novos e recondicionados multimarcas"
    },
    {
      title: "IHM (Interface Homem-Máquina)",
      image: ihmImg,
      description: "Painéis de controle e visualização"
    },
    {
      title: "Servo Drives",
      image: servoImg,
      description: "Controladores de motores de alta precisão"
    },
    {
      title: "Inversores de Frequência",
      image: inverterImg,
      description: "Controle de velocidade e torque de motores"
    },
    {
      title: "Soft Starters",
      image: softImg,
      description: "Partida suave para motores elétricos"
    },
    {
      title: "PCs Industriais",
      image: pcImg,
      description: "Computadores robustos para ambientes industriais"
    },
    {
      title: "Placas Eletrônicas Industriais",
      image: placaImg,
      description: "Circuitos especializados para automação"
    },
    {
      title: "Fontes e Controladores",
      image: fontesImg,
      description: "Alimentação e controle de sistemas industriais"
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Produtos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Amplo catálogo de equipamentos industriais novos e recondicionados de marcas reconhecidas mundialmente
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{product.title}</h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
