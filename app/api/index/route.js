import client from '../../lib/elastic';
import { NextResponse } from 'next/server';

export async function POST(req){
    try {
        const {name,mobno} = await req.json();
        const res = await client.index({
            index:'cms-aman',
            body:{
                name, 
                mobno
            },
        });
        return NextResponse.json({body:res})
    } catch (error) {
        return NextResponse.json({message:"error occur in Added Details"},{status:500})
    }
}

export async function GET(){
    try {
        const response = await client.search({
            index:'cms-aman',
            body: {
                query: {
                    match_all:{}
                }
              }
        });
        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json({message:"error occur in Getting Details"},{status:500})
    }
}