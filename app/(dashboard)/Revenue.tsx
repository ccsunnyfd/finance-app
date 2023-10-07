'use client'

import { useMemo } from 'react'
import {
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'
import BoxHeader from './components/BoxHeader'
import { type GetKpisResponse } from '../kpi/types'

type Props = {
  data: GetKpisResponse[]
}

const Revenue = ({ data }: Props) => {
  const revenue = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
        }
      })
    )
  }, [data])

  return (
    <div className="h-full w-full">
      <BoxHeader
        title="Revenue Month by Month"
        subtitle="graph representing the revenue month by month"
        sideText="+4%"
      />
      <ResponsiveContainer>
        <BarChart
          data={revenue}
          margin={{
            top: 17,
            right: 15,
            left: -5,
            bottom: 58,
          }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#71f5de" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#71f5de" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="##48494e" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            style={{ fontSize: '10px' }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            style={{ fontSize: '10px' }}
          />
          <Tooltip />
          <Bar dataKey="revenue" fill="url(#colorRevenue)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Revenue
