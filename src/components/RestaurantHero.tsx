import { Button } from "@/components/ui/button";
import heroImage from "@/assets/restaurant-hero.jpg";

const RestaurantHero = () => {
  const scrollToReservation = () => {
    document.getElementById('reservation')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Little Lemon
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
            Authentic Mediterranean Cuisine
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Experience the fresh flavors of the Mediterranean with our carefully crafted dishes, 
            made from the finest ingredients and traditional recipes passed down through generations.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToReservation}
            size="lg"
            className="bg-gradient-hero hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 font-semibold"
          >
            Reserve Your Table
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary-foreground text-lg px-8 py-6 font-semibold"
          >
            View Menu
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantHero;