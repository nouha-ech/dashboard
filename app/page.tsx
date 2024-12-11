import { DashboardCard } from "@/components/dashboardCard";
import { DollarSign } from "lucide-react";


export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-5 w-full">
        <div className="container mx-auto py-8">
          <div className="flex flex-col gap-5 w-full">
            <section className="grid w-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 gap-x-8 transition-all">
              <DashboardCard
                label={"Total Revenue"}
                Icon={DollarSign}
                amount={"Total"}
                description="All Time"
              />
              <DashboardCard
                label={"Total Revenue"}
                Icon={DollarSign}
                amount={"Total"}
                description="All Time"
              />
              <DashboardCard
                label={"Total Revenue"}
                Icon={DollarSign}
                amount={"Total"}
                description="All Time"
              />
              <DashboardCard
                label={"Total Revenue"}
                Icon={DollarSign}
                amount={"Total"}
                description="All Time"
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
