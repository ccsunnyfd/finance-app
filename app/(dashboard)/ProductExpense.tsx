'use client'

import { useMemo } from 'react'
import {
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  ScatterChart,
  Scatter,
  ZAxis,
} from 'recharts'
import BoxHeader from './components/BoxHeader'
import { GetProductsResponse } from '../product/types'

type Props = {
  data: GetProductsResponse[]
}

const ProductExpense = ({ data }: Props) => {
  const productExpenseData = useMemo(() => {
    return (
      data &&
      data.map(({ _id, price, expense }) => {
        return {
          id: _id,
          price: price,
          expense: expense,
        }
      })
    )
  }, [data])

  return (
    <div className="h-full w-full">
      <BoxHeader title="Product Prices vs Expenses" sideText="+4%" />
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          margin={{
            top: 20,
            right: 25,
            bottom: 40,
            left: -10,
          }}
        >
          <CartesianGrid stroke="#48494e" />
          <XAxis
            type="number"
            dataKey="price"
            name="price"
            axisLine={false}
            tickLine={false}
            style={{ fontSize: '10px' }}
            tickFormatter={(v) => `$${v}`}
          />
          <YAxis
            type="number"
            dataKey="expense"
            name="expense"
            axisLine={false}
            tickLine={false}
            style={{ fontSize: '10px' }}
            tickFormatter={(v) => `$${v}`}
          />
          <ZAxis type="number" range={[20]} />
          <Tooltip formatter={(v) => `$${v}`} />
          <Scatter
            name="Product Expense Ratio"
            data={productExpenseData}
            fill="#8884d8"
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ProductExpense
