import { Suspense } from 'react'
import { getKpis } from '../(dashboard)/request'
import Prediction from './Prediction'

const Page = async () => {
  const kpiData = await getKpis()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="dashboard-box h-full w-full overflow-hidden p-4">
        <Prediction data={kpiData} />
      </div>
    </Suspense>
  )
}

export default Page
