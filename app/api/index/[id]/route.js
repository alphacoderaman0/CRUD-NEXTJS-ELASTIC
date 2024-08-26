import client from "@/app/lib/elastic";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const _id = params.id;
  const updateInfo = await client.get({
      index: 'cms-aman',
      id: _id
  });
  return NextResponse.json(updateInfo._source);

}

export async function PUT(request, { params }) {
  try {
      const _id = params.id;
      const { name , mobno } = await request.json();
      const updateData = await client.update({
          index: 'cms-aman',
          id:_id,
          body: {
              doc:{
                name,
                mobno
              }
          }
      })
      
      return NextResponse.json(updateData)
  } catch (error) {
      return NextResponse.json({message:"error occur in Updating Details"},{status:500})
  }
}
export async function DELETE(request , {params}){
  try {
    const _id = params.id;
    const deleteData = await client.delete({
        index:'cms-aman',
        id:_id
    })
    return NextResponse.json(deleteData);
  } catch (error) {
    return NextResponse.json({message:"error occur in Deleting Details"},{status:500})
  }

}