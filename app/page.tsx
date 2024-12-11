
import { DashboardCard, DashboardCardContent } from "@/components/dashboard-card";
import UserDataCard, { UserDataProps } from "@/components/user-data-card";
import { db } from "@/lib/db";
import { Calendar, CreditCard, DollarSign, PersonStanding, UserPlus, UserRoundCheck } from "lucide-react";
import { eachMonthOfInterval, endOfMonth, format, formatDistanceToNow, startOfMonth } from "date-fns";
import UserPurchaseCard, { UserPurchaseProps } from "@/components/user-purchase-card";



 const monthlyUsersData = eachMonthOfInterval({
    start: startOfMonth(new Date(usersThisMonth[0]?.createdAt || new Date())),
    end: endOfMonth(currentDate)
  }).map(month => {
    const monthString = format(month, 'MMM');
    const userMonthly = usersThisMonth.filter(user => format(new Date(user.createdAt), 'MMM') === monthString).reduce((total, user) => total + user._count.createdAt, 0);
    return { month: monthString, total: userMonthly}
    
  })



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


   // monthly sames
  const salesThisMonth = await db.purchase.groupBy({
    by: ['createdAt'],
    _sum: {
      amount: true
    },
    orderBy: {
      createdAt: 'asc'
    }
  })

  const monthlySalesData = eachMonthOfInterval({
    start: startOfMonth(new Date(salesThisMonth[0]?.createdAt || new Date())),
    end: endOfMonth(currentDate)
  }).map(month => {
    const monthString = format(month, 'MMM');
    const salesInMonth = salesThisMonth.filter(sales => format(new Date(sales.createdAt), 'MMM') === monthString).reduce((total, sale) => total + sale._sum.amount!, 0)
    return { month: monthString, total: salesInMonth}
  })

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-5 w-full">
         <h1 className="text-2xl font-bold text-center mx-6">Global Dashboard</h1>
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
          <DashboardCardContent>
            <section className="flex justify-between gap-2 pb-2">
              <p>Recent Sales</p>
              <CreditCard className="h-4 w-4"/>
            </section>
            {PurchaseCard.map((data, index) => (
              <UserPurchaseCard 
                key={index}
                name={data.name}
                email={data.email}
                image={data.image}
                saleAmount={data.saleAmount}
              />
            ))}
          </DashboardCardContent>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 transition-all">
            <BarChart data={monthlyUsersData}/>
            <LineGraph data={monthlySalesData}/>
          </section>
          <GoalDataCard goal={goalAmount} value={goalProgress}/>
        </div>
      </div>
    </div>
  );
}
