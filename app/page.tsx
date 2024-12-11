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
             <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 transition-all">
          <DashboardCardContent>
            <section className="flex justify-between gap-2 pb-2">
              <p>Recent Users</p>
              <UserRoundCheck className="h-4 w-4"/>
            </section>
            {UserData.map((data, index) => (
              <UserDataCard 
                
                name='nouha'
                email='./photo.jpeg'
                image='nouhailaechchnaoui@gmail.com'
                time='2 days ago'
              />
          </div>
        </div>
      </div>
    </div>
  );
}
