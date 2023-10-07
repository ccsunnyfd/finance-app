import { Suspense } from 'react'
import { getKpis } from './request'

const Row1 = async () => {
  const data = await getKpis()
  console.log(data)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="grid-area-a dashboard-box text-purple-500">a</div>
      <div className="grid-area-b dashboard-box text-purple-500">b</div>
      <div className="grid-area-c dashboard-box text-purple-500">c</div>
    </Suspense>
  )
}

export default Row1
