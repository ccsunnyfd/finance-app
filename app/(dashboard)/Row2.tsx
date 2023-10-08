import { Suspense } from 'react'
import { getKpis, getProducts } from './request'
import OperationalExpenses from './OperationalExpenses'
import ProductExpense from './ProductExpense'
import CampaignsAndTargets from './CampaignsAndTargets'

const Row2 = async () => {
  const [operationalData, productData] = await Promise.all([
    getKpis(),
    getProducts(),
  ])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="grid-area-d dashboard-box max-h-[300px] overflow-hidden">
        <OperationalExpenses data={operationalData} />
      </div>
      <div className="grid-area-e dashboard-box max-h-[200px] overflow-hidden">
        <CampaignsAndTargets />
      </div>
      <div className="grid-area-f dashboard-box max-h-[300px] overflow-hidden">
        <ProductExpense data={productData} />
      </div>
    </Suspense>
  )
}

export default Row2
