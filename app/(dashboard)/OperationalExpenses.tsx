'use client'

import { useMemo } from 'react'
import {
  Tooltip,
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Line,
} from 'recharts'
import BoxHeader from './components/BoxHeader'
import { type GetKpisResponse } from '../kpi/types'

type Props = {
  data: GetKpisResponse[]
}

const OperationalExpenses = ({ data }: Props) => {
  const operationalExpenses = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(
        ({ month, operationalExpenses, nonOperationalExpenses }) => {
          return {
            name: month.substring(0, 3),
            'Operational Expenses': operationalExpenses,
            'Non Operational Expenses': nonOperationalExpenses,
          }
        }
      )
    )
  }, [data])

  return (
    <div className="h-full w-full">
      <BoxHeader
        title="Operational vs Non-Operational Expenses"
        sideText="+4%"
      />
      <ResponsiveContainer>
        <LineChart
          data={operationalExpenses}
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
            orientation="left"
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
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="Non Operational Expenses"
            stroke="#8884d8"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="Operational Expenses"
            stroke="#12efc8"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default OperationalExpenses
