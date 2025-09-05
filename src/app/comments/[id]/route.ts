import { commentsData } from "./../data";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const comment = commentsData.find((c) => c.id === parseInt(id));
  if (!comment) {
    return new Response("Comment not found", { status: 404 });
  }
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const modifiedData = await request.json();
  const id = (await params).id;
  const comment = commentsData.find((c) => c.id === parseInt(id));
  if (!comment) {
    return new Response("Comment not found", { status: 404 });
  }
  comment.comment = modifiedData.comment || comment.comment;
  return new Response(JSON.stringify(comment), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}


export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const commentIndex = commentsData.findIndex((c) => c.id === parseInt(id));
  
  if (commentIndex === -1) {
    return new Response("Comment not found", { status: 404 });
  }
  
  // Remove the comment from original array
  commentsData.splice(commentIndex, 1);
  
  // Return updated array
  return Response.json(commentsData);
}
