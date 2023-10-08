import { Suspense } from 'react'
import { getKpis } from './request'
import Revenue from './Revenue'
import RevenueExpenses from './RevenueExpenses'
import RevenueProfit from './RevenueProfit'

const Row1 = async () => {
  const data = await getKpis()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="grid-area-a dashboard-box max-h-[400px] overflow-hidden">
        <RevenueExpenses data={data} />
      </div>
      <div className="grid-area-b dashboard-box max-h-[400px] overflow-hidden">
        <Revenue data={data} />
      </div>
      <div className="grid-area-c dashboard-box max-h-[300px] overflow-hidden">
        <RevenueProfit data={data} />
      </div>
    </Suspense>
  )
}

export default Row1
