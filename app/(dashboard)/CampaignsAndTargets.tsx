'use client'

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import BoxHeader from './components/BoxHeader'

const pieData = [
  { name: 'Group A', value: 600 },
  { name: 'Group B', value: 400 },
]

const pieColors = ['#076050', '#71f5de']

const CampaignsAndTargets = () => {
  return (
    <div className="h-full w-full">
      <BoxHeader title="Campaigns and Targets" sideText="+4%" />
      <div className="flex-between mt-1 h-full w-full gap-6 pb-16 pr-4">
        <ResponsiveContainer width="70%" height="70%">
          <PieChart
            width={110}
            height={100}
            margin={{
              top: 0,
              right: -10,
              left: 10,
              bottom: 0,
            }}
          >
            <Pie
              stroke="none"
              data={pieData}
              innerRadius={18}
              outerRadius={38}
              paddingAngle={2}
              dataKey="value"
            >
              {pieData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="-ml-[0.7rem] basis-2/5 text-center">
          <h5>Target Sales</h5>
          <h3 className="my-[0.3rem] text-primary-300">83</h3>
          <h6>Finance goals of the campaign that is desired</h6>
        </div>
        <div className="basis-2/5">
          <h5>Losses in Revenue</h5>
          <h6>Losses are down 25%</h6>
          <h5 className="mt-[0.4rem]">Profit Margins</h5>
          <h6>Margins are up by 30% from last month.</h6>
        </div>
      </div>
    </div>
  )
}

export default CampaignsAndTargets
