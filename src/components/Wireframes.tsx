import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Wireframes = () => {
  return (
    <div className="py-12 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Wireframes & Design Process
          </h2>
          <p className="text-muted-foreground text-lg">
            Low-fidelity wireframes showing the reservation system structure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Landing Page Wireframe */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg">Landing Page</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="bg-gray-100 p-4 rounded border-2 border-dashed border-gray-300 aspect-[3/4]">
                <div className="space-y-3">
                  {/* Header */}
                  <div className="h-8 bg-gray-300 rounded flex items-center justify-center text-xs">
                    HEADER / NAVIGATION
                  </div>
                  
                  {/* Hero Section */}
                  <div className="h-20 bg-gray-300 rounded flex items-center justify-center text-xs">
                    HERO IMAGE + CTA
                  </div>
                  
                  {/* Restaurant Info */}
                  <div className="h-12 bg-gray-200 rounded flex items-center justify-center text-xs">
                    RESTAURANT INFO
                  </div>
                  
                  {/* Reserve Button */}
                  <div className="h-8 bg-yellow-200 rounded flex items-center justify-center text-xs font-bold">
                    RESERVE TABLE BUTTON
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Date/Time Selector Wireframe */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg">Date & Time Selection</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="bg-gray-100 p-4 rounded border-2 border-dashed border-gray-300 aspect-[3/4]">
                <div className="space-y-3">
                  {/* Title */}
                  <div className="h-6 bg-gray-300 rounded flex items-center justify-center text-xs">
                    SELECT DATE & TIME
                  </div>
                  
                  {/* Calendar */}
                  <div className="h-24 bg-gray-200 rounded flex items-center justify-center text-xs">
                    CALENDAR WIDGET
                  </div>
                  
                  {/* Time Slots */}
                  <div className="h-16 bg-gray-200 rounded flex items-center justify-center text-xs">
                    TIME SLOT BUTTONS
                  </div>
                  
                  {/* Party Size */}
                  <div className="h-8 bg-gray-200 rounded flex items-center justify-center text-xs">
                    PARTY SIZE DROPDOWN
                  </div>
                  
                  {/* Continue Button */}
                  <div className="h-8 bg-green-200 rounded flex items-center justify-center text-xs font-bold">
                    CONTINUE BUTTON
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customer Details Form Wireframe */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg">Customer Details</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="bg-gray-100 p-4 rounded border-2 border-dashed border-gray-300 aspect-[3/4]">
                <div className="space-y-3">
                  {/* Title */}
                  <div className="h-6 bg-gray-300 rounded flex items-center justify-center text-xs">
                    YOUR DETAILS
                  </div>
                  
                  {/* Name Fields */}
                  <div className="h-8 bg-gray-200 rounded flex items-center justify-center text-xs">
                    FIRST NAME INPUT
                  </div>
                  <div className="h-8 bg-gray-200 rounded flex items-center justify-center text-xs">
                    LAST NAME INPUT
                  </div>
                  
                  {/* Contact Fields */}
                  <div className="h-8 bg-gray-200 rounded flex items-center justify-center text-xs">
                    EMAIL INPUT
                  </div>
                  <div className="h-8 bg-gray-200 rounded flex items-center justify-center text-xs">
                    PHONE INPUT
                  </div>
                  
                  {/* Special Requests */}
                  <div className="h-12 bg-gray-200 rounded flex items-center justify-center text-xs">
                    SPECIAL REQUESTS (OPTIONAL)
                  </div>
                  
                  {/* Submit */}
                  <div className="h-8 bg-yellow-200 rounded flex items-center justify-center text-xs font-bold">
                    CONFIRM RESERVATION
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Confirmation Page Wireframe */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg">Confirmation Page</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="bg-gray-100 p-4 rounded border-2 border-dashed border-gray-300 aspect-[3/4]">
                <div className="space-y-3">
                  {/* Success Message */}
                  <div className="h-8 bg-green-200 rounded flex items-center justify-center text-xs font-bold">
                    SUCCESS MESSAGE
                  </div>
                  
                  {/* Booking Details */}
                  <div className="h-20 bg-gray-200 rounded flex items-center justify-center text-xs">
                    BOOKING SUMMARY
                  </div>
                  
                  {/* Reference Number */}
                  <div className="h-6 bg-gray-300 rounded flex items-center justify-center text-xs">
                    CONFIRMATION NUMBER
                  </div>
                  
                  {/* Actions */}
                  <div className="h-8 bg-blue-200 rounded flex items-center justify-center text-xs">
                    ADD TO CALENDAR
                  </div>
                  <div className="h-8 bg-gray-300 rounded flex items-center justify-center text-xs">
                    PRINT / EMAIL
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mobile Responsive Wireframe */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg">Mobile Layout</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="bg-gray-100 p-4 rounded border-2 border-dashed border-gray-300 aspect-[2/3] max-w-48 mx-auto">
                <div className="space-y-2">
                  {/* Mobile Header */}
                  <div className="h-6 bg-gray-300 rounded flex items-center justify-center text-xs">
                    MOBILE HEADER
                  </div>
                  
                  {/* Stacked Form Elements */}
                  <div className="h-12 bg-gray-200 rounded flex items-center justify-center text-xs">
                    DATE PICKER
                  </div>
                  <div className="h-10 bg-gray-200 rounded flex items-center justify-center text-xs">
                    TIME GRID
                  </div>
                  <div className="h-6 bg-gray-200 rounded flex items-center justify-center text-xs">
                    GUESTS
                  </div>
                  <div className="h-6 bg-gray-200 rounded flex items-center justify-center text-xs">
                    NAME
                  </div>
                  <div className="h-6 bg-gray-200 rounded flex items-center justify-center text-xs">
                    EMAIL
                  </div>
                  <div className="h-6 bg-gray-200 rounded flex items-center justify-center text-xs">
                    PHONE
                  </div>
                  
                  {/* Mobile CTA */}
                  <div className="h-8 bg-yellow-200 rounded flex items-center justify-center text-xs font-bold">
                    BOOK TABLE
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Error States Wireframe */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg">Error Handling</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="bg-gray-100 p-4 rounded border-2 border-dashed border-gray-300 aspect-[3/4]">
                <div className="space-y-3">
                  {/* Form with Errors */}
                  <div className="h-6 bg-gray-300 rounded flex items-center justify-center text-xs">
                    FORM TITLE
                  </div>
                  
                  {/* Error Field */}
                  <div className="h-8 bg-red-200 border-2 border-red-300 rounded flex items-center justify-center text-xs">
                    INPUT WITH ERROR
                  </div>
                  <div className="h-4 bg-red-100 rounded flex items-center justify-center text-xs">
                    ERROR MESSAGE
                  </div>
                  
                  {/* Valid Field */}
                  <div className="h-8 bg-green-100 border-2 border-green-300 rounded flex items-center justify-center text-xs">
                    VALID INPUT
                  </div>
                  
                  {/* Loading State */}
                  <div className="h-8 bg-blue-200 rounded flex items-center justify-center text-xs">
                    LOADING... / DISABLED
                  </div>
                  
                  {/* No Availability */}
                  <div className="h-12 bg-orange-200 rounded flex items-center justify-center text-xs">
                    NO AVAILABILITY MESSAGE
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            These wireframes guided the development of the high-fidelity prototype below, 
            ensuring a user-centered design approach focused on simplicity and efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wireframes;