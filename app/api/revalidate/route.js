import { revalidatePath } from "next/cache";

export async function GET(req) {
  revalidatePath("/test");

  return Response.json({ msg: "path revalidated" });
}
