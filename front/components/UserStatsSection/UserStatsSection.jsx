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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useTranslations } from "../../hooks/useTranslations";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const chartOptions = {
  responsive: true,
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

const toChartData = (label, dataMap) => ({
  labels: Object.keys(dataMap),
  datasets: [
    {
      label,
      data: Object.values(dataMap),
      backgroundColor: () => getRandomColors(Object.keys(dataMap).length),
    },
  ],
});

// stats: [{ value: "country", label: string, dataMap: {name: count} }, ...]
export const UserStatsSection = ({ stats }) => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(stats[0]?.value);
  const { t } = useTranslations();

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger asChild>
        <Button variant="outline">
          {t.userStatsToggleLabel}
          <ChevronDown
            className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Card className="mt-3">
          <CardContent>
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              orientation="vertical"
              className="flex flex-row gap-6"
            >
              <TabsList className="flex flex-col items-stretch gap-1">
                {stats.map((s) => (
                  <TabsTrigger key={s.value} value={s.value}>
                    {s.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {stats.map((s) => (
                <TabsContent key={s.value} value={s.value} className="flex-1">
                  <Bar options={chartOptions} data={toChartData(s.label, s.dataMap)} />
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </CollapsibleContent>
    </Collapsible>
  );
};
