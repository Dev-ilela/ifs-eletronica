const Brands = () => {
  const brands = [
    "ABB",
    "Rockwell Automation",
    "Allen-Bradley",
    "FANUC",
    "Lenze",
    "OMRON",
    "Schneider Electric",
    "SIEMENS",
    "Delta",
    "WEG",
    "Mitsubishi Electric"
  ];

  return (
    <section id="marcas" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Marcas Parceiras</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trabalhamos com as principais marcas de automação industrial do mercado global
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="bg-background rounded-lg p-8 flex items-center justify-center hover:shadow-lg transition-shadow duration-300 border-2 border-transparent hover:border-primary"
            >
              <h3 className="text-xl font-bold text-foreground text-center">{brand}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">E muitas outras marcas de renome internacional</p>
        </div>
      </div>
    </section>
  );
};

export default Brands;
