import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Clock, Users } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface ReservationData {
  date: Date | undefined;
  time: string;
  guests: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests: string;
}

const ReservationForm = () => {
  const [reservationData, setReservationData] = useState<ReservationData>({
    date: undefined,
    time: "",
    guests: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: ""
  });
  const [step, setStep] = useState(1);
  const { toast } = useToast();

  const timeSlots = [
    "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", 
    "20:00", "20:30", "21:00", "21:30", "22:00"
  ];

  const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8+"];

  const handleStepOne = () => {
    if (!reservationData.date || !reservationData.time || !reservationData.guests) {
      toast({
        title: "Missing Information",
        description: "Please select date, time, and number of guests.",
        variant: "destructive"
      });
      return;
    }
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!reservationData.firstName || !reservationData.lastName || !reservationData.email || !reservationData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate booking submission
    toast({
      title: "Reservation Confirmed!",
      description: `Your table for ${reservationData.guests} on ${reservationData.date ? format(reservationData.date, "MMMM d, yyyy") : ""} at ${reservationData.time} has been booked.`
    });
    
    // Reset form
    setReservationData({
      date: undefined,
      time: "",
      guests: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      specialRequests: ""
    });
    setStep(1);
  };

  return (
    <div className="py-12 px-4 bg-gradient-card">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Reserve Your Table
          </h2>
          <p className="text-muted-foreground text-lg">
            Book your Mediterranean dining experience at Little Lemon
          </p>
        </div>

        <Card className="shadow-card">
          <CardHeader className="bg-gradient-hero text-white">
            <CardTitle className="text-xl font-display flex items-center gap-2">
              {step === 1 && (
                <>
                  <CalendarIcon className="w-5 h-5" />
                  Select Date & Time
                </>
              )}
              {step === 2 && (
                <>
                  <Users className="w-5 h-5" />
                  Your Details
                </>
              )}
            </CardTitle>
            <div className="flex space-x-2 mt-2">
              <div className={`h-2 flex-1 rounded ${step >= 1 ? 'bg-white' : 'bg-white/30'}`} />
              <div className={`h-2 flex-1 rounded ${step >= 2 ? 'bg-white' : 'bg-white/30'}`} />
            </div>
          </CardHeader>

          <CardContent className="p-8">
            {step === 1 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="date" className="text-sm font-medium text-foreground mb-2 block">
                      Select Date *
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !reservationData.date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {reservationData.date ? format(reservationData.date, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={reservationData.date}
                          onSelect={(date) => setReservationData({...reservationData, date})}
                          disabled={(date) => date < new Date() || date.getDay() === 0}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <Label htmlFor="guests" className="text-sm font-medium text-foreground mb-2 block">
                      Number of Guests *
                    </Label>
                    <Select value={reservationData.guests} onValueChange={(value) => setReservationData({...reservationData, guests: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select party size" />
                      </SelectTrigger>
                      <SelectContent>
                        {guestOptions.map((option) => (
                          <SelectItem key={option} value={option}>{option} {option === "1" ? "guest" : "guests"}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium text-foreground mb-3 block">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Available Times *
                  </Label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={reservationData.time === time ? "default" : "outline"}
                        size="sm"
                        onClick={() => setReservationData({...reservationData, time})}
                        className="text-sm"
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={handleStepOne}
                  className="w-full bg-gradient-hero hover:opacity-90 text-lg py-6"
                  size="lg"
                >
                  Continue to Details
                </Button>
              </div>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-foreground mb-2 block">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={reservationData.firstName}
                      onChange={(e) => setReservationData({...reservationData, firstName: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-foreground mb-2 block">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={reservationData.lastName}
                      onChange={(e) => setReservationData({...reservationData, lastName: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={reservationData.email}
                      onChange={(e) => setReservationData({...reservationData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={reservationData.phone}
                      onChange={(e) => setReservationData({...reservationData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="requests" className="text-sm font-medium text-foreground mb-2 block">
                    Special Requests (Optional)
                  </Label>
                  <Input
                    id="requests"
                    type="text"
                    placeholder="Dietary restrictions, special occasions, etc."
                    value={reservationData.specialRequests}
                    onChange={(e) => setReservationData({...reservationData, specialRequests: e.target.value})}
                  />
                </div>

                <div className="bg-herb-light/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Reservation Summary</h3>
                  <p className="text-sm text-muted-foreground">
                    <strong>Date:</strong> {reservationData.date ? format(reservationData.date, "MMMM d, yyyy") : ""}<br />
                    <strong>Time:</strong> {reservationData.time}<br />
                    <strong>Guests:</strong> {reservationData.guests}<br />
                    <strong>Name:</strong> {reservationData.firstName} {reservationData.lastName}
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button 
                    type="submit"
                    className="flex-1 bg-gradient-hero hover:opacity-90 text-lg py-6"
                    size="lg"
                  >
                    Confirm Reservation
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReservationForm;