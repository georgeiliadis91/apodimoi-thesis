import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ChevronDown } from "lucide-react";
import { getRandomColors } from "../../utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const chartOptions = {
  responsive: true,
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

export const UserStatChart = ({ triggerLabel, label, dataMap }) => {
  const [open, setOpen] = useState(false);
  const chartData = {
    labels: Object.keys(dataMap),
    datasets: [
      {
        label,
        data: Object.values(dataMap),
        backgroundColor: () => getRandomColors(Object.keys(dataMap).length),
      },
    ],
  };

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger asChild>
        <Button variant="outline">
          {triggerLabel}
          <ChevronDown
            className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Card className="mt-3">
          <CardContent>
            <Bar options={chartOptions} data={chartData} />
          </CardContent>
        </Card>
      </CollapsibleContent>
    </Collapsible>
  );
};
