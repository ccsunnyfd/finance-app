//@ts-ignore
import clientPromise from '../../../lib/mongodb'
import kpi from '../../kpi/models/kpi.js'
import { NextRequest, NextResponse } from 'next/server.js';

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        /* ADD DATA ONE TIME ONLY OR AS NEEDED */
        //@ts-ignore
        await clientPromise
        // await kpi.insertMany(kpis);
        // Product.insertMany(products);
        // Transaction.insertMany(transactions);
        const kpiRes = await kpi.find()
        return Response.json(kpiRes)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: error,
        }, {
            status: 404,
        })
    }
}