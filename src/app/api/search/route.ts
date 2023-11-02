import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.url.split("?")[1];
  const url1 = new URLSearchParams(url);
  const query = url1.get("query");
  console.log(query);
  if(!query){
      return NextResponse.json({ status: 401 });
  }else{
      const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=`+process.env.UNSPLASH_ACCESS_KEY);
      const result = await response.json()
      return NextResponse.json({status:200,result})
  }
}
