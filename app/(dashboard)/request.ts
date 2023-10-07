import { type GetKpisResponse } from '@/app/kpi/types'

export async function getKpis(): Promise<GetKpisResponse[]> {
    const res = await fetch(`${process.env.API_SERVER_BASE_URL}/kpi/`)
    return res.json()
}