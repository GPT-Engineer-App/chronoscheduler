import { Button } from "@/components/ui/button";

const TimeSlotSelector = ({ timeSlots, selectedTimeSlot, onSelect }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Select a time slot</h3>
      <div className="grid grid-cols-3 gap-2">
        {timeSlots.map((slot) => (
          <Button
            key={slot}
            variant={selectedTimeSlot === slot ? "default" : "outline"}
            onClick={() => onSelect(slot)}
          >
            {slot}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotSelector;
