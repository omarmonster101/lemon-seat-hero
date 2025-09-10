import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const UserJourneyMap = () => {
  const journeySteps = [
    {
      step: "Discovery",
      action: "Searches for Mediterranean restaurants online",
      thoughts: "I need a good restaurant for dinner with clients",
      feelings: "Curious, slightly pressured",
      opportunities: "SEO optimization, clear value proposition"
    },
    {
      step: "Research",
      action: "Visits Little Lemon website, reads reviews",
      thoughts: "This looks good, but can I book easily?",
      feelings: "Interested, evaluating options",
      opportunities: "Clear menu, photos, easy-to-find reservation button"
    },
    {
      step: "Booking Intent",
      action: "Clicks 'Reserve Table' button",
      thoughts: "I hope this is quick and straightforward",
      feelings: "Hopeful, slightly anxious about time",
      opportunities: "Clear, simple reservation interface"
    },
    {
      step: "Date & Time Selection",
      action: "Selects preferred date and time",
      thoughts: "Good, I can see available slots clearly",
      feelings: "Satisfied with transparency",
      opportunities: "Real-time availability, alternative suggestions"
    },
    {
      step: "Party Size",
      action: "Enters number of diners",
      thoughts: "Simple enough",
      feelings: "Confident in the process",
      opportunities: "Clear capacity information"
    },
    {
      step: "Contact Details",
      action: "Fills in personal information",
      thoughts: "Not too many fields, that's good",
      feelings: "Willing to proceed",
      opportunities: "Minimal required fields, clear privacy policy"
    },
    {
      step: "Confirmation",
      action: "Reviews booking details and confirms",
      thoughts: "Perfect, I have all the details I need",
      feelings: "Relieved, satisfied",
      opportunities: "Clear summary, easy modification options"
    },
    {
      step: "Follow-up",
      action: "Receives confirmation email",
      thoughts: "Great, I can save this for my records",
      feelings: "Confident, prepared",
      opportunities: "Calendar integration, reminder system"
    }
  ];

  return (
    <div className="py-12 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            User Journey Map
          </h2>
          <p className="text-muted-foreground text-lg">
            Sofia's complete experience booking a table at Little Lemon
          </p>
        </div>

        <div className="grid gap-6">
          {journeySteps.map((step, index) => (
            <Card key={index} className="shadow-soft hover:shadow-card transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-hero text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl font-display">{step.step}</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Action</h4>
                    <p className="text-sm text-muted-foreground">{step.action}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Thoughts</h4>
                    <p className="text-sm text-muted-foreground italic">"{step.thoughts}"</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Feelings</h4>
                    <Badge variant="outline" className="text-xs">
                      {step.feelings}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-herb-green mb-2">Opportunities</h4>
                    <p className="text-sm text-muted-foreground">{step.opportunities}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserJourneyMap;