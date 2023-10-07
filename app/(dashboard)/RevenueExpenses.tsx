'use client'

import { useMemo } from 'react'
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from 'recharts'
import BoxHeader from './components/BoxHeader'
import { type GetKpisResponse } from '../kpi/types'

type Props = {
  data: GetKpisResponse[]
}

const RevenueExpenses = ({ data }: Props) => {
  const revenueExpenses = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          expenses: expenses,
        }
      })
    )
  }, [data])

  return (
    <div className="h-full w-full">
      <BoxHeader
        title="Revenue and Expenses"
        subtitle="top line represents revenue, bottom line represents expenses"
        sideText="+4%"
      />
      <ResponsiveContainer>
        <AreaChart
          data={revenueExpenses}
          margin={{
            top: 15,
            right: 25,
            left: -10,
            bottom: 60,
          }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#71f5de" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#71f5de" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#71f5de" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#71f5de" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tickLine={false} style={{ fontSize: '10px' }} />
          <YAxis
            tickLine={false}
            axisLine={{ strokeWidth: '0' }}
            style={{ fontSize: '10px' }}
            domain={[8000, 23000]}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="revenue"
            dot={true}
            stroke="#12efc8"
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />
          <Area
            type="monotone"
            dataKey="expenses"
            dot={true}
            stroke="#12efc8"
            fillOpacity={1}
            fill="url(#colorExpenses)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RevenueExpenses
