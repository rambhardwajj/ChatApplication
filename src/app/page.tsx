import { db } from "@/lib/db";

export default async function Home() {
  await db.set('hello', 'hell')
  return (
    <div className="text-red-500"> Hii </div>
  );
}
