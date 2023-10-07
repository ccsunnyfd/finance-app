export async function getKpis() {
    const res = await fetch(`${process.env.API_SERVER_BASE_URL}/kpi/`)
    return res.json()
}