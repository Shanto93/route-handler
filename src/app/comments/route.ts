import { commentsData } from "./data";
export async function GET() {
  // console.log(commentsData);
  return Response.json(commentsData);
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
