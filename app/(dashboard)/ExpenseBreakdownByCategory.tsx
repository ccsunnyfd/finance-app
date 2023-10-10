'use client'

import { useMemo } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import BoxHeader from './components/BoxHeader'
import { GetKpisResponse } from '../kpi/types'

const pieColors = ['#076050', '#12efc8']

type Props = {
  data: GetKpisResponse[]
}

const ExpenseBreakdownByCategory = ({ data }: Props) => {
  const pieChartData = useMemo(() => {
    if (data) {
      const totalExpenses = data[0].totalExpenses
      return Object.entries(data[0].expensesByCategory).map(([key, value]) => {
        return [
          {
            name: key,
            value: value,
          },
          {
            name: `${key} of Total`,
            value: totalExpenses - value,
          },
        ]
      })
    }
  }, [data])

  return (
    <div className="h-full w-full">
      <BoxHeader title="Expense Breakdown By Category" sideText="+4%" />
      <div className="flex-between mt-2 h-full w-full gap-2 p-[0.1rem] text-center">
        {pieChartData?.map((data, i) => (
          <div className="h-full w-full" key={`${data[0].name}-${i}`}>
            <ResponsiveContainer width="70%" height="50%">
              <PieChart width={110} height={100}>
                <Pie
                  stroke="none"
                  data={data}
                  innerRadius={18}
                  outerRadius={35}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <h5>{data[0].name}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExpenseBreakdownByCategory
