'use client'

import { useMemo } from 'react'
import {
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  XAxis,
  YAxis,
  Legend,
  Line,
  Tooltip,
} from 'recharts'
import BoxHeader from './components/BoxHeader'
import { type GetKpisResponse } from '../kpi/types'

type Props = {
  data: GetKpisResponse[]
}

const RevenueProfit = ({ data }: Props) => {
  const revenueProfit = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          profit: (revenue - expenses).toFixed(2),
        }
      })
    )
  }, [data])

  return (
    <div className="h-full w-full">
      <BoxHeader
        title="Profit and Revenue"
        subtitle="top line represents revenue, bottom line represents expenses"
        sideText="+4%"
      />
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={400}
          data={revenueProfit}
          margin={{
            top: 20,
            right: 0,
            left: -10,
            bottom: 55,
          }}
        >
          <CartesianGrid vertical={false} stroke="#48494e" />
          <XAxis dataKey="name" tickLine={false} style={{ fontSize: '10px' }} />
          <YAxis
            yAxisId="left"
            tickLine={false}
            axisLine={false}
            style={{ fontSize: '10px' }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tickLine={false}
            axisLine={false}
            style={{ fontSize: '10px' }}
          />
          <Tooltip />
          <Legend
            height={20}
            wrapperStyle={{
              margin: '0 0 10px 0',
            }}
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="profit"
            stroke="#8884d8"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="revenue"
            stroke="#12efc8"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RevenueProfit
