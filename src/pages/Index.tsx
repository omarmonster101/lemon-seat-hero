import RestaurantHero from "@/components/RestaurantHero";
import UserPersona from "@/components/UserPersona";
import UserJourneyMap from "@/components/UserJourneyMap";
import Wireframes from "@/components/Wireframes";
import ReservationForm from "@/components/ReservationForm";

const Index = () => {
  return (
    <main className="min-h-screen">
      <RestaurantHero />
      
      {/* UX Design Process Documentation */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">
            UX Design Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our reservation system was built with a comprehensive UX design approach, 
            starting with user research and iterating through wireframes to create 
            an intuitive booking experience.
          </p>
        </div>
        
        <UserPersona />
        <UserJourneyMap />
        <Wireframes />
      </section>

      {/* Functional Reservation System */}
      <section id="reservation" className="py-16">
        <ReservationForm />
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-display font-bold mb-4">Little Lemon</h3>
          <p className="text-background/80 mb-6">
            123 Mediterranean Ave, City Center<br />
            Phone: (555) 123-LEMON | Email: reservations@littlelemon.com
          </p>
          <div className="flex justify-center space-x-6 text-sm text-background/60">
            <span>© 2024 Little Lemon Restaurant</span>
            <span>•</span>
            <span>Designed with UX principles</span>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
