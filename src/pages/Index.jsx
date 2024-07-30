import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AppointmentDurationSelector from "@/components/AppointmentDurationSelector";
import TimeSlotSelector from "@/components/TimeSlotSelector";

const Index = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);

  const durations = [
    { minutes: 30, label: "30 min" },
    { minutes: 60, label: "1 hour" },
    { minutes: 90, label: "1 hour 30 min" },
    { minutes: 120, label: "2 hours" },
    { minutes: 150, label: "2 hours 30 min" },
    { minutes: 180, label: "3 hours" },
    { minutes: 210, label: "3 hours 30 min" },
    { minutes: 240, label: "4 hours" },
    { minutes: 270, label: "4 hours 30 min" },
    { minutes: 300, label: "5 hours" },
    { minutes: 330, label: "5 hours 30 min" },
    { minutes: 360, label: "6 hours" },
    { minutes: 390, label: "6 hours 30 min" },
    { minutes: 420, label: "7 hours" },
    { minutes: 450, label: "7 hours 30 min" },
    { minutes: 480, label: "8 hours" },
  ].sort((a, b) => a.minutes - b.minutes);

  useEffect(() => {
    // Generate time slots based on the selected date
    const slots = generateTimeSlots(date);
    setTimeSlots(slots);
  }, [date]);

  const generateTimeSlots = (selectedDate) => {
    // This is a placeholder function. In a real application, you would fetch
    // available time slots from a backend API based on the selected date.
    const slots = [];
    for (let hour = 9; hour < 17; hour++) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`);
      slots.push(`${hour.toString().padStart(2, '0')}:30`);
    }
    return slots;
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setSelectedTimeSlot(null);
  };

  const handleDurationSelect = (duration) => {
    setSelectedDuration(duration);
    setSelectedTimeSlot(null);
  };

  const handleTimeSlotSelect = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row gap-8">
      <Card className="flex-1">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <Button variant="outline" size="icon" onClick={() => handleDateChange(new Date(date.setMonth(date.getMonth() - 1)))}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h2 className="text-lg font-semibold">{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
            <Button variant="outline" size="icon" onClick={() => handleDateChange(new Date(date.setMonth(date.getMonth() + 1)))}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateChange}
            className="rounded-md border"
          />
        </CardContent>
      </Card>
      
      <div className="flex-1 space-y-6">
        <AppointmentDurationSelector
          durations={durations}
          selectedDuration={selectedDuration}
          onSelect={handleDurationSelect}
        />
        
        {selectedDuration && (
          <TimeSlotSelector
            timeSlots={timeSlots}
            selectedTimeSlot={selectedTimeSlot}
            onSelect={handleTimeSlotSelect}
          />
        )}
        
        {selectedTimeSlot && (
          <Button className="w-full">
            Confirm Appointment
          </Button>
        )}
      </div>
    </div>
  );
};

export default Index;
