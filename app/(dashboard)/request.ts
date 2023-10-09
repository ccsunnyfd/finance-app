import { type GetKpisResponse } from '@/app/kpi/types'
import { type GetProductsResponse } from '@/app/product/types'
import { type GetTransactionsResponse } from '@/app/transaction/types'

export async function getKpis(): Promise<GetKpisResponse[]> {
    const res = await fetch(`${process.env.API_SERVER_BASE_URL}/kpi/`)
    return res.json()
}

export async function getProducts(): Promise<GetProductsResponse[]> {
    const res = await fetch(`${process.env.API_SERVER_BASE_URL}/product/`)
    return res.json()
}

export async function getTransactions(): Promise<GetTransactionsResponse[]> {
    const res = await fetch(`${process.env.API_SERVER_BASE_URL}/transaction/`)
    return res.json()
}