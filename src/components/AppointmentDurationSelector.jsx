import { Button } from "@/components/ui/button";

const AppointmentDurationSelector = ({ durations, selectedDuration, onSelect }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Select appointment duration</h3>
      <div className="grid grid-cols-2 gap-2">
        {durations.map((duration) => (
          <Button
            key={duration.minutes}
            variant={selectedDuration === duration ? "default" : "outline"}
            className="justify-start"
            onClick={() => onSelect(duration)}
          >
            {duration.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default AppointmentDurationSelector;
