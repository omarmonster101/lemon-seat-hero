import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const UserPersona = () => {
  return (
    <div className="py-12 px-4 bg-gradient-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            User Persona: Sofia Martinez
          </h2>
          <p className="text-muted-foreground text-lg">
            Understanding our primary user for the reservation system
          </p>
        </div>

        <Card className="shadow-card">
          <CardHeader className="bg-gradient-hero text-white">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-4xl">
                👩‍💼
              </div>
              <div className="text-center md:text-left">
                <CardTitle className="text-2xl font-display">Sofia Martinez</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">Age: 32</Badge>
                  <Badge variant="secondary">Marketing Manager</Badge>
                  <Badge variant="secondary">Urban Professional</Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  About Sofia
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sofia is a busy marketing manager living in the city. She values quality experiences 
                  and efficient service. She frequently dines out for both business meetings and social 
                  occasions, and appreciates restaurants that respect her time.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Characteristics
                </h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Tech-savvy and prefers digital solutions</li>
                  <li>• Values convenience and speed</li>
                  <li>• Makes restaurant choices based on reviews</li>
                  <li>• Often books tables for business meetings</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-herb-green mb-3">
                  Core Needs
                </h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Quick and easy table booking process</li>
                  <li>• Real-time availability checking</li>
                  <li>• Instant booking confirmation</li>
                  <li>• Ability to modify/cancel reservations</li>
                  <li>• Clear restaurant information and location</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-terracotta mb-3">
                  Pain Points
                </h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Long phone hold times for reservations</li>
                  <li>• Unclear confirmation process</li>
                  <li>• Limited availability information</li>
                  <li>• Difficulty modifying existing bookings</li>
                  <li>• Complicated multi-step booking forms</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserPersona;