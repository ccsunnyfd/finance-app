'use client'

import { Button } from '@mui/material'
import { useMemo, useState } from 'react'
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Label,
  Legend,
  Line,
} from 'recharts'
import { type GetKpisResponse } from '../kpi/types'
import regression, { type DataPoint } from 'regression'

type Props = {
  data: GetKpisResponse[]
}

const Prediction = ({ data }: Props) => {
  const [isPredictions, setIsPredictions] = useState(false)

  const formattedData = useMemo(() => {
    if (!data) return []
    const monthData = data[0].monthlyData

    const formatted: Array<DataPoint> = monthData.map(
      ({ revenue }, i: number) => {
        return [i, revenue]
      }
    )
    const regressionLine = regression.linear(formatted)

    return monthData.map(({ month, revenue }, i: number) => {
      return {
        name: month,
        'Actual Revenue': revenue,
        'Regression Line': regressionLine.points[i][1],
        'Predicted Revenue': regressionLine.predict(i + 12)[1],
      }
    })
  }, [data])

  return (
    <div className="h-screen w-full">
      <div className="flex-between mx-10 my-4 gap-4">
        <div>
          <h3>Revenue and Predictions</h3>
          <h6>
            charted revenue and predicted revenue based on a simple linear
            regression model
          </h6>
        </div>
        <Button
          onClick={() => setIsPredictions((prev) => !prev)}
          className="bg-grey-700 text-grey-900 shadow-[0.1rem_0.1rem_0.1rem_0.1rem_rgba(0,0,0,0.4)]"
        >
          Show Predicted Revenue for Next Year
        </Button>
      </div>
      <div className="h-3/4 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={formattedData}
            margin={{
              top: 20,
              right: 75,
              left: 20,
              bottom: 80,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#48494e" />
            <XAxis dataKey="name" tickLine={false} style={{ fontSize: '10px' }}>
              <Label value="Month" offset={-5} position="insideBottom" />
            </XAxis>
            <YAxis
              domain={[12000, 26000]}
              axisLine={{ strokeWidth: '0' }}
              style={{ fontSize: '10px' }}
              tickFormatter={(v) => `$${v}`}
            >
              <Label
                value="Revenue in USD"
                angle={-90}
                offset={-5}
                position="insideLeft"
              />
            </YAxis>
            <Tooltip />
            <Legend verticalAlign="top" />
            <Line
              type="monotone"
              dataKey="Actual Revenue"
              stroke="#12efc8"
              strokeWidth={0}
              dot={{ strokeWidth: 5 }}
            />
            <Line
              type="monotone"
              dataKey="Regression Line"
              stroke="#8884d8"
              dot={false}
            />
            {isPredictions && (
              <Line
                strokeDasharray="5 5"
                dataKey="Predicted Revenue"
                stroke="#f2b455"
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Prediction
