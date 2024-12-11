
import { DashboardCard, DashboardCardContent } from "@/components/dashboard-card";
import UserDataCard, { UserDataProps } from "@/components/user-data-card";
import { db } from "@/lib/db";
import { Calendar, CreditCard, DollarSign, PersonStanding, UserPlus, UserRoundCheck } from "lucide-react";
import { eachMonthOfInterval, endOfMonth, format, formatDistanceToNow, startOfMonth } from "date-fns";
import UserPurchaseCard, { UserPurchaseProps } from "@/components/user-purchase-card";





  // Fetch Recent Users
  const recentUsers = await db.user.findMany({
    orderBy: {
      createdAt: 'desc'
    },
    take: 7
  });

  // User Data
 const UserData: UserDataProps[] = recentUsers.map((account) => ({
    name: account.name || 'Unknown',
    email: account.email || 'Unknown',
    image: account.image || './mesh.png',
    time: formatDistanceToNow(new Date(account.createdAt), {addSuffix: true})
  }))

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
                key={index}
                name={data.name}
                email={data.email}
                image={data.image}
                time={data.time}
              />
            ))}
          </DashboardCardContent>
      

        </div>
      </div>
    </div>
  );
}
