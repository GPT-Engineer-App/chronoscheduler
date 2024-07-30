import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
const Index = () => {
  const [selectedDuration, setSelectedDuration] = useState(null);

  const durations = [
    { 
      minutes: 30,
      label: "NO 30", 
      description: {
        nl: "NL: 30 minuten afspraak",
        en: "EN: 30 minutes appointment"
      }
    },
    { 
      minutes: 60, 
      label: "NO 60", 
      description: {
        nl: "NL: 60 minuten (1u) afspraak",
        en: "EN: 60 minutes (1h) appointment"
      }
    },
    { 
      minutes: 120, 
      label: "NO 120", 
      description: {
        nl: "NL: 120 minuten (2u) afspraak",
        en: "EN: 120 minutes (2h) appointment"
      }
    },
    { 
      minutes: 240, 
      label: "NO 240", 
      description: {
        nl: "NL: 240 minuten (4u) afspraak",
        en: "EN: 240 minutes (4h) appointment"
      }
    },
    { 
      minutes: 480, 
      label: "NO 480", 
      description: {
        nl: "NL: 480 minuten (8u) afspraak",
        en: "EN: 480 minutes (8h) appointment"
      }
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <img src="/placeholder.svg" alt="Noodzakelijk Online Logo" className="mx-auto w-16 h-16 mb-4" />
        <h1 className="text-2xl font-bold">Noodzakelijk Online (Robert Velhorst)</h1>
        <p className="text-gray-600">Appointments</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {durations.map((duration) => (
          <Card
            key={duration.label}
            className={`cursor-pointer transition-all ${
              selectedDuration === duration ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() => setSelectedDuration(duration)}
          >
            <CardContent className="p-3">
              <h2 className="text-lg font-semibold mb-1">{duration.label}</h2>
              <div className="text-xs text-gray-500">
                <p className="truncate">{duration.description.nl}</p>
                <p className="truncate">{duration.description.en}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;
