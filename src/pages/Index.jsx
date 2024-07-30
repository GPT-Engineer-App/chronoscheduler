import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

const Index = () => {
  const [selectedDuration, setSelectedDuration] = useState(null);

  const durations = [
    { 
      minutes: 30, 
      label: "NO 30", 
      description: {
        nl: "NL: Voor 30 minuten afspraak",
        en: "EN: For 30 minutes appointment"
      }
    },
    { 
      minutes: 60, 
      label: "NO 60", 
      description: {
        nl: "NL: Voor 60 minuten (1u) afspraak",
        en: "EN: For 60 minutes (1h) appointment"
      }
    },
    { 
      minutes: 120, 
      label: "NO 120", 
      description: {
        nl: "NL: Voor 120 minuten (2u) afspraak",
        en: "EN: For 120 minutes (2h) appointment"
      }
    },
    { 
      minutes: 240, 
      label: "NO 240", 
      description: {
        nl: "NL: Voor 240 minuten (4u) afspraak",
        en: "EN: For 240 minutes (4h) appointment"
      }
    },
    { 
      minutes: 480, 
      label: "NO 480", 
      description: {
        nl: "NL: Voor 480 minuten (8u) afspraak",
        en: "EN: For 480 minutes (8h) appointment"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {durations.map((duration) => (
          <Card
            key={duration.minutes}
            className={`cursor-pointer transition-all ${
              selectedDuration === duration ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() => setSelectedDuration(duration)}
          >
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">{duration.label}</h2>
              <div className="flex items-center text-gray-600 mb-2">
                <Clock className="w-4 h-4 mr-2" />
                <span>{duration.minutes} min</span>
              </div>
              <div className="text-sm text-gray-500">
                <p>{duration.description.nl}</p>
                <p>{duration.description.en}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;
