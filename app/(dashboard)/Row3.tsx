import { Suspense } from 'react'
import { getKpis, getProducts, getTransactions } from './request'
import ProductExpense from './ProductExpense'
import ProductsList from './ProductsList'
import RecentOrders from './RecentOrders'
import ExpenseBreakdownByCategory from './ExpenseBreakdownByCategory'
import OverallSummaryAndExplanation from './OverallSummaryAndExplanation'

const Row3 = async () => {
  const [operationalData, productData, transactionData] = await Promise.all([
    getKpis(),
    getProducts(),
    getTransactions(),
  ])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="grid-area-g dashboard-box max-h-[300px] overflow-hidden">
        <ProductsList data={productData} />
      </div>
      <div className="grid-area-h dashboard-box max-h-[400px] overflow-hidden">
        <RecentOrders data={transactionData} />
      </div>
      <div className="grid-area-i dashboard-box max-h-[200px] overflow-hidden">
        <ExpenseBreakdownByCategory data={operationalData} />
      </div>
      <div className="grid-area-j dashboard-box max-h-[200px] overflow-hidden">
        <OverallSummaryAndExplanation />
      </div>
    </Suspense>
  )
}

export default Row3
