import type { NextRequest } from "next/server";
import { commentsData } from "./data";
import { headers } from "next/headers";
export async function GET(request: NextRequest) {
  // const searchParams = request.nextUrl.searchParams;
  // const query = searchParams.get("search");
  // const result = query
  //   ? commentsData.filter((c) => c.comment.includes(query))
  //   : commentsData;
  // return Response.json(result); return Response.json(commentsData);

  const headerList = await headers();
  console.log(headerList.get("Authorization"));
  // return Response.json(commentsData);
  return new Response("<h1>Hello World</h1>", {
    headers: {
      "content-type": "text/html",
    },
  });

  // const requestHeader = new Headers(request.headers);
  // console.log(requestHeader.get("Authorization"));
  // return Response.json(commentsData);
}

export async function POST(request: Request) {
  const newComment = await request.json();
  const updated = {
    id: commentsData.length + 1,
    comment: newComment.comment,
  };
  commentsData.push(updated);
  return new Response(JSON.stringify(updated), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
